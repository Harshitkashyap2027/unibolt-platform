/**
 * App Entry Point — Router, Auth, PWA, Global Initialization
 */
import { onAuthChange } from './core/auth-service.js';
import { navigate } from './core/router.js';
import { initScrollReveal, initLazyImages, initCounters } from './components/intersection-observer.js';
import { toast } from './components/toast-notifications.js';

// ── PWA Service Worker Registration ─────────────────────────────────────
async function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    try {
      const reg = await navigator.serviceWorker.register('/service-worker.js', {
        scope: '/',
        updateViaCache: 'none',
      });

      reg.addEventListener('updatefound', () => {
        const worker = reg.installing;
        worker?.addEventListener('statechange', () => {
          if (worker.state === 'installed' && navigator.serviceWorker.controller) {
            toast.info('Update available. Refresh to apply.', {
              title: 'App Update',
              duration: 8000,
              actionLabel: 'Refresh',
              action: () => window.location.reload(),
            });
          }
        });
      });
    } catch (err) {
      console.warn('[SW] Registration failed:', err);
    }
  }
}

// ── Auth State Listener ──────────────────────────────────────────────────
function initAuthListener() {
  onAuthChange(({ user, profile }) => {
    // Cache profile for router
    if (user && profile) {
      sessionStorage.setItem(`profile:${user.uid}`, JSON.stringify(profile));
    } else {
      // Clear profile cache
      Object.keys(sessionStorage)
        .filter((k) => k.startsWith('profile:'))
        .forEach((k) => sessionStorage.removeItem(k));
    }

    // Dispatch custom event for page scripts to listen to
    window.dispatchEvent(new CustomEvent('auth:change', { detail: { user, profile } }));
  });
}

// ── CSS Spin Animation (used in skeleton-loader) ─────────────────────────
function injectGlobalStyles() {
  if (document.getElementById('ub-global-styles')) return;
  const style = document.createElement('style');
  style.id = 'ub-global-styles';
  style.textContent = `
    @keyframes spin { to { transform: rotate(360deg); } }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    ::view-transition-old(root) { animation: 0.3s ease both slide-out; }
    ::view-transition-new(root) { animation: 0.3s ease both slide-in; }
    @keyframes slide-out { from { opacity:1; transform:translateY(0); } to { opacity:0; transform:translateY(-8px); } }
    @keyframes slide-in  { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
  `;
  document.head.appendChild(style);
}

// ── Initialize App ────────────────────────────────────────────────────────
export async function initApp() {
  injectGlobalStyles();
  initAuthListener();
  await registerServiceWorker();
  initScrollReveal();
  initLazyImages();
  initCounters();
}
