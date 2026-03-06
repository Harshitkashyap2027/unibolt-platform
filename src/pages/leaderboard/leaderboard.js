/**
 * Leaderboard — Real-time ELO rankings
 */

import { requireAuth, logout } from '../../js/core/auth-service.js';
import { subscribeLeaderboard } from '../../js/services/firestore-api.js';
import { getRankTitle } from '../../js/services/elo-ranking.js';
import { initScrollReveal } from '../../js/components/intersection-observer.js';
import { toast } from '../../js/components/toast-notifications.js';

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

// ── State ─────────────────────────────────────────────────────

let currentUser       = null;
let unsubscribe       = null;
let allEntries        = [];
let activeCategory    = 'all';

// ── Init ──────────────────────────────────────────────────────

async function init() {
  currentUser = await requireAuth('/src/pages/auth/auth.html');
  if (!currentUser) return;

  setupLogout();
  renderUserAvatar();
  initScrollReveal();
  setupCategoryTabs();
  setupRealtimeSubscription();

  // Unsubscribe on page unload
  window.addEventListener('beforeunload', () => unsubscribe?.());
}

// ── Auth ──────────────────────────────────────────────────────

function setupLogout() {
  document.getElementById('logout-btn')?.addEventListener('click', async () => {
    try {
      unsubscribe?.();
      await logout();
      window.location.href = '/src/pages/auth/auth.html';
    } catch {
      toast.error('Failed to log out. Please try again.');
    }
  });
}

function renderUserAvatar() {
  const avatarImg      = document.getElementById('user-avatar');
  const avatarFallback = document.getElementById('avatar-fallback');
  const displayName    = currentUser.displayName || currentUser.email || 'U';
  const ini            = initials(displayName);

  if (currentUser.photoURL && avatarImg) avatarImg.src = currentUser.photoURL;
  if (avatarFallback) avatarFallback.textContent = ini;
}

// ── Category Tabs ─────────────────────────────────────────────

function setupCategoryTabs() {
  document.getElementById('category-tabs')?.querySelectorAll('.filter-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('#category-tabs .filter-tab').forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      activeCategory = tab.dataset.category;
      renderLeaderboard(allEntries);
    });
  });
}

// ── Real-time Subscription ────────────────────────────────────

function setupRealtimeSubscription() {
  unsubscribe = subscribeLeaderboard((entries) => {
    allEntries = entries || [];
    renderLeaderboard(allEntries);

    // Update realtime indicator
    const indicator = document.getElementById('realtime-indicator');
    if (indicator) {
      indicator.style.opacity = '0';
      setTimeout(() => { indicator.style.opacity = '1'; }, 100);
    }
  });
}

// ── Filter ────────────────────────────────────────────────────

function filterEntries(entries) {
  if (activeCategory === 'all') return entries;
  return entries.filter((e) => e.category === activeCategory || !e.category);
}

// ── Render ────────────────────────────────────────────────────

function renderLeaderboard(entries) {
  const filtered = filterEntries(entries);

  // Sort by ELO descending
  const sorted = [...filtered].sort((a, b) => (b.elo ?? 1000) - (a.elo ?? 1000));

  renderPodium(sorted.slice(0, 3));
  renderTable(sorted);

  const countEl = document.getElementById('entry-count');
  if (countEl) countEl.textContent = `${sorted.length} player${sorted.length !== 1 ? 's' : ''}`;
}

// ── Podium ────────────────────────────────────────────────────

function renderPodium(top3) {
  const container = document.getElementById('podium-container');
  if (!container) return;

  // Arrange: 2nd, 1st, 3rd
  const order = [top3[1], top3[0], top3[2]];
  const rankClasses = ['rank-2', 'rank-1', 'rank-3'];
  const medals      = ['🥈', '🥇', '🥉'];
  const rankNums    = [2, 1, 3];

  container.innerHTML = order
    .map((entry, i) => {
      if (!entry) return '';
      const rankInfo = getRankTitle(entry.elo ?? 1000);
      const rankClass = rankClasses[i];
      const medal     = medals[i];
      const rankNum   = rankNums[i];
      const avatarContent = entry.photoURL
        ? `<img src="${esc(entry.photoURL)}" alt="${esc(entry.displayName)}" loading="lazy" />`
        : `<div class="podium-avatar-fallback">${esc(initials(entry.displayName))}</div>`;

      return `
        <div class="podium-card ${rankClass}" aria-label="Rank ${rankNum}: ${esc(entry.displayName)}">
          <span class="podium-medal" aria-hidden="true">${medal}</span>
          <div class="podium-avatar">${avatarContent}</div>
          <span class="podium-rank-num">#${rankNum}</span>
          <span class="podium-name" title="${esc(entry.displayName)}">${esc(entry.displayName || 'Anonymous')}</span>
          <span class="podium-elo">${entry.elo ?? 1000}</span>
          <span class="podium-rank-title" style="background:${rankInfo.color}22;color:${rankInfo.color};border-color:${rankInfo.color}44">
            ${esc(rankInfo.icon)} ${esc(rankInfo.title)}
          </span>
        </div>
      `;
    })
    .join('');
}

