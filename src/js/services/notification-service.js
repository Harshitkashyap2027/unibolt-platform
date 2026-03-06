/**
 * Notification Service — Web Notifications API + in-app toast management
 */

let notificationPermission = Notification?.permission || 'default';

/** ── Request browser notification permission ─────────────────────────── */
export async function requestPermission() {
  if (!('Notification' in window)) return 'unsupported';
  // Always read the live permission state (handles browser-settings changes)
  if (Notification.permission === 'granted') return 'granted';
  if (Notification.permission === 'denied')  return 'denied';
  notificationPermission = await Notification.requestPermission();
  return notificationPermission;
}

/**
 * Show a browser push notification.
 * @param {string} title
 * @param {Object} options - body, icon, badge, url, tag
 */
export async function showBrowserNotification(title, options = {}) {
  if (!('Notification' in window)) return;
  if (Notification.permission !== 'granted') {
    await requestPermission();
  }
  if (Notification.permission !== 'granted') return;

  const sw = await navigator.serviceWorker?.ready;
  const payload = {
    body:    options.body || '',
    icon:    options.icon || '/assets/icons/icon-192.svg',
    badge:   options.badge || '/favicon.svg',
    tag:     options.tag  || 'unibolt-notification',
    data:    { url: options.url || '/' },
    vibrate: [100, 50, 100],
  };

  if (sw) {
    await sw.showNotification(title, payload);
  } else {
    new Notification(title, payload);
  }
}

/**
 * Notification categories with icons and colors.
 */
export const NotificationTypes = {
  APPLICATION_UPDATE: {
    title: 'Application Update',
    icon: '📋',
    color: 'info',
  },
  NEW_MESSAGE: {
    title: 'New Message',
    icon: '💬',
    color: 'primary',
  },
  MATCH_FOUND: {
    title: 'New Match!',
    icon: '⚡',
    color: 'success',
  },
  ELO_CHANGE: {
    title: 'Rating Updated',
    icon: '🏆',
    color: 'warning',
  },
  SKILL_UNLOCKED: {
    title: 'Skill Unlocked!',
    icon: '🔓',
    color: 'success',
  },
};

/**
 * Format a notification for display based on type and payload.
 */
export function formatNotification(type, payload = {}) {
  const base = NotificationTypes[type] || { title: 'Notification', icon: '🔔', color: 'primary' };
  return {
    ...base,
    ...payload,
    title: payload.title || base.title,
  };
}
