/**
 * Profile — User profile management
 */

import { requireAuth, getUserProfile, logout } from '../../js/core/auth-service.js';
import { getUser, updateUser, getSkillTree } from '../../js/services/firestore-api.js';
import { uploadResume, uploadProfilePicture } from '../../js/services/storage-service.js';
import { createLineChart } from '../../js/components/svg-progress.js';
import { getRankTitle } from '../../js/services/elo-ranking.js';
import { toast } from '../../js/components/toast-notifications.js';
import { initScrollReveal } from '../../js/components/intersection-observer.js';

// ── Helpers ───────────────────────────────────────────────────

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function initials(name) {
  return String(name || 'U')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
}

// ── Achievement Definitions ───────────────────────────────────

const ACHIEVEMENTS = [
  { id: 'first-login',   icon: '🎉', label: 'First Login',  condition: (p) => !!p },
  { id: 'first-app',     icon: '📋', label: 'Applied',      condition: (p) => (p?.applications ?? 0) >= 1 },
  { id: 'five-apps',     icon: '🚀', label: '5 Applications', condition: (p) => (p?.applications ?? 0) >= 5 },
  { id: 'first-skill',   icon: '⭐', label: 'First Skill',  condition: (p) => (p?.skillsUnlocked ?? 0) >= 1 },
  { id: 'five-skills',   icon: '🌟', label: '5 Skills',     condition: (p) => (p?.skillsUnlocked ?? 0) >= 5 },
  { id: 'first-win',     icon: '🏆', label: 'First Win',    condition: (p) => (p?.wins ?? 0) >= 1 },
  { id: 'ten-wins',      icon: '👑', label: '10 Wins',      condition: (p) => (p?.wins ?? 0) >= 10 },
  { id: 'elo-1500',      icon: '⚡', label: 'ELO 1500+',   condition: (p) => (p?.elo ?? 1000) >= 1500 },
  { id: 'elo-2000',      icon: '💎', label: 'ELO 2000+',   condition: (p) => (p?.elo ?? 1000) >= 2000 },
];

// ── Skill labels (subset from skill tree) ─────────────────────

const SKILL_LABELS = {
  python: 'Python 🐍',
  javascript: 'JavaScript 🟨',
  java: 'Java ☕',
  cpp: 'C++ ⚙️',
  numpy: 'NumPy 🔢',
  pandas: 'Pandas 🐼',
  pytorch: 'PyTorch 🔥',
  'computer-vision': 'Computer Vision 👁️',
  nlp: 'NLP 💬',
  'html-css': 'HTML/CSS 🎨',
  react: 'React ⚛️',
  nextjs: 'Next.js ▲',
  nodejs: 'Node.js 🟢',
  typescript: 'TypeScript 🔷',
  communication: 'Communication 🗣️',
  leadership: 'Leadership 👑',
  'technical-writing': 'Tech Writing ✍️',
};

// ── State ─────────────────────────────────────────────────────

let currentUser   = null;
let userProfile   = null;

// ── Init ──────────────────────────────────────────────────────

async function init() {
  currentUser = await requireAuth('/src/pages/auth/auth.html');
  if (!currentUser) return;

  setupLogout();
  renderTopbarAvatar();
  initScrollReveal();

  // Load profile data in parallel
  const [profile, skillTree] = await Promise.allSettled([
    getUserProfile(currentUser.uid),
    getSkillTree(currentUser.uid),
  ]);

  userProfile = profile.status === 'fulfilled' ? profile.value : {};
  const skillData = skillTree.status === 'fulfilled' ? skillTree.value : null;

  populateHero(userProfile);
  populateForm(userProfile);
  renderStats(userProfile);
  renderEloChart(userProfile);
  renderAchievements(userProfile);
  renderSkillTags(skillData);
  setupForm();
  setupAvatarUpload();
  setupResumeUpload();
  setupBioCharCount();

  // Show current resume link if present
  if (userProfile?.resumeURL) {
    const el = document.getElementById('current-resume');
    const link = document.getElementById('current-resume-link');
    if (el && link) {
      el.style.display = 'flex';
      link.href = userProfile.resumeURL;
    }
  }
}

