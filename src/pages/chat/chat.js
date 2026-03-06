/**
 * Chat — Real-time messaging between users
 */

import { requireAuth, logout } from '../../js/core/auth-service.js';
import {
  getUserConversations,
  getOrCreateConversation,
  subscribeMessages,
  sendMessage,
  getUser,
} from '../../js/services/firestore-api.js';
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

/**
 * Format a timestamp into a human-readable relative string.
 * @param {object|Date|null} ts  Firestore Timestamp or JS Date
 * @returns {string}
 */
function formatTime(ts) {
  if (!ts) return '';
  const date = ts?.toDate ? ts.toDate() : new Date(ts);
  const now  = new Date();
  const diff  = now - date; // ms

  if (diff < 60_000)              return 'Just now';
  if (diff < 3_600_000)           return `${Math.floor(diff / 60_000)} min ago`;
  if (diff < 86_400_000) {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  }
  if (diff < 172_800_000)         return 'Yesterday';
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function formatFullDate(ts) {
  if (!ts) return '';
  const date = ts?.toDate ? ts.toDate() : new Date(ts);
  return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
}

// ── State ─────────────────────────────────────────────────────

let currentUser           = null;
let conversations         = [];
let activeConversationId  = null;
let activeOtherUser       = null;
let unsubscribeMessages   = null;
let searchQuery           = '';

// ── Init ──────────────────────────────────────────────────────

async function init() {
  currentUser = await requireAuth('/src/pages/auth/auth.html');
  if (!currentUser) return;

  setupLogout();
  renderUserAvatar();
  setupMobileBackBtn();

  await loadConversations();

  // Handle ?with=userId URL param for pre-selecting a conversation
  const params = new URLSearchParams(window.location.search);
  const withUserId = params.get('with');
  if (withUserId && withUserId !== currentUser.uid) {
    await openConversationWith(withUserId);
  }

  setupSearch();

  window.addEventListener('beforeunload', cleanup);
}

// ── Auth ──────────────────────────────────────────────────────

function setupLogout() {
  document.getElementById('logout-btn')?.addEventListener('click', async () => {
    try {
      cleanup();
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

// ── Conversations ─────────────────────────────────────────────

async function loadConversations() {
  try {
    conversations = await getUserConversations(currentUser.uid) ?? [];
    renderConversationList(conversations);
  } catch {
    renderConversationList([]);
  }
}

function renderConversationList(list) {
  const container = document.getElementById('conversations-list');
  if (!container) return;

  const filtered = searchQuery
    ? list.filter((c) => {
        const name = (c.otherUser?.displayName || '').toLowerCase();
        return name.includes(searchQuery.toLowerCase());
      })
    : list;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="conv-empty">
        <div class="conv-empty-icon">💬</div>
        <p class="conv-empty-text">${searchQuery ? 'No conversations match your search.' : 'No conversations yet. Start chatting!'}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered
    .map((conv) => buildConvItemHTML(conv))
    .join('');

  container.querySelectorAll('.conv-item').forEach((item) => {
    item.addEventListener('click', () => {
      const convId     = item.dataset.convId;
      const otherUid   = item.dataset.otherUid;
      const conv       = filtered.find((c) => c.id === convId);
      if (!conv) return;
      openConversation(convId, conv.otherUser || { uid: otherUid });
    });
  });
}

function buildConvItemHTML(conv) {
  const other     = conv.otherUser || {};
  const isActive  = conv.id === activeConversationId;
  const isOnline  = other.online ?? false;
  const unread    = conv.unread ?? 0;
  const lastMsg   = conv.lastMessage?.text || '';
  const lastTime  = formatTime(conv.lastMessage?.createdAt);

  const avatarContent = other.photoURL
    ? `<img src="${esc(other.photoURL)}" alt="${esc(other.displayName)}" loading="lazy" />`
    : `<div class="conv-avatar-fallback">${esc(initials(other.displayName))}</div>`;

  return `
    <div class="conv-item${isActive ? ' active' : ''}" role="listitem" tabindex="0"
         data-conv-id="${esc(conv.id)}" data-other-uid="${esc(other.uid || '')}"
         aria-label="${esc(other.displayName || 'Unknown')}: ${esc(lastMsg)}">
      <div class="conv-avatar">
        ${avatarContent}
        <span class="online-status-dot ${isOnline ? 'online' : 'offline'}" aria-hidden="true"></span>
      </div>
      <div class="conv-body">
        <div class="conv-top">
          <span class="conv-name">${esc(other.displayName || 'Unknown')}</span>
          ${lastTime ? `<span class="conv-time">${esc(lastTime)}</span>` : ''}
        </div>
        <div class="conv-bottom">
          <span class="conv-last-msg">${esc(lastMsg)}</span>
          ${unread > 0 ? `<span class="conv-unread-badge" aria-label="${unread} unread">${unread}</span>` : ''}
        </div>
      </div>
    </div>
  `;
}

// ── Open Conversation ─────────────────────────────────────────

async function openConversationWith(userId) {
  try {
    const otherUser = await getUser(userId);
    const convId    = await getOrCreateConversation(currentUser.uid, userId);
    const conv      = { id: convId };
    if (!conversations.find((c) => c.id === convId)) {
      conversations.unshift({ id: convId, otherUser });
      renderConversationList(conversations);
    }
    openConversation(convId, otherUser);
  } catch {
    toast.error('Could not open conversation.');
  }
}

function openConversation(convId, otherUser) {
  if (activeConversationId === convId) return;

  // Unsubscribe from previous
  unsubscribeMessages?.();
  unsubscribeMessages = null;

  activeConversationId = convId;
  activeOtherUser      = otherUser;

  // Update active styling in list
  document.querySelectorAll('.conv-item').forEach((item) => {
    item.classList.toggle('active', item.dataset.convId === convId);
  });

  // Show message area
  showMessageArea(otherUser);

  // Subscribe to messages
  unsubscribeMessages = subscribeMessages(convId, (messages) => {
    renderMessages(messages ?? []);
    scrollToBottom();
  });

  // Mobile: hide conversation panel
  document.getElementById('conversations-panel')?.classList.add('hidden');
}

// ── Message Area ──────────────────────────────────────────────

function showMessageArea(otherUser) {
  const emptyState    = document.getElementById('chat-empty-state');
  const chatHeader    = document.getElementById('chat-header');
  const msgContainer  = document.getElementById('messages-container');
  const inputArea     = document.getElementById('message-input-area');

  if (emptyState)   emptyState.style.display    = 'none';
  if (chatHeader)   chatHeader.style.display    = 'flex';
  if (msgContainer) msgContainer.style.display  = 'flex';
  if (inputArea)    inputArea.style.display     = 'flex';

  // Populate header
  const nameEl    = document.getElementById('chat-header-name');
  const fallback  = document.getElementById('chat-header-avatar-fallback');
  const headerAvatar = document.getElementById('chat-header-avatar');

  if (nameEl)   nameEl.textContent   = otherUser?.displayName || 'Unknown';
  if (fallback) fallback.textContent = initials(otherUser?.displayName);

  if (otherUser?.photoURL && headerAvatar) {
    headerAvatar.innerHTML = `<img src="${esc(otherUser.photoURL)}" alt="${esc(otherUser.displayName)}" style="width:100%;height:100%;object-fit:cover;" />`;
  }

  setupSendMessage();
}

// ── Render Messages ───────────────────────────────────────────

function renderMessages(messages) {
  const container = document.getElementById('messages-container');
  if (!container) return;

  const wasAtBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 60;

  let html   = '';
  let lastDay = null;

  messages.forEach((msg) => {
    const isSent = msg.senderId === currentUser.uid;
    const ts     = msg.createdAt;
    const date   = ts?.toDate ? ts.toDate() : new Date(ts ?? Date.now());
    const dayKey = date.toDateString();

    if (dayKey !== lastDay) {
      html += `
        <div class="msg-date-divider" role="separator">
          <span class="msg-date-label">${formatFullDate(ts)}</span>
        </div>
      `;
      lastDay = dayKey;
    }

    const avatarFallback = initials(isSent ? currentUser.displayName : activeOtherUser?.displayName);
    const timeStr = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    html += `
      <div class="msg-row ${isSent ? 'sent' : 'received'}" aria-label="${isSent ? 'You' : esc(activeOtherUser?.displayName || 'Other')}: ${esc(msg.text)}">
        ${!isSent ? `<div class="msg-avatar-wrap"><div class="msg-avatar-fallback">${esc(avatarFallback)}</div></div>` : ''}
        <div class="msg-body">
          <div class="msg-bubble">${esc(msg.text)}</div>
          <div class="msg-meta">
            <span class="msg-time">${esc(timeStr)}</span>
          </div>
        </div>
        ${isSent ? `<div class="msg-avatar-wrap"><div class="msg-avatar-fallback">${esc(avatarFallback)}</div></div>` : ''}
      </div>
    `;
  });

  container.innerHTML = html;

  if (wasAtBottom) scrollToBottom(false);
}

function scrollToBottom(smooth = true) {
  const container = document.getElementById('messages-container');
  if (!container) return;
  container.scrollTo({ top: container.scrollHeight, behavior: smooth ? 'smooth' : 'instant' });
}

// ── Send Message ──────────────────────────────────────────────

function setupSendMessage() {
  const sendBtn   = document.getElementById('send-btn');
  const textarea  = document.getElementById('message-input');

  // Remove old listeners by replacing elements
  const newSendBtn  = sendBtn?.cloneNode(true);
  const newTextarea = textarea?.cloneNode(true);
  sendBtn?.replaceWith(newSendBtn);
  textarea?.replaceWith(newTextarea);

  const btn  = document.getElementById('send-btn');
  const area = document.getElementById('message-input');
  if (!btn || !area) return;

  btn.addEventListener('click', () => doSend());

  area.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      doSend();
    }
  });

  // Auto-resize textarea
  area.addEventListener('input', () => {
    area.style.height = 'auto';
    area.style.height = `${Math.min(area.scrollHeight, 160)}px`;
  });
}

async function doSend() {
  const area = document.getElementById('message-input');
  const text = area?.value.trim();
  if (!text || !activeConversationId) return;

  area.value = '';
  area.style.height = 'auto';

  try {
    await sendMessage(activeConversationId, currentUser.uid, text);
    scrollToBottom();
  } catch {
    toast.error('Failed to send message. Please try again.');
    if (area) area.value = text;
  }
}

// ── Search ────────────────────────────────────────────────────

function setupSearch() {
  const input = document.getElementById('conversation-search');
  input?.addEventListener('input', () => {
    searchQuery = input.value;
    renderConversationList(conversations);
  });
}

// ── Mobile Back ───────────────────────────────────────────────

function setupMobileBackBtn() {
  document.getElementById('back-btn')?.addEventListener('click', () => {
    document.getElementById('conversations-panel')?.classList.remove('hidden');
    activeConversationId = null;
    activeOtherUser      = null;

    unsubscribeMessages?.();
    unsubscribeMessages = null;

    document.getElementById('chat-empty-state').style.display   = '';
    document.getElementById('chat-header').style.display        = 'none';
    document.getElementById('messages-container').style.display = 'none';
    document.getElementById('message-input-area').style.display = 'none';

    // Update active state in list
    document.querySelectorAll('.conv-item').forEach((i) => i.classList.remove('active'));
  });
}

// ── Mobile sidebar toggle ─────────────────────────────────────

document.getElementById('sidebar-toggle')?.addEventListener('click', () => {
  const sidebar = document.getElementById('sidebar');
  sidebar?.classList.toggle('open');
});

// ── Cleanup ───────────────────────────────────────────────────

function cleanup() {
  unsubscribeMessages?.();
}

// ── Bootstrap ────────────────────────────────────────────────

init().catch((err) => {
  console.error('Chat init failed:', err);
  toast.error('Failed to load chat. Please refresh.');
});
