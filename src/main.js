/**
 * Vite Entry Point — Import CSS, initialize app
 */

// ── Design System CSS ────────────────────────────────────────────────────
import './css/design-tokens.css';
import './css/base.css';
import './css/skeleton.css';
import './css/components/buttons.css';
import './css/components/inputs.css';
import './css/components/cards.css';
import './css/components/modals.css';
import './css/components/navigation.css';
import './css/components/badges.css';

// ── Application Init ─────────────────────────────────────────────────────
import { initApp } from './js/app.js';
import { navigate } from './js/core/router.js';

(async () => {
  await initApp();

  // Redirect from root to landing
  const path = window.location.pathname;
  if (path === '/' || path === '/index.html') {
    navigate('/landing', { replace: true });
  }
})();