// ── Auth ──────────────────────────────────────────────────────

function setupLogout() {
  document.getElementById('logout-btn')?.addEventListener('click', async () => {
    try {
      await logout();
      window.location.href = '/src/pages/auth/auth.html';
    } catch {
      toast.error('Failed to log out. Please try again.');
    }
  });

  document.getElementById('sidebar-toggle')?.addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar?.classList.toggle('open');
  });
}

function renderTopbarAvatar() {
  const avatarImg      = document.getElementById('user-avatar-topbar');
  const avatarFallback = document.getElementById('avatar-fallback-topbar');
  const displayName    = currentUser.displayName || currentUser.email || 'U';
  const ini            = initials(displayName);

  if (currentUser.photoURL && avatarImg) avatarImg.src = currentUser.photoURL;
  if (avatarFallback) avatarFallback.textContent = ini;
}

// ── Hero ──────────────────────────────────────────────────────

function populateHero(profile) {
  const displayName = profile?.displayName || currentUser.displayName || 'Student';
  const elo         = profile?.elo ?? 1000;
  const rankInfo    = getRankTitle(elo);

  // Name
  const nameEl = document.getElementById('hero-display-name');
  if (nameEl) nameEl.textContent = displayName;

  // Role
  const roleEl = document.getElementById('hero-role');
  if (roleEl) roleEl.textContent = profile?.role || 'Student';

  // ELO
  const eloEl  = document.getElementById('hero-elo-value');
  const rankEl = document.getElementById('hero-rank-title');
  if (eloEl)  eloEl.textContent  = elo;
  if (rankEl) rankEl.textContent = `${rankInfo.icon} ${rankInfo.title}`;

  // Avatar
  const avatarImg      = document.getElementById('profile-avatar-img');
  const avatarFallback = document.getElementById('profile-avatar-fallback');
  const photoURL       = profile?.photoURL || currentUser.photoURL;
  if (photoURL && avatarImg) {
    avatarImg.src = photoURL;
  }
  if (avatarFallback) {
    avatarFallback.textContent = initials(displayName);
  }
}

// ── Form ──────────────────────────────────────────────────────

function populateForm(profile) {
  const fields = {
    'field-name':       profile?.displayName || currentUser.displayName || '',
    'field-bio':        profile?.bio         || '',
    'field-university': profile?.university  || '',
    'field-linkedin':   profile?.linkedin    || '',
  };

  Object.entries(fields).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.value = value;
  });

  updateBioCharCount();
}

function setupForm() {
  const form = document.getElementById('profile-form');
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    await saveProfile();
  });
}

async function saveProfile() {
  const btn = document.getElementById('save-profile-btn');
  if (btn) btn.disabled = true;

  const displayName = document.getElementById('field-name')?.value.trim();
  const bio         = document.getElementById('field-bio')?.value.trim();
  const university  = document.getElementById('field-university')?.value.trim();
  const linkedin    = document.getElementById('field-linkedin')?.value.trim();

  // Basic validation
  if (!displayName) {
    toast.warning('Display name is required.');
    if (btn) btn.disabled = false;
    return;
  }

  if (linkedin && !/^https?:\/\//i.test(linkedin)) {
    toast.warning('LinkedIn URL must start with http:// or https://');
    if (btn) btn.disabled = false;
    return;
  }

  try {
    await updateUser(currentUser.uid, { displayName, bio, university, linkedin });
    toast.success('Profile saved successfully!');

    // Update hero name in real time
    const nameEl = document.getElementById('hero-display-name');
    if (nameEl) nameEl.textContent = displayName;
  } catch {
    toast.error('Failed to save profile. Please try again.');
  } finally {
    if (btn) btn.disabled = false;
  }
}

function setupBioCharCount() {
  const bio     = document.getElementById('field-bio');
  const counter = document.getElementById('bio-char-count');
  bio?.addEventListener('input', () => {
    if (counter) counter.textContent = `${bio.value.length} / 300`;
  });
}

