/**
 * AI Matching Service — Resume parsing and job match scoring via Gemini API
 */

const GEMINI_API_URL = import.meta.env.VITE_GEMINI_API_URL ||
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Rate limiting
const REQUEST_INTERVAL_MS = 2000;
let lastRequestTime = 0;

// ── Prompt templates ──────────────────────────────────────────────────────
const MATCH_PROMPT = (resumeText, jobDescription) => `
You are an expert recruiter and talent matcher. Analyze the following resume and job description.

RESUME:
---
${resumeText}
---

JOB DESCRIPTION:
---
${jobDescription}
---

Return a JSON object (no markdown, no explanation) with exactly these fields:
{
  "matchScore": <number 0-100>,
  "matchedSkills": [<string>],
  "missingSkills": [<string>],
  "strengths": [<string>],
  "summary": "<2-sentence summary>"
}
`;

/**
 * Get AI-powered match score between a resume and job description.
 * Falls back to keyword matching if AI is unavailable.
 * @param {string} resumeText
 * @param {string} jobDescription
 * @returns {Promise<{matchScore:number, matchedSkills:string[], missingSkills:string[], strengths:string[], summary:string}>}
 */
export async function getMatchScore(resumeText, jobDescription) {
  if (!resumeText?.trim() || !jobDescription?.trim()) {
    throw new Error('Resume text and job description are required.');
  }

  // Enforce rate limiting
  const now = Date.now();
  if (now - lastRequestTime < REQUEST_INTERVAL_MS) {
    await delay(REQUEST_INTERVAL_MS - (now - lastRequestTime));
  }
  lastRequestTime = Date.now();

  // Try AI first
  if (GEMINI_API_KEY) {
    try {
      return await callGeminiAPI(resumeText, jobDescription);
    } catch (err) {
      console.warn('[AI Matching] Gemini API failed, falling back to keyword matching:', err.message);
    }
  }

  // Fallback: keyword matching
  return keywordMatchFallback(resumeText, jobDescription);
}

async function callGeminiAPI(resumeText, jobDescription) {
  const prompt = MATCH_PROMPT(resumeText.slice(0, 3000), jobDescription.slice(0, 2000));
  const body = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 0.1,
      maxOutputTokens: 512,
      topP: 0.8,
    },
    safetySettings: [
      { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_ONLY_HIGH' },
      { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_ONLY_HIGH' },
    ],
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const res = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Gemini API error ${res.status}: ${errText}`);
    }

    const data = await res.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawText) throw new Error('Empty response from Gemini API');

    const parsed = JSON.parse(rawText.trim());
    return sanitizeMatchResult(parsed);
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * Keyword-based fallback matching (no AI required).
 */
function keywordMatchFallback(resumeText, jobDescription) {
  const resumeWords  = tokenize(resumeText);
  const jobWords     = tokenize(jobDescription);
  const jobKeywords  = extractKeywords(jobWords);
  const matched      = jobKeywords.filter((kw) => resumeWords.includes(kw));
  const missing      = jobKeywords.filter((kw) => !resumeWords.includes(kw));
  const score        = jobKeywords.length > 0
    ? Math.round((matched.length / jobKeywords.length) * 100)
    : 0;

  return {
    matchScore:    Math.min(score, 100),
    matchedSkills: matched.slice(0, 10),
    missingSkills: missing.slice(0, 10),
    strengths:     matched.slice(0, 3).map((s) => `Experience with ${s}`),
    summary:       `Keyword analysis shows ${score}% match. ${matched.length} of ${jobKeywords.length} required keywords found in resume.`,
    source:        'keyword-fallback',
  };
}

// ── Utilities ─────────────────────────────────────────────────────────────

const COMMON_WORDS = new Set(['the','a','an','and','or','but','in','on','at','to','for','of','with','by','from','up','about','into','through','during','is','are','was','were','be','been','have','has','had','do','does','did','will','would','could','should','may','might','shall','can','need','dare','ought']);

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s+#.]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 2 && !COMMON_WORDS.has(w));
}

function extractKeywords(words) {
  const freq = {};
  words.forEach((w) => { freq[w] = (freq[w] || 0) + 1; });
  return Object.entries(freq)
    .filter(([, count]) => count >= 1)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 30)
    .map(([word]) => word);
}

function sanitizeMatchResult(obj) {
  return {
    matchScore:    Math.min(100, Math.max(0, Number(obj.matchScore) || 0)),
    matchedSkills: Array.isArray(obj.matchedSkills) ? obj.matchedSkills.slice(0, 15) : [],
    missingSkills: Array.isArray(obj.missingSkills) ? obj.missingSkills.slice(0, 15) : [],
    strengths:     Array.isArray(obj.strengths)     ? obj.strengths.slice(0, 5)     : [],
    summary:       typeof obj.summary === 'string'  ? obj.summary.slice(0, 500)     : '',
    source:        'gemini',
  };
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
