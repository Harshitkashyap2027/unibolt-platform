/**
 * Student Dashboard — Main controller module
 */

import { requireAuth, getUserProfile, logout } from '../../js/core/auth-service.js';
import {
  getStudentApplications,
  listInternships,
  getSkillTree,
} from '../../js/services/firestore-api.js';
import { toast } from '../../js/components/toast-notifications.js';
import { skeletonHTML } from '../../js/components/skeleton-loader.js';
import { initScrollReveal, staggerReveal, initCounters } from '../../js/components/intersection-observer.js';

// ── Helpers ───────────────────────────────────────────────────

/**
 * Escape user-supplied strings to prevent XSS when inserting into innerHTML.
 * @param {string} str
 * @returns {string}
 */
function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Format a Firestore Timestamp or JS Date to a short readable string.
 * @param {object|Date|null} timestamp
 * @returns {string}
 */
function formatDate(timestamp) {
  if (!timestamp) return '';
  const date = timestamp?.toDate ? timestamp.toDate() : new Date(timestamp);
  return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

/**
 * Derive a 1–2 letter initials string from a display name.
 * @param {string} name
 * @returns {string}
 */
function initials(name) {
  return String(name || 'U')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
}

// ── Status badge mapping ──────────────────────────────────────

const STATUS_LABEL = {
  applied:   'Applied',
  screening: 'Screening',
  interview: 'Interview',
  offer:     'Offer',
  rejected:  'Rejected',
};

const STATUS_CLASS = {
  applied:   'badge-status-applied',
  screening: 'badge-status-screening',
  interview: 'badge-status-interview',
  offer:     'badge-status-offer',
  rejected:  'badge-status-rejected',
};

// ── Render: Internship Card ───────────────────────────────────

/**
 * Build HTML for a single internship recommendation card.
 * @param {object} internship
 * @returns {string}
 */
function renderInternshipCard(internship) {
  const skills = Array.isArray(internship.skills) ? internship.skills : [];
  const matchScore = internship.matchScore ?? internship.match_score ?? null;
  const matchPct = matchScore !== null ? Math.min(100, Math.max(0, Math.round(Number(matchScore)))) : null;
  const logoInitial = esc(internship.company?.[0] ?? '?').toUpperCase();
  const location = internship.location || 'Remote';
  const stipend = internship.stipend ? `₹${Number(internship.stipend).toLocaleString('en-IN')}/mo` : '';

  const skillTags = skills
    .slice(0, 4)
    .map((s) => `<span class="badge badge-outline">${esc(s)}</span>`)
    .join('');
  const extraSkills = skills.length > 4
    ? `<span class="badge badge-secondary">+${skills.length - 4}</span>`
    : '';

  const matchHTML = matchPct !== null
    ? `<div class="internship-match" title="${matchPct}% skill match">
        <div class="internship-match-bar">
          <div class="internship-match-fill" style="width:${matchPct}%"></div>
        </div>
        ${matchPct}%
       </div>`
    : '';

  return `
    <article class="internship-card reveal" role="listitem">
      <div class="internship-card-header">
        <div class="internship-logo" aria-hidden="true">${logoInitial}</div>
        <div class="internship-meta">
          <p class="internship-title" title="${esc(internship.title)}">${esc(internship.title)}</p>
          <p class="internship-company">${esc(internship.company)}</p>
        </div>
        ${matchHTML}
      </div>

      ${skills.length > 0 ? `<div class="internship-skills">${skillTags}${extraSkills}</div>` : ''}

      <div class="internship-card-footer">
        <span class="internship-location">
          <svg viewBox="0 0 20 20" fill="currentColor" width="12" height="12" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
          </svg>
          ${esc(location)}
        </span>
        ${stipend ? `<span class="internship-stipend">${esc(stipend)}</span>` : ''}
        <button
          class="btn btn-primary"
          style="padding:6px 14px;font-size:0.8125rem"
          data-internship-id="${esc(internship.id ?? '')}"
          aria-label="Apply to ${esc(internship.title)} at ${esc(internship.company)}"
        >Apply</button>
      </div>
    </article>`;
}

// ── Render: Application Item ──────────────────────────────────

/**
 * Build HTML for a single application row.
 * @param {object} app
 * @returns {string}
 */
function renderApplicationItem(app) {
  const status = (app.status || 'applied').toLowerCase();
  const label = STATUS_LABEL[status] ?? esc(status);
  const cls   = STATUS_CLASS[status] ?? 'badge-secondary';
  const logoInitial = esc(app.companyName?.[0] ?? app.internshipTitle?.[0] ?? '?').toUpperCase();

  return `
    <div class="application-item reveal" role="listitem">
      <div class="application-company-logo" aria-hidden="true">${logoInitial}</div>
      <div class="application-info">
        <p class="application-title" title="${esc(app.internshipTitle)}">${esc(app.internshipTitle ?? 'Untitled Role')}</p>
        <p class="application-company">${esc(app.companyName ?? '')}</p>
      </div>
      <time class="application-date" datetime="${esc(app.appliedAt ? new Date(app.appliedAt?.toDate?.() ?? app.appliedAt).toISOString() : '')}">
        ${formatDate(app.appliedAt)}
      </time>
      <span class="badge ${esc(cls)}" aria-label="Status: ${esc(label)}">${esc(label)}</span>
    </div>`;
}

// ── Load: User Profile ────────────────────────────────────────

async function loadUserProfile(user) {
  try {
    const profile = await getUserProfile(user.uid);
    const name = profile?.displayName || user.displayName || 'Student';

    const welcomeNameEl = document.getElementById('welcome-name');
    if (welcomeNameEl) welcomeNameEl.textContent = name;

    const avatarFallback = document.getElementById('avatar-fallback');
    if (avatarFallback) avatarFallback.textContent = initials(name);

    const avatarImg = document.getElementById('user-avatar');
    if (avatarImg && (profile?.photoURL || user.photoURL)) {
      avatarImg.src = profile?.photoURL || user.photoURL;
      avatarImg.style.display = 'block';
      if (avatarFallback) avatarFallback.style.display = 'none';
    }

    return profile;
  } catch (err) {
    console.error('[Dashboard] Failed to load user profile:', err);
    return null;
  }
}

// ── Load: Stats ───────────────────────────────────────────────

async function loadStats(user, profile) {
  const eloEl   = document.getElementById('stat-elo');
  const skillsEl = document.getElementById('stat-skills');

  try {
    // ELO rating from profile (set by firestore-api / elo-ranking service)
    if (eloEl) {
      const elo = profile?.eloRating ?? 1200;
      eloEl.dataset.target = elo;
      eloEl.textContent = elo;
    }

    // Skills count from skill tree
    try {
      const skillTree = await getSkillTree(user.uid);
      const unlockedCount = Array.isArray(skillTree?.unlocked)
        ? skillTree.unlocked.length
        : Object.values(skillTree ?? {}).filter(Boolean).length;
      if (skillsEl) {
        skillsEl.dataset.target = unlockedCount;
        skillsEl.textContent = unlockedCount;
      }
    } catch {
      if (skillsEl) skillsEl.textContent = '0';
    }
  } catch (err) {
    console.error('[Dashboard] Failed to load stats:', err);
  }
}

// ── Load: Applications ────────────────────────────────────────

async function loadApplications(userId) {
  const skeleton   = document.getElementById('applications-skeleton');
  const container  = document.getElementById('applications-container');
  const emptyState = document.getElementById('applications-empty');
  const countBadge = document.getElementById('applications-count');
  const statApps   = document.getElementById('stat-applications');
  const statIntvw  = document.getElementById('stat-interviews');

  if (!container) return;

  try {
    const applications = await getStudentApplications(userId);

    // Hide skeleton
    if (skeleton) skeleton.style.display = 'none';

    if (!applications || applications.length === 0) {
      container.innerHTML = '';
      if (emptyState) emptyState.style.display = 'flex';
      if (countBadge) countBadge.textContent = '0';
      if (statApps)  { statApps.textContent = '0'; statApps.dataset.target = '0'; }
      if (statIntvw) { statIntvw.textContent = '0'; statIntvw.dataset.target = '0'; }
      return;
    }

    const interviewCount = applications.filter(
      (a) => ['interview', 'offer'].includes((a.status || '').toLowerCase())
    ).length;

    if (countBadge) countBadge.textContent = applications.length;
    if (statApps)  { statApps.dataset.target = applications.length; statApps.textContent = applications.length; }
    if (statIntvw) { statIntvw.dataset.target = interviewCount; statIntvw.textContent = interviewCount; }

    container.innerHTML = applications
      .slice(0, 8)
      .map(renderApplicationItem)
      .join('');

    staggerReveal(container, '.application-item', 80);

  } catch (err) {
    console.error('[Dashboard] Failed to load applications:', err);
    if (skeleton) skeleton.style.display = 'none';
    if (container) container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">⚠️</div>
        <p class="empty-state-title">Could not load applications</p>
        <p class="empty-state-text">${esc(err?.message ?? 'Please try again later.')}</p>
      </div>`;
    toast.error('Failed to load your applications. Please refresh the page.');
  }
}

// ── Load: Recommended Internships ────────────────────────────

async function loadRecommendations() {
  const skeleton   = document.getElementById('recommendations-skeleton');
  const container  = document.getElementById('recommendations-container');

  if (!container) return;

  try {
    const result = await listInternships({ pageSize: 6 });
    const internships = Array.isArray(result) ? result : (result?.internships ?? []);

    // Hide skeleton
    if (skeleton) skeleton.style.display = 'none';

    if (!internships || internships.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🔍</div>
          <p class="empty-state-title">No internships available</p>
          <p class="empty-state-text">Check back soon for new opportunities.</p>
        </div>`;
      return;
    }

    container.innerHTML = internships.map(renderInternshipCard).join('');

    staggerReveal(container, '.internship-card', 100);

    // Bind Apply buttons
    container.querySelectorAll('[data-internship-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.internshipId;
        if (id) {
          window.location.href = `../internship/internship.html?id=${encodeURIComponent(id)}`;
        }
      });
    });

  } catch (err) {
    console.error('[Dashboard] Failed to load recommendations:', err);
    if (skeleton) skeleton.style.display = 'none';
    if (container) container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">⚠️</div>
        <p class="empty-state-title">Could not load recommendations</p>
        <p class="empty-state-text">${esc(err?.message ?? 'Please try again later.')}</p>
      </div>`;
    toast.error('Failed to load internship recommendations.');
  }
}

// ── Sidebar toggle (mobile) ───────────────────────────────────

function initSidebarToggle() {
  const toggleBtn = document.getElementById('sidebar-toggle');
  const sidebar   = document.getElementById('sidebar');
  if (!toggleBtn || !sidebar) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
  });

  // Close sidebar when clicking outside on mobile
  document.addEventListener('click', (e) => {
    if (
      sidebar.classList.contains('open') &&
      !sidebar.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      sidebar.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

// ── Bootstrap ─────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Guard — redirect to auth if not logged in
  let user;
  try {
    user = await requireAuth();
  } catch {
    return; // requireAuth redirects; nothing more to do
  }

  initSidebarToggle();
  initScrollReveal();

  // 2. Load user profile concurrently with data fetches
  const [profile] = await Promise.all([
    loadUserProfile(user),
    loadRecommendations(),
    loadApplications(user.uid),
  ]);

  // 3. Load stats that depend on profile
  await loadStats(user, profile);

  // 4. Animate counters after data is rendered
  initCounters(document);

  // Re-run scroll reveal to pick up dynamically-rendered elements
  initScrollReveal();

  // 5. Logout
  document.getElementById('logout-btn')?.addEventListener('click', async () => {
    try {
      await logout();
      window.location.href = '/src/pages/auth/auth.html';
    } catch (err) {
      toast.error('Logout failed. Please try again.');
      console.error('[Dashboard] Logout error:', err);
    }
  });
});