function updateBioCharCount() {
  const bio     = document.getElementById('field-bio');
  const counter = document.getElementById('bio-char-count');
  if (bio && counter) counter.textContent = `${bio.value.length} / 300`;
}

// ── Stats ─────────────────────────────────────────────────────

function renderStats(profile) {
  const map = {
    'stat-elo':    profile?.elo          ?? 1000,
    'stat-apps':   profile?.applications ?? 0,
    'stat-skills': profile?.skillsUnlocked ?? 0,
    'stat-wins':   profile?.wins         ?? 0,
  };

  Object.entries(map).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  });
}

// ── ELO Chart ─────────────────────────────────────────────────

function renderEloChart(profile) {
  const container = document.getElementById('elo-chart-container');
  if (!container) return;

  // Use real history or generate mock data
  let history = profile?.eloHistory;
  if (!history || history.length < 2) {
    const base = profile?.elo ?? 1000;
    history = generateMockEloHistory(base);
  }

  const labels = history.map((_, i) => `Match ${i + 1}`);
  const data   = history.map((h) => (typeof h === 'number' ? h : h.elo ?? 1000));

  const placeholder = document.getElementById('chart-placeholder');
  if (placeholder) placeholder.remove();

  try {
    const chart = createLineChart({
      data,
      labels,
      width: container.clientWidth || 400,
      height: 180,
      color: '#6366f1',
      label: 'ELO',
      fill: true,
    });
    container.appendChild(chart);
  } catch {
    container.innerHTML = '<p style="color:var(--color-text-tertiary);font-size:var(--text-sm);text-align:center;padding:2rem">Chart unavailable</p>';
  }
}

function generateMockEloHistory(current) {
  const points = 10;
  const history = [current];
  for (let i = 1; i < points; i++) {
    const delta = Math.floor(Math.random() * 40) - 20;
    history.unshift(Math.max(800, history[0] - delta));
  }
  return history;
}

// ── Achievements ──────────────────────────────────────────────

function renderAchievements(profile) {
  const grid = document.getElementById('achievements-grid');
  if (!grid) return;

  grid.innerHTML = ACHIEVEMENTS.map((a) => {
    const earned = a.condition(profile);
    return `
      <div class="achievement-badge${earned ? '' : ' locked'}" title="${esc(a.label)}${earned ? '' : ' (locked)'}">
        <span class="achievement-icon" aria-hidden="true">${a.icon}</span>
        <span class="achievement-label">${esc(a.label)}</span>
      </div>
    `;
  }).join('');
}

// ── Skills ────────────────────────────────────────────────────

function renderSkillTags(skillData) {
  const container = document.getElementById('skills-tags-container');
  if (!container) return;

  const skills = skillData?.skills ?? {};
  const unlocked = Object.entries(skills)
    .filter(([, state]) => state === 'unlocked')
    .map(([id]) => id);

  if (unlocked.length === 0) {
    container.innerHTML = '<span style="font-size:var(--text-sm);color:var(--color-text-tertiary)">No skills unlocked yet. Visit the Skill Tree!</span>';
    return;
  }

  container.innerHTML = unlocked
    .map((id) => `<span class="skill-tag">${esc(SKILL_LABELS[id] || id)}</span>`)
    .join('');
}

// ── Avatar Upload ─────────────────────────────────────────────

function setupAvatarUpload() {
  const uploadBtn = document.getElementById('avatar-upload-btn');
  const fileInput = document.getElementById('avatar-file-input');

  uploadBtn?.addEventListener('click', () => fileInput?.click());
  fileInput?.addEventListener('change', async () => {
    const file = fileInput.files?.[0];
    if (!file) return;
    fileInput.value = '';
    await handleAvatarUpload(file);
  });
}

