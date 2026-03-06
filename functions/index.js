/**
 * UniBolt Firebase Cloud Functions
 * - onApplicationCreated: Auto-screening trigger
 * - calculateEloRating: HTTPS callable for ELO updates
 * - getAiMatchScore: HTTPS callable for AI match scoring
 */
'use strict';

const { onDocumentCreated } = require('firebase-functions/v2/firestore');
const { onCall, HttpsError }  = require('firebase-functions/v2/https');
const { initializeApp }       = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const https = require('https');

initializeApp();

const db = getFirestore();

// ══════════════════════════════════════════════════════════════════════════
// ELO ALGORITHM (server-side mirror of client elo-ranking.js)
// ══════════════════════════════════════════════════════════════════════════

const K_FACTOR_BEGINNER = 40;
const K_FACTOR_DEFAULT  = 32;
const K_FACTOR_MASTER   = 16;
const INITIAL_RATING    = 1200;
const FLOOR_RATING      = 100;

function expectedScore(ratingPlayer, ratingOpponent) {
  return 1 / (1 + Math.pow(10, (ratingOpponent - ratingPlayer) / 400));
}

function getKFactor(gamesPlayed, rating) {
  if (gamesPlayed < 10) return K_FACTOR_BEGINNER;
  if (gamesPlayed > 30 && rating > 2000) return K_FACTOR_MASTER;
  return K_FACTOR_DEFAULT;
}

function calcNewRating(ratingPlayer, ratingOpponent, actualScore, gamesPlayed) {
  const expected = expectedScore(ratingPlayer, ratingOpponent);
  const k        = getKFactor(gamesPlayed || 0, ratingPlayer);
  const delta    = Math.round(k * (actualScore - expected));
  return {
    newRating: Math.max(FLOOR_RATING, ratingPlayer + delta),
    delta,
    expected: parseFloat(expected.toFixed(4)),
  };
}

// ══════════════════════════════════════════════════════════════════════════
// KEYWORD EXTRACTION UTILITIES
// ══════════════════════════════════════════════════════════════════════════

const COMMON_WORDS = new Set([
  'the','a','an','and','or','but','in','on','at','to','for','of','with',
  'by','from','up','about','into','through','during','is','are','was',
  'were','be','been','have','has','had','do','does','did','will','would',
  'could','should','may','might','shall','can','need','our','their','we',
  'you','they','he','she','it','this','that','these','those','i','my',
]);

const TECH_KEYWORDS = new Set([
  'python','javascript','java','typescript','react','nodejs','node','angular',
  'vue','sql','mongodb','postgresql','mysql','redis','docker','kubernetes',
  'aws','gcp','azure','firebase','git','linux','machine learning','deep learning',
  'pytorch','tensorflow','numpy','pandas','sklearn','nlp','computer vision',
  'restful','graphql','api','microservices','agile','scrum','ci/cd',
]);

