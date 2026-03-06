/**
 * Employer Dashboard — Main controller module
 */

import { requireRole, getUserProfile, logout } from '../../js/core/auth-service.js';
import {
  getEmployerInternships,
  createInternship,
  getInternshipApplications,
} from '../../js/services/firestore-api.js';
import { showModal } from '../../js/components/modal.js';
import { toast } from '../../js/components/toast-notifications.js';
import { initScrollReveal, staggerReveal, initCounters } from '../../js/components/intersection-observer.js';

// ── Helpers ───────────────────────────────────────────────────

/**
 * Escape user-supplied strings for safe innerHTML insertion.
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
 * Derive initials from a display name.
 * @param {string} name
 * @returns {string}
 */
function initials(name) {
  return String(name || 'E')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
}

/**
 * Format a Firestore Timestamp or Date to a short readable string.
 * @param {object|Date|null} timestamp
 * @returns {string}
 */
function formatDate(timestamp) {
  if (!timestamp) return '';
  const date = timestamp?.toDate ? timestamp.toDate() : new Date(timestamp);
  return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

// ── Render: Internship Posting Item ──────────────────────────

/**
 * Build HTML for a single internship posting row.
 * @param {object} internship
 * @param {number} applicantCount
 * @returns {string}
 */
function renderPostingItem(internship, applicantCount = 0) {
  const deadline = internship.deadline ? formatDate(internship.deadline) : 'Open';
  const location = internship.location || 'Remote';
  const stipend  = internship.stipend
    ? `₹${Number(internship.stipend).toLocaleString('en-IN')}/mo`
    : 'Unpaid';

  return `
    <div class="posting-item reveal" role="listitem" data-internship-id="${esc(internship.id ?? '')}">
      <div class="posting-icon" aria-hidden="true">
        <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
          <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"/>
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
        </svg>
      </div>
      <div class="posting-meta">
        <p class="posting-title" title="${esc(internship.title)}">${esc(internship.title)}</p>
        <div class="posting-details">
          <span class="posting-detail">
            <svg viewBox="0 0 20 20" fill="currentColor" width="12" height="12" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
            </svg>
            ${esc(location)}
          </span>
          <span class="posting-detail">${esc(stipend)}</span>
          <span class="posting-detail">Deadline: ${esc(deadline)}</span>
        </div>
      </div>
      <span class="posting-applicants" aria-label="${applicantCount} applicants">
        <svg viewBox="0 0 20 20" fill="currentColor" width="12" height="12" aria-hidden="true">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zm5 6v1a3 3 0 01-3 3H5a3 3 0 01-3-3v-1a5 5 0 0110 0 5 5 0 0110 0z"/>
        </svg>
        ${applicantCount}
      </span>
      <div class="posting-actions">
        <button
          class="btn-view"
          type="button"
          aria-label="View applicants for ${esc(internship.title)}"
          data-action="view"
          data-id="${esc(internship.id ?? '')}"
          title="View applicants"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" aria-hidden="true">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
            <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
          </svg>
        </button>
        <button
          class="btn-delete"
          type="button"
          aria-label="Delete ${esc(internship.title)}"
          data-action="delete"
          data-id="${esc(internship.id ?? '')}"
          title="Delete posting"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" aria-hidden="true">
            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zm-1 7a1 1 0 112 0v4a1 1 0 11-2 0V9zm4 0a1 1 0 112 0v4a1 1 0 11-2 0V9z" clip-rule="evenodd"/>
          </svg>
        </button>
      </div>
    </div>`;
}

// ── Render: Candidate Item ────────────────────────────────────

/**
 * Build HTML for a single top candidate row.
 * @param {object} candidate  - application or user-like object
 * @param {number} rank       - 1-based rank
 * @returns {string}
 */
function renderCandidateItem(candidate, rank) {
  const name   = esc(candidate.studentName || candidate.displayName || 'Candidate');
  const role   = esc(candidate.internshipTitle || candidate.university || '');
  const elo    = candidate.eloRating ?? candidate.elo ?? '—';
  const match  = candidate.matchScore != null
    ? `${Math.min(100, Math.round(Number(candidate.matchScore)))}%`
    : null;
  const avatarText = initials(candidate.studentName || candidate.displayName || 'C');
  const photoURL   = candidate.photoURL || '';

  return `
    <div class="candidate-item reveal" role="listitem">
      <div class="candidate-avatar" aria-hidden="true">
        ${photoURL
          ? `<img src="${esc(photoURL)}" alt="" />`
          : avatarText}
      </div>
      <div class="candidate-info">
        <p class="candidate-name" title="${name}">${name}</p>
        ${role ? `<p class="candidate-role">${role}</p>` : ''}
      </div>
      <span class="candidate-elo" title="ELO Rating">
        ⭐ ${esc(String(elo))}
      </span>
      ${match ? `<span class="candidate-match-score" title="Match score">${esc(match)}</span>` : ''}
      <button
        class="candidate-chat-btn"
        type="button"
        aria-label="Chat with ${name}"
        data-student-id="${esc(candidate.studentId ?? candidate.uid ?? '')}"
        title="Message candidate"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" aria-hidden="true">
          <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd"/>
        </svg>
      </button>
    </div>`;
}

// ── Build Create Internship Form ──────────────────────────────

/**
 * Returns the HTML string for the create-internship modal form.
 * @returns {string}
 */
function buildInternshipFormHTML() {
  return `
    <form class="internship-form" id="create-internship-form" novalidate>
      <div class="form-group">
        <label class="form-label" for="ci-title">Job Title <span aria-hidden="true">*</span></label>
        <input
          type="text"
          id="ci-title"
          class="input"
          placeholder="e.g. Frontend Developer Intern"
          required
          autocomplete="off"
          maxlength="120"
        />
        <div class="form-error" id="ci-title-error" style="display:none"></div>
      </div>

      <div class="form-group">
        <label class="form-label" for="ci-description">Description <span aria-hidden="true">*</span></label>
        <textarea
          id="ci-description"
          class="input textarea"
          placeholder="Describe the role, responsibilities, and what you're looking for…"
          rows="4"
          required
          maxlength="2000"
        ></textarea>
        <div class="form-error" id="ci-description-error" style="display:none"></div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label" for="ci-location">Location</label>
          <input
            type="text"
            id="ci-location"
            class="input"
            placeholder="e.g. Bangalore / Remote"
            autocomplete="off"
            maxlength="80"
          />
        </div>
        <div class="form-group">
          <label class="form-label" for="ci-stipend">Monthly Stipend (₹)</label>
          <input
            type="number"
            id="ci-stipend"
            class="input"
            placeholder="e.g. 15000"
            min="0"
            max="999999"
            step="500"
          />
        </div>
      </div>

      <div class="form-group">
        <label class="form-label" for="ci-skills">Required Skills</label>
        <input
          type="text"
          id="ci-skills"
          class="input"
          placeholder="e.g. React, Node.js, TypeScript (comma-separated)"
          autocomplete="off"
          maxlength="300"
        />
        <p class="form-hint">Separate multiple skills with commas.</p>
      </div>

      <div class="form-group">
        <label class="form-label" for="ci-deadline">Application Deadline</label>
        <input
          type="date"
          id="ci-deadline"
          class="input"
        />
      </div>

      <div class="form-error" id="ci-global-error" style="display:none"></div>
    </form>`;
}

// ── Load: Employer Profile ────────────────────────────────────

async function loadEmployerProfile(user) {
  try {
    const profile = await getUserProfile(user.uid);
    const name = profile?.displayName || user.displayName || 'Employer';

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
    console.error('[EmployerDashboard] Failed to load profile:', err);
    return null;
  }
}

// ── Load: Internships & Candidates ───────────────────────────

async function loadInternshipsAndCandidates(employerId) {
  const internshipSkeleton = document.getElementById('internships-skeleton');
  const internshipsContainer = document.getElementById('internships-container');
  const internshipsEmpty  = document.getElementById('internships-empty');
  const candidateSkeleton = document.getElementById('candidates-skeleton');
  const candidatesContainer = document.getElementById('candidates-container');
  const candidatesEmpty   = document.getElementById('candidates-empty');
  const candidatesCount   = document.getElementById('candidates-count');
  const statPostings      = document.getElementById('stat-postings');
  const statApplicants    = document.getElementById('stat-applicants');
  const statAvgMatch      = document.getElementById('stat-avg-match');

  try {
    // Fetch employer's internships
    const internships = await getEmployerInternships(employerId);

    if (internshipSkeleton) internshipSkeleton.style.display = 'none';

    if (!internships || internships.length === 0) {
      if (internshipsContainer) internshipsContainer.innerHTML = '';
      if (internshipsEmpty) internshipsEmpty.style.display = 'flex';
      if (statPostings) { statPostings.textContent = '0'; statPostings.dataset.target = '0'; }
    } else {
      if (internshipsEmpty) internshipsEmpty.style.display = 'none';

      // Fetch applicant counts for each internship in parallel
      const applicantCountResults = await Promise.allSettled(
        internships.map((i) => getInternshipApplications(i.id))
      );

      let totalApplicants = 0;
      let totalMatchScore = 0;
      let matchCount = 0;
      const allCandidates = [];

      const postingHTML = internships.map((internship, idx) => {
        const result = applicantCountResults[idx];
        const applications = result.status === 'fulfilled' ? (result.value ?? []) : [];
        totalApplicants += applications.length;

        // Collect candidate data for top candidates section
        applications.forEach((app) => {
          if (app.matchScore != null) {
            totalMatchScore += Number(app.matchScore);
            matchCount++;
          }
          allCandidates.push({ ...app, internshipId: internship.id });
        });

        return renderPostingItem(internship, applications.length);
      }).join('');

      if (internshipsContainer) {
        internshipsContainer.innerHTML = postingHTML;
        staggerReveal(internshipsContainer, '.posting-item', 80);
        bindPostingActions(internshipsContainer, internships);
      }

      // Update stats
      if (statPostings) {
        statPostings.dataset.target = internships.length;
        statPostings.textContent = internships.length;
      }
      if (statApplicants) {
        statApplicants.dataset.target = totalApplicants;
        statApplicants.textContent = totalApplicants;
      }
      if (statAvgMatch && matchCount > 0) {
        const avg = Math.round(totalMatchScore / matchCount);
        statAvgMatch.dataset.target = avg;
        statAvgMatch.textContent = `${avg}%`;
      }

      // Render top candidates (sorted by ELO or match score, deduplicated by studentId)
      const seen = new Set();
      const uniqueCandidates = allCandidates
        .filter((c) => {
          const key = c.studentId || c.uid || c.id;
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        })
        .sort((a, b) => {
          const scoreA = a.matchScore ?? a.eloRating ?? 0;
          const scoreB = b.matchScore ?? b.eloRating ?? 0;
          return scoreB - scoreA;
        })
        .slice(0, 10);

      if (candidateSkeleton) candidateSkeleton.style.display = 'none';

      if (uniqueCandidates.length === 0) {
        if (candidatesEmpty) candidatesEmpty.style.display = 'flex';
        if (candidatesCount) candidatesCount.textContent = '0';
      } else {
        if (candidatesEmpty) candidatesEmpty.style.display = 'none';
        if (candidatesCount) candidatesCount.textContent = uniqueCandidates.length;
        if (candidatesContainer) {
          candidatesContainer.innerHTML = uniqueCandidates
            .map((c, i) => renderCandidateItem(c, i + 1))
            .join('');
          staggerReveal(candidatesContainer, '.candidate-item', 80);

          // Bind chat buttons
          candidatesContainer.querySelectorAll('[data-student-id]').forEach((btn) => {
            btn.addEventListener('click', () => {
              const sid = btn.dataset.studentId;
              if (sid) {
                window.location.href = `../chat/chat.html?user=${encodeURIComponent(sid)}`;
              }
            });
          });
        }
      }
    }
  } catch (err) {
    console.error('[EmployerDashboard] Failed to load internships/candidates:', err);
    if (internshipSkeleton) internshipSkeleton.style.display = 'none';
    if (candidateSkeleton) candidateSkeleton.style.display = 'none';
    if (internshipsContainer) {
      internshipsContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">⚠️</div>
          <p class="empty-state-title">Could not load postings</p>
          <p class="empty-state-text">${esc(err?.message ?? 'Please try again later.')}</p>
        </div>`;
    }
    toast.error('Failed to load internship data. Please refresh the page.');
  }
}

// ── Action: Delete posting ────────────────────────────────────

function bindPostingActions(container, internships) {
  container.querySelectorAll('[data-action="view"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      if (id) {
        window.location.href = `../internship/internship.html?id=${encodeURIComponent(id)}&view=applicants`;
      }
    });
  });

  container.querySelectorAll('[data-action="delete"]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.id;
      const internship = internships.find((i) => i.id === id);
      if (!id || !internship) return;

      const confirmed = await import('../../js/components/modal.js').then(
        (m) => m.confirm({
          title: 'Delete Posting',
          message: `Are you sure you want to delete "${internship.title}"? This cannot be undone.`,
          variant: 'danger',
          confirmLabel: 'Delete',
        })
      );

      if (!confirmed) return;

      try {
        const { deleteInternship } = await import('../../js/services/firestore-api.js');
        await deleteInternship(id);
        const item = container.querySelector(`[data-internship-id="${id}"]`);
        item?.remove();
        toast.success('Internship posting deleted.');
      } catch (err) {
        toast.error('Failed to delete posting. Please try again.');
        console.error('[EmployerDashboard] Delete error:', err);
      }
    });
  });
}

// ── Action: Create Internship Modal ──────────────────────────

function openCreateInternshipModal(employerId) {
  const formHTML = buildInternshipFormHTML();

  const { close } = showModal({
    title: 'Post New Internship',
    content: formHTML,
    size: 'lg',
    closable: true,
    actions: [
      {
        label: 'Cancel',
        type: 'secondary',
        closeOnClick: true,
      },
      {
        label: 'Post Internship',
        type: 'primary',
        closeOnClick: false,
        onClick: () => submitInternshipForm(employerId, close),
      },
    ],
  });
}

async function submitInternshipForm(employerId, closeModal) {
  const titleEl       = document.getElementById('ci-title');
  const descEl        = document.getElementById('ci-description');
  const locationEl    = document.getElementById('ci-location');
  const stipendEl     = document.getElementById('ci-stipend');
  const skillsEl      = document.getElementById('ci-skills');
  const deadlineEl    = document.getElementById('ci-deadline');
  const titleError    = document.getElementById('ci-title-error');
  const descError     = document.getElementById('ci-description-error');
  const globalError   = document.getElementById('ci-global-error');

  // Clear previous errors
  [titleError, descError, globalError].forEach((el) => {
    if (el) { el.style.display = 'none'; el.textContent = ''; }
  });
  [titleEl, descEl].forEach((el) => el?.classList.remove('input-error'));

  const title       = titleEl?.value.trim() ?? '';
  const description = descEl?.value.trim() ?? '';
  const location    = locationEl?.value.trim() || 'Remote';
  const stipendRaw  = stipendEl?.value.trim();
  const stipend     = stipendRaw ? Number(stipendRaw) : null;
  const skillsRaw   = skillsEl?.value.trim();
  const skills      = skillsRaw
    ? skillsRaw.split(',').map((s) => s.trim()).filter(Boolean)
    : [];
  const deadlineRaw = deadlineEl?.value;
  const deadline    = deadlineRaw ? new Date(deadlineRaw) : null;

  // Validate
  let hasError = false;

  if (!title) {
    if (titleEl) titleEl.classList.add('input-error');
    if (titleError) { titleError.textContent = 'Job title is required.'; titleError.style.display = 'block'; }
    hasError = true;
  }
  if (!description) {
    if (descEl) descEl.classList.add('input-error');
    if (descError) { descError.textContent = 'Description is required.'; descError.style.display = 'block'; }
    hasError = true;
  }
  if (hasError) return;

  // Disable submit button
  const submitBtn = document.querySelector('.modal-footer .btn-primary');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Posting…';
  }

  try {
    await createInternship({
      employerId,
      title,
      description,
      location,
      stipend,
      skills,
      deadline,
      status: 'active',
    });

    closeModal();
    toast.success('Internship posted successfully! 🎉');

    // Reload the postings list
    await loadInternshipsAndCandidates(employerId);
    initScrollReveal();
    initCounters(document);

  } catch (err) {
    console.error('[EmployerDashboard] Create internship error:', err);
    if (globalError) {
      globalError.textContent = err?.message ?? 'Failed to post internship. Please try again.';
      globalError.style.display = 'block';
    }
    toast.error('Failed to create internship posting.');
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Post Internship';
    }
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
  // 1. Role guard — redirect non-employers to auth
  let user;
  try {
    user = await requireRole('employer');
  } catch {
    return;
  }

  initSidebarToggle();
  initScrollReveal();

  // 2. Load profile concurrently with internship data
  await Promise.all([
    loadEmployerProfile(user),
    loadInternshipsAndCandidates(user.uid),
  ]);

  // 3. Animate stat counters after data is loaded
  initCounters(document);
  initScrollReveal();

  // 4. Wire up "Create Internship" buttons
  const openModal = () => openCreateInternshipModal(user.uid);

  document.getElementById('create-internship-btn')?.addEventListener('click', openModal);
  document.getElementById('create-internship-btn-2')?.addEventListener('click', openModal);
  document.getElementById('create-first-btn')?.addEventListener('click', openModal);

  // 5. Logout
  document.getElementById('logout-btn')?.addEventListener('click', async () => {
    try {
      await logout();
      window.location.href = '/src/pages/auth/auth.html';
    } catch (err) {
      toast.error('Logout failed. Please try again.');
      console.error('[EmployerDashboard] Logout error:', err);
    }
  });
});