async function handleAvatarUpload(file) {
  const ring = document.getElementById('profile-avatar-ring');

  // Preview immediately
  const objectURL = URL.createObjectURL(file);
  const imgEl     = document.getElementById('profile-avatar-img');
  if (imgEl) imgEl.src = objectURL;

  // Visual indicator
  if (ring) ring.style.borderColor = '#38bdf8';

  try {
    const downloadURL = await uploadProfilePicture(currentUser.uid, file, (progress) => {
      if (ring) ring.style.opacity = String(0.5 + progress / 200);
    });

    await updateUser(currentUser.uid, { photoURL: downloadURL });
    if (imgEl) imgEl.src = downloadURL;
    if (ring) { ring.style.borderColor = ''; ring.style.opacity = ''; }

    // Also update topbar avatar
    const topbarImg = document.getElementById('user-avatar-topbar');
    if (topbarImg) topbarImg.src = downloadURL;

    toast.success('Profile picture updated!');
  } catch {
    // Revert preview on error
    if (imgEl) imgEl.src = userProfile?.photoURL || currentUser.photoURL || '';
    if (ring) { ring.style.borderColor = ''; ring.style.opacity = ''; }
    toast.error('Failed to upload photo. Please try again.');
  } finally {
    URL.revokeObjectURL(objectURL);
  }
}

// ── Resume Upload ─────────────────────────────────────────────

function setupResumeUpload() {
  const area      = document.getElementById('resume-upload-area');
  const fileInput = document.getElementById('resume-file-input');
  const browseBtn = document.getElementById('resume-browse-btn');

  browseBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    fileInput?.click();
  });
  area?.addEventListener('click', () => fileInput?.click());

  area?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fileInput?.click(); }
  });

  fileInput?.addEventListener('change', async () => {
    const file = fileInput.files?.[0];
    if (!file) return;
    fileInput.value = '';
    await handleResumeUpload(file);
  });

  // Drag & drop
  area?.addEventListener('dragover', (e) => {
    e.preventDefault();
    area.classList.add('drag-over');
  });

  area?.addEventListener('dragleave', () => area.classList.remove('drag-over'));

  area?.addEventListener('drop', async (e) => {
    e.preventDefault();
    area.classList.remove('drag-over');
    const file = e.dataTransfer?.files?.[0];
    if (file?.type === 'application/pdf') {
      await handleResumeUpload(file);
    } else {
      toast.warning('Please upload a PDF file.');
    }
  });
}

async function handleResumeUpload(file) {
  const progressEl  = document.getElementById('resume-progress');
  const fillEl      = document.getElementById('progress-bar-fill');
  const trackEl     = document.getElementById('progress-bar-track');
  const pctEl       = document.getElementById('progress-pct');
  const filenameEl  = document.getElementById('progress-filename');

  if (filenameEl)  filenameEl.textContent = file.name;
  if (progressEl)  progressEl.style.display = '';
  setProgress(0, fillEl, trackEl, pctEl);

  try {
    const downloadURL = await uploadResume(currentUser.uid, file, (progress) => {
      setProgress(progress, fillEl, trackEl, pctEl);
    });

    setProgress(100, fillEl, trackEl, pctEl);

    await updateUser(currentUser.uid, { resumeURL: downloadURL });

    // Show current resume link
    const linkEl = document.getElementById('current-resume-link');
    const linkWrap = document.getElementById('current-resume');
    if (linkEl) linkEl.href = downloadURL;
    if (linkWrap) linkWrap.style.display = 'flex';

    toast.success('Resume uploaded successfully!');

    setTimeout(() => {
      if (progressEl) progressEl.style.display = 'none';
    }, 2000);
  } catch (err) {
    if (progressEl) progressEl.style.display = 'none';
    const msg = err?.message?.includes('size') ? 'File exceeds 10 MB limit.' : 'Upload failed. Please try again.';
    toast.error(msg);
  }
}

function setProgress(value, fillEl, trackEl, pctEl) {
  const pct = Math.max(0, Math.min(100, value));
  if (fillEl)  fillEl.style.width    = `${pct}%`;
  if (trackEl) trackEl.setAttribute('aria-valuenow', String(pct));
  if (pctEl)   pctEl.textContent     = `${Math.round(pct)}%`;
}

// ── Bootstrap ────────────────────────────────────────────────

init().catch((err) => {
  console.error('Profile init failed:', err);
  toast.error('Failed to load profile. Please refresh.');
});