function tokenize(text) {
  return (text || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s+#.]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 2 && !COMMON_WORDS.has(w));
}

function extractKeywords(text) {
  const words = tokenize(text);
  const freq  = {};
  words.forEach((w) => { freq[w] = (freq[w] || 0) + 1; });

  // Boost tech keywords
  return Object.entries(freq)
    .map(([word, count]) => ({ word, score: count * (TECH_KEYWORDS.has(word) ? 3 : 1) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 25)
    .map(({ word }) => word);
}

function keywordMatchScore(resumeText, jobText) {
  const resumeWords = new Set(tokenize(resumeText));
  const jobKeywords = extractKeywords(jobText);
  if (!jobKeywords.length) return 0;
  const matched = jobKeywords.filter((kw) => resumeWords.has(kw));
  return Math.round((matched.length / jobKeywords.length) * 100);
}

// ══════════════════════════════════════════════════════════════════════════
// 1. onApplicationCreated — Auto-screening trigger
// ══════════════════════════════════════════════════════════════════════════

exports.onApplicationCreated = onDocumentCreated(
  'applications/{applicationId}',
  async (event) => {
    const snap = event.data;
    if (!snap) return;

    const application  = snap.data();
    const applicationId = event.params.applicationId;

    console.info(`[onApplicationCreated] Processing application ${applicationId}`);

    try {
      // Fetch internship details
      const internshipSnap = await db
        .collection('internships')
        .doc(application.internshipId)
        .get();

      if (!internshipSnap.exists) {
        console.warn(`[onApplicationCreated] Internship ${application.internshipId} not found`);
        return;
      }

      const internship = internshipSnap.data();

      // Fetch student profile for resume text
      const studentSnap = await db.collection('users').doc(application.studentId).get();
      const student     = studentSnap.exists ? studentSnap.data() : {};

      // Compute keyword-based match score
      const resumeText = [
        student.bio || '',
        (student.skills || []).join(' '),
        student.university || '',
      ].join(' ');

      const jobText = [
        internship.title || '',
        internship.description || '',
        (internship.skills || []).join(' '),
        internship.requirements || '',
      ].join(' ');

      const matchScore    = keywordMatchScore(resumeText, jobText);
      const resumeKeywords = extractKeywords(resumeText);
      const jobKeywords    = extractKeywords(jobText);
      const matchedSkills  = jobKeywords.filter((kw) => resumeKeywords.includes(kw));
      const missingSkills  = jobKeywords.filter((kw) => !resumeKeywords.includes(kw));

      // Compute applicant rank among existing applications
      const existingAppsSnap = await db
        .collection('applications')
        .where('internshipId', '==', application.internshipId)
        .get();

      const existingScores = existingAppsSnap.docs
        .filter((d) => d.id !== applicationId && d.data().matchScore != null)
        .map((d) => d.data().matchScore);

      const rank = existingScores.filter((s) => s > matchScore).length + 1;

      // Write results back to the application document
      await snap.ref.update({
        matchScore,
        matchedSkills: matchedSkills.slice(0, 10),
        missingSkills: missingSkills.slice(0, 10),
        applicantRank: rank,
        screened:      true,
        screenedAt:    FieldValue.serverTimestamp(),
      });

      // Create a notification for the employer
      const notifRef = db
        .collection('notifications')
        .doc(application.employerId)
        .collection('items')
        .doc();

      await notifRef.set({
        type:         'APPLICATION_UPDATE',
        title:        'New Application',
        body:         `${student.displayName || 'A student'} applied to "${internship.title}" — Match: ${matchScore}%`,
        matchScore,
        applicationId,
        internshipId: application.internshipId,
        read:         false,
        createdAt:    FieldValue.serverTimestamp(),
      });

      console.info(`[onApplicationCreated] Application ${applicationId} screened — score: ${matchScore}%`);
    } catch (err) {
      console.error('[onApplicationCreated] Error:', err);
    }
  }
);

// ══════════════════════════════════════════════════════════════════════════
// 2. calculateEloRating — HTTPS Callable
// ══════════════════════════════════════════════════════════════════════════

exports.calculateEloRating = onCall({ maxInstances: 10 }, async (request) => {
  // Auth check
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'Authentication required.');
  }

  const { playerOneId, playerTwoId, result } = request.data;

  // Input validation
  if (!playerOneId || !playerTwoId || !result) {
    throw new HttpsError('invalid-argument', 'playerOneId, playerTwoId, and result are required.');
  }
  if (!['win', 'loss', 'draw'].includes(result)) {
    throw new HttpsError('invalid-argument', 'result must be "win", "loss", or "draw".');
  }
  if (typeof playerOneId !== 'string' || typeof playerTwoId !== 'string') {
    throw new HttpsError('invalid-argument', 'Player IDs must be strings.');
  }
  if (playerOneId === playerTwoId) {
    throw new HttpsError('invalid-argument', 'Players must be different.');
  }

  // Fetch both player ratings
  const [p1Snap, p2Snap] = await Promise.all([
    db.collection('eloRatings').doc(playerOneId).get(),
    db.collection('eloRatings').doc(playerTwoId).get(),
  ]);

  const p1Data = p1Snap.exists
    ? p1Snap.data()
    : { rating: INITIAL_RATING, gamesPlayed: 0, wins: 0, losses: 0, draws: 0, streak: 0 };
  const p2Data = p2Snap.exists
    ? p2Snap.data()
    : { rating: INITIAL_RATING, gamesPlayed: 0, wins: 0, losses: 0, draws: 0, streak: 0 };

  // result is from playerOne's perspective
  const p1Score = result === 'win' ? 1 : result === 'draw' ? 0.5 : 0;
  const p2Score = result === 'loss' ? 1 : result === 'draw' ? 0.5 : 0;

  const p1Calc = calcNewRating(p1Data.rating, p2Data.rating, p1Score, p1Data.gamesPlayed);
  const p2Calc = calcNewRating(p2Data.rating, p1Data.rating, p2Score, p2Data.gamesPlayed);

  // Calculate streaks
  const p1Streak = result === 'win'
    ? (p1Data.streak >= 0 ? p1Data.streak + 1 : 1)
    : result === 'loss'
      ? (p1Data.streak <= 0 ? p1Data.streak - 1 : -1)
      : 0;

  const p2Streak = result === 'loss'
    ? (p2Data.streak >= 0 ? p2Data.streak + 1 : 1)
    : result === 'win'
      ? (p2Data.streak <= 0 ? p2Data.streak - 1 : -1)
      : 0;

  // Write updated ratings
  const batch = db.batch();

  batch.set(db.collection('eloRatings').doc(playerOneId), {
    rating:      p1Calc.newRating,
    gamesPlayed: (p1Data.gamesPlayed || 0) + 1,
    wins:        result === 'win'  ? (p1Data.wins  || 0) + 1 : (p1Data.wins  || 0),
    losses:      result === 'loss' ? (p1Data.losses || 0) + 1 : (p1Data.losses || 0),
    draws:       result === 'draw' ? (p1Data.draws  || 0) + 1 : (p1Data.draws  || 0),
    streak:      p1Streak,
    lastDelta:   p1Calc.delta,
    updatedAt:   FieldValue.serverTimestamp(),
  });

  batch.set(db.collection('eloRatings').doc(playerTwoId), {
    rating:      p2Calc.newRating,
    gamesPlayed: (p2Data.gamesPlayed || 0) + 1,
    wins:        result === 'loss' ? (p2Data.wins  || 0) + 1 : (p2Data.wins  || 0),
    losses:      result === 'win'  ? (p2Data.losses || 0) + 1 : (p2Data.losses || 0),
    draws:       result === 'draw' ? (p2Data.draws  || 0) + 1 : (p2Data.draws  || 0),
    streak:      p2Streak,
    lastDelta:   p2Calc.delta,
    updatedAt:   FieldValue.serverTimestamp(),
  });

  // Also update public profiles for leaderboard
  batch.update(db.collection('publicProfiles').doc(playerOneId), {
    eloRating: p1Calc.newRating,
    wins:      result === 'win'  ? (p1Data.wins  || 0) + 1 : (p1Data.wins  || 0),
    losses:    result === 'loss' ? (p1Data.losses || 0) + 1 : (p1Data.losses || 0),
    streak:    p1Streak,
    updatedAt: FieldValue.serverTimestamp(),
  });

  batch.update(db.collection('publicProfiles').doc(playerTwoId), {
    eloRating: p2Calc.newRating,
    wins:      result === 'loss' ? (p2Data.wins  || 0) + 1 : (p2Data.wins  || 0),
    losses:    result === 'win'  ? (p2Data.losses || 0) + 1 : (p2Data.losses || 0),
    streak:    p2Streak,
    updatedAt: FieldValue.serverTimestamp(),
  });

  await batch.commit();

  console.info(`[calculateEloRating] ${playerOneId} (${p1Data.rating} → ${p1Calc.newRating}) vs ${playerTwoId} (${p2Data.rating} → ${p2Calc.newRating}) | result: ${result}`);

  return {
    playerOne: {
      id:        playerOneId,
      oldRating: p1Data.rating,
      newRating: p1Calc.newRating,
      delta:     p1Calc.delta,
      expected:  p1Calc.expected,
    },
    playerTwo: {
      id:        playerTwoId,
      oldRating: p2Data.rating,
      newRating: p2Calc.newRating,
      delta:     p2Calc.delta,
      expected:  p2Calc.expected,
    },
  };
});

// ══════════════════════════════════════════════════════════════════════════
// 3. getAiMatchScore — HTTPS Callable
// ══════════════════════════════════════════════════════════════════════════

exports.getAiMatchScore = onCall(
  { maxInstances: 10, secrets: ['GEMINI_API_KEY'] },
  async (request) => {
    if (!request.auth) {
      throw new HttpsError('unauthenticated', 'Authentication required.');
    }

    const { resumeText, jobDescription } = request.data;

    if (!resumeText || typeof resumeText !== 'string' || resumeText.trim().length < 20) {
      throw new HttpsError('invalid-argument', 'resumeText must be a non-empty string (min 20 chars).');
    }
    if (!jobDescription || typeof jobDescription !== 'string' || jobDescription.trim().length < 20) {
      throw new HttpsError('invalid-argument', 'jobDescription must be a non-empty string (min 20 chars).');
    }

    const geminiKey = process.env.GEMINI_API_KEY;

    // Try Gemini AI
    if (geminiKey) {
      try {
        const aiResult = await callGeminiAPI(geminiKey, resumeText.slice(0, 3000), jobDescription.slice(0, 2000));
        return { ...aiResult, source: 'gemini' };
      } catch (err) {
        console.warn('[getAiMatchScore] Gemini API failed, using keyword fallback:', err.message);
      }
    }

    // Keyword fallback
    const fallback = keywordMatchFallback(resumeText, jobDescription);
    return { ...fallback, source: 'keyword-fallback' };
  }
);

/**
 * Call Gemini AI API via HTTPS (Node.js built-in, no external deps).
 */
function callGeminiAPI(apiKey, resumeText, jobDescription) {
  return new Promise((resolve, reject) => {
    const prompt = `You are an expert recruiter. Analyze this resume and job description.\n\nRESUME:\n${resumeText}\n\nJOB DESCRIPTION:\n${jobDescription}\n\nReturn ONLY a JSON object (no markdown) with these fields:\n{"matchScore":<0-100>,"matchedSkills":[<strings>],"missingSkills":[<strings>],"strengths":[<strings>],"summary":"<2 sentences>"}`;

    const bodyStr = JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.1, maxOutputTokens: 512 },
    });

    const options = {
      hostname: 'generativelanguage.googleapis.com',
      path:     `/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      method:   'POST',
      headers:  { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(bodyStr) },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          if (res.statusCode !== 200) {
            return reject(new Error(`Gemini API error ${res.statusCode}: ${data}`));
          }
          const parsed = JSON.parse(data);
          const rawText = parsed?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (!rawText) return reject(new Error('Empty Gemini response'));
          const result = JSON.parse(rawText.trim());
          resolve({
            matchScore:    Math.min(100, Math.max(0, Number(result.matchScore) || 0)),
            matchedSkills: Array.isArray(result.matchedSkills) ? result.matchedSkills.slice(0, 15) : [],
            missingSkills: Array.isArray(result.missingSkills) ? result.missingSkills.slice(0, 15) : [],
            strengths:     Array.isArray(result.strengths)     ? result.strengths.slice(0, 5)     : [],
            summary:       typeof result.summary === 'string'  ? result.summary.slice(0, 500)     : '',
          });
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('Gemini request timeout')); });
    req.write(bodyStr);
    req.end();
  });
}

/**
 * Keyword-based fallback match scoring.
 */
function keywordMatchFallback(resumeText, jobDescription) {
  const resumeWords = new Set(tokenize(resumeText));
  const jobKeywords = extractKeywords(jobDescription);
  const matched     = jobKeywords.filter((kw) => resumeWords.has(kw));
  const missing     = jobKeywords.filter((kw) => !resumeWords.has(kw));
  const score       = jobKeywords.length > 0
    ? Math.round((matched.length / jobKeywords.length) * 100)
    : 0;

  return {
    matchScore:    Math.min(score, 100),
    matchedSkills: matched.slice(0, 10),
    missingSkills: missing.slice(0, 10),
    strengths:     matched.slice(0, 3).map((s) => `Experience with ${s}`),
    summary:       `Keyword analysis shows ${score}% match. ${matched.length} of ${jobKeywords.length} required keywords found.`,
  };
}