// ── Table ─────────────────────────────────────────────────────

/** Track previous row order to detect changes for animation */
const prevRowOrder = new Map();

function renderTable(sorted) {
  const tbody = document.getElementById('leaderboard-body');
  if (!tbody) return;

  const newRows = sorted.map((entry, idx) => buildRowHTML(entry, idx + 1));
  tbody.innerHTML = newRows.join('');

  // Animate rows whose rank changed
  sorted.forEach((entry, idx) => {
    const rank = idx + 1;
    if (prevRowOrder.has(entry.uid) && prevRowOrder.get(entry.uid) !== rank) {
      const row = tbody.querySelector(`tr[data-uid="${CSS.escape(entry.uid)}"]`);
      if (row) {
        row.classList.remove('row-updated');
        // Trigger reflow
        void row.offsetWidth;
        row.classList.add('row-updated');
      }
    }
    prevRowOrder.set(entry.uid, rank);
  });
}

function buildRowHTML(entry, rank) {
  const rankInfo   = getRankTitle(entry.elo ?? 1000);
  const wins       = entry.wins   ?? 0;
  const losses     = entry.losses ?? 0;
  const draws      = entry.draws  ?? 0;
  const streak     = entry.streak ?? 0;
  const streakType = streak > 0 ? 'win' : streak < 0 ? 'loss' : 'none';
  const streakLabel = streak > 0
    ? `🔥 ${streak}W`
    : streak < 0
    ? `❄️ ${Math.abs(streak)}L`
    : '—';

  const rowClass   = rank <= 3 ? `rank-${rank}-row` : '';
  const badgeClass = rank === 1 ? 'rank-badge-1' : rank === 2 ? 'rank-badge-2' : rank === 3 ? 'rank-badge-3' : 'rank-badge-n';
  const badgeLabel = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : rank;

  const avatarContent = entry.photoURL
    ? `<img src="${esc(entry.photoURL)}" alt="${esc(entry.displayName)}" loading="lazy" />`
    : `<div class="player-avatar-fallback">${esc(initials(entry.displayName))}</div>`;

  return `
    <tr class="${rowClass}" data-uid="${esc(entry.uid)}">
      <td class="td-rank">
        <span class="rank-badge ${badgeClass}" aria-label="Rank ${rank}">${badgeLabel}</span>
      </td>
      <td>
        <div class="player-cell">
          <div class="player-avatar">${avatarContent}</div>
          <div class="player-info">
            <span class="player-name" title="${esc(entry.displayName)}">${esc(entry.displayName || 'Anonymous')}</span>
            ${entry.university ? `<span class="player-university">${esc(entry.university)}</span>` : ''}
          </div>
        </div>
      </td>
      <td class="td-elo">${entry.elo ?? 1000}</td>
      <td class="td-record">
        <span class="record-wins">${wins}</span>
        <span class="record-sep">/</span>
        <span class="record-losses">${losses}</span>
        <span class="record-sep">/</span>
        <span class="record-draws">${draws}</span>
      </td>
      <td class="td-streak">
        <span class="streak-badge streak-${streakType}">${streakLabel}</span>
      </td>
      <td>
        <span class="rank-title-badge"
          style="background:${rankInfo.color}1a;color:${rankInfo.color};border-color:${rankInfo.color}33">
          ${esc(rankInfo.icon)} ${esc(rankInfo.title)}
        </span>
      </td>
    </tr>
  `;
}

// ── Bootstrap ────────────────────────────────────────────────

init().catch((err) => {
  console.error('Leaderboard init failed:', err);
  toast.error('Failed to load leaderboard. Please refresh.');
});
