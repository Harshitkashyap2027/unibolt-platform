/**
 * Toast Notification Component
 * Usage: showToast({ type: 'success', message: 'Done!', duration: 4000 })
 */

const CONTAINER_ID = 'toast-container';
const DEFAULT_DURATION = 4000;

let container = null;

function getContainer() {
  if (!container) {
    container = document.getElementById(CONTAINER_ID);
    if (!container) {
      container = document.createElement('div');
      container.id = CONTAINER_ID;
      container.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 10px;
        pointer-events: none;
        max-width: 380px;
        width: calc(100vw - 40px);
      `;
      document.body.appendChild(container);
    }
  }
  return container;
}

const ICONS = {
  success: `<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>`,
  error:   `<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>`,
  warning: `<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>`,
  info:    `<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>`,
};

const COLORS = {
  success: { bg: 'rgba(34,197,94,0.1)',   border: 'rgba(34,197,94,0.4)',   icon: '#22c55e', bar: '#22c55e' },
  error:   { bg: 'rgba(239,68,68,0.1)',   border: 'rgba(239,68,68,0.4)',   icon: '#ef4444', bar: '#ef4444' },
  warning: { bg: 'rgba(245,158,11,0.1)',  border: 'rgba(245,158,11,0.4)',  icon: '#f59e0b', bar: '#f59e0b' },
  info:    { bg: 'rgba(56,189,248,0.1)',  border: 'rgba(56,189,248,0.4)',  icon: '#38bdf8', bar: '#38bdf8' },
};

/**
 * Show a toast notification.
 * @param {Object} options
 * @param {'success'|'error'|'warning'|'info'} options.type
 * @param {string} options.message
 * @param {string} [options.title]
 * @param {number} [options.duration]
 * @param {Function} [options.action]
 * @param {string} [options.actionLabel]
 */
export function showToast({ type = 'info', message, title, duration = DEFAULT_DURATION, action, actionLabel } = {}) {
  const c     = getContainer();
  const color = COLORS[type] || COLORS.info;
  const icon  = ICONS[type] || ICONS.info;

  const toast = document.createElement('div');
  toast.style.cssText = `
    background: rgba(15,15,30,0.95);
    border: 1px solid ${color.border};
    border-radius: 12px;
    padding: 14px 16px;
    display: flex;
    align-items: flex-start;
    gap: 12px;
    pointer-events: all;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transform: translateX(calc(100% + 40px));
    transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease;
    opacity: 0;
    backdrop-filter: blur(16px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    flex-shrink: 0;
  `;

  toast.innerHTML = `
    <div style="width:20px;height:20px;flex-shrink:0;color:${color.icon};margin-top:1px">${icon}</div>
    <div style="flex:1;min-width:0">
      ${title ? `<div style="font-size:0.875rem;font-weight:600;color:#f0f0ff;margin-bottom:3px">${escapeHtml(title)}</div>` : ''}
      <div style="font-size:0.875rem;color:#a5b4fc;line-height:1.4">${escapeHtml(message || '')}</div>
      ${action && actionLabel ? `<button class="toast-action" style="margin-top:8px;background:none;border:1px solid ${color.border};color:${color.icon};padding:4px 12px;border-radius:6px;font-size:0.75rem;cursor:pointer;font-family:inherit">${escapeHtml(actionLabel)}</button>` : ''}
    </div>
    <button class="toast-close" style="background:none;border:none;color:#6b7280;cursor:pointer;padding:2px;display:flex;align-items:center;flex-shrink:0;margin-top:1px">
      <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
    </button>
    <div class="toast-progress" style="position:absolute;bottom:0;left:0;height:3px;width:100%;background:${color.bar};transform-origin:left;transform:scaleX(1);transition:transform ${duration}ms linear;border-radius:0 0 12px 12px"></div>
  `;

  c.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.style.transform = 'translateX(0)';
      toast.style.opacity   = '1';
      // Start progress bar
      const bar = toast.querySelector('.toast-progress');
      if (bar) {
        requestAnimationFrame(() => { bar.style.transform = 'scaleX(0)'; });
      }
    });
  });

  // Auto dismiss
  let timeoutId = setTimeout(() => dismiss(toast), duration);

  // Manual dismiss
  const dismissFn = () => {
    clearTimeout(timeoutId);
    dismiss(toast);
  };

  toast.querySelector('.toast-close')?.addEventListener('click', dismissFn);
  toast.querySelector('.toast-action')?.addEventListener('click', () => {
    action?.();
    dismissFn();
  });
  toast.addEventListener('click', (e) => {
    if (!e.target.closest('.toast-action') && !e.target.closest('.toast-close')) {
      dismissFn();
    }
  });

  // Pause on hover
  toast.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId);
    const bar = toast.querySelector('.toast-progress');
    if (bar) bar.style.transition = 'none';
  });
  toast.addEventListener('mouseleave', () => {
    timeoutId = setTimeout(() => dismiss(toast), 1500);
  });

  return { dismiss: dismissFn };
}

function dismiss(toast) {
  toast.style.transform = 'translateX(calc(100% + 40px))';
  toast.style.opacity   = '0';
  setTimeout(() => toast.remove(), 350);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Convenience wrappers
export const toast = {
  success: (msg, opts = {}) => showToast({ type: 'success', message: msg, ...opts }),
  error:   (msg, opts = {}) => showToast({ type: 'error',   message: msg, ...opts }),
  warning: (msg, opts = {}) => showToast({ type: 'warning', message: msg, ...opts }),
  info:    (msg, opts = {}) => showToast({ type: 'info',    message: msg, ...opts }),
};
