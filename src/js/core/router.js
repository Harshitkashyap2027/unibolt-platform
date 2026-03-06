/**
 * Client-Side Router with View Transitions API and route guards
 */
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-init.js';

const routes = {
  '/':                          '/index.html',
  '/landing':                   '/src/pages/landing/landing.html',
  '/auth':                      '/src/pages/auth/auth.html',
  '/student-dashboard':         '/src/pages/student-dashboard/student-dashboard.html',
  '/employer-dashboard':        '/src/pages/employer-dashboard/employer-dashboard.html',
  '/skill-tree':                '/src/pages/skill-tree/skill-tree.html',
  '/leaderboard':               '/src/pages/leaderboard/leaderboard.html',
  '/chat':                      '/src/pages/chat/chat.html',
  '/profile':                   '/src/pages/profile/profile.html',
};

const protectedRoutes = new Set([
  '/student-dashboard',
  '/employer-dashboard',
  '/skill-tree',
  '/leaderboard',
  '/chat',
  '/profile',
]);

const publicOnlyRoutes = new Set(['/auth', '/landing', '/']);

let currentUser = null;

// ── Auth state listener ───────────────────────────────────────────────────
onAuthStateChanged(auth, (user) => {
  currentUser = user;
});

// ── Navigate helper ───────────────────────────────────────────────────────
export async function navigate(path, { replace = false } = {}) {
  const resolvedPath = path.startsWith('/') ? path : `/${path}`;
  const targetFile = routes[resolvedPath];

  if (!targetFile) {
    console.warn(`[Router] Unknown route: ${resolvedPath}`);
    return;
  }

  // Guard: protected routes require auth
  if (protectedRoutes.has(resolvedPath) && !currentUser) {
    navigateTo('/src/pages/auth/auth.html', replace);
    return;
  }

  // Guard: public-only routes redirect logged-in users
  if (publicOnlyRoutes.has(resolvedPath) && currentUser && resolvedPath === '/auth') {
    const profile = await getUserRoleFromStorage();
    const dest = profile?.role === 'employer'
      ? '/src/pages/employer-dashboard/employer-dashboard.html'
      : '/src/pages/student-dashboard/student-dashboard.html';
    navigateTo(dest, replace);
    return;
  }

  navigateTo(targetFile, replace);
}

function navigateTo(href, replace = false) {
  if ('startViewTransition' in document) {
    document.startViewTransition(() => {
      if (replace) {
        window.location.replace(href);
      } else {
        window.location.href = href;
      }
    });
  } else {
    if (replace) {
      window.location.replace(href);
    } else {
      window.location.href = href;
    }
  }
}

// ── Handle browser back/forward ───────────────────────────────────────────
window.addEventListener('popstate', () => {
  const path = window.location.pathname;
  navigate(path, { replace: true });
});

// ── Intercept same-origin link clicks ─────────────────────────────────────
document.addEventListener('click', (e) => {
  const anchor = e.target.closest('a[data-route]');
  if (!anchor) return;
  e.preventDefault();
  const route = anchor.dataset.route;
  navigate(route);
});

// ── Helper: get role from local session ───────────────────────────────────
async function getUserRoleFromStorage() {
  try {
    const uid = currentUser?.uid;
    if (!uid) return null;
    const cached = sessionStorage.getItem(`profile:${uid}`);
    return cached ? JSON.parse(cached) : null;
  } catch {
    return null;
  }
}

export function getCurrentPath() {
  return window.location.pathname;
}

export { routes };
