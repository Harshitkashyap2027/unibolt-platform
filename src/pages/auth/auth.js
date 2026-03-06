/**
 * Auth Page Logic — Firebase Auth, Google Sign-In, form validation
 */
import {
  loginWithEmail,
  registerWithEmail,
  loginWithGoogle,
  resetPassword,
} from '../../js/core/auth-service.js';
import { toast } from '../../js/components/toast-notifications.js';
import { getUserRole } from '../../js/core/auth-service.js';

// ── State ──────────────────────────────────────────────────────────────────
let activeTab = 'login';
let selectedRole = 'student';

// Check URL params for pre-selected role
const params = new URLSearchParams(window.location.search);
if (params.get('role') === 'employer') {
  selectedRole = 'employer';
}

// ── DOM References ─────────────────────────────────────────────────────────
const loginForm          = document.getElementById('login-form');
const registerForm       = document.getElementById('register-form');
const tabLogin           = document.getElementById('tab-login');
const tabRegister        = document.getElementById('tab-register');
const googleLoginBtn     = document.getElementById('google-login-btn');
const googleRegisterBtn  = document.getElementById('google-register-btn');
const forgotPasswordBtn  = document.getElementById('forgot-password-btn');
const roleStudent        = document.getElementById('role-student');
const roleEmployer       = document.getElementById('role-employer');
const registerPasswordIn = document.getElementById('register-password');
const passwordStrength   = document.getElementById('password-strength');
const strengthFill       = document.getElementById('strength-fill');
const strengthText       = document.getElementById('strength-text');

// ── Tab Switching ──────────────────────────────────────────────────────────
function switchTab(tab) {
  activeTab = tab;
  tabLogin.classList.toggle('active', tab === 'login');
  tabRegister.classList.toggle('active', tab === 'register');
  loginForm.style.display    = tab === 'login'    ? '' : 'none';
  registerForm.style.display = tab === 'register' ? '' : 'none';

  // Set role if coming from landing page
  if (tab === 'register' && selectedRole === 'employer') {
    setRole('employer');
  }
}

tabLogin.addEventListener('click', () => switchTab('login'));
tabRegister.addEventListener('click', () => switchTab('register'));

// Handle switch buttons inside forms
document.querySelectorAll('.auth-switch-link').forEach((btn) => {
  btn.addEventListener('click', () => switchTab(btn.dataset.switch));
});

// Auto-switch to register if role=employer in URL
if (params.get('role')) switchTab('register');

// ── Role Selection ─────────────────────────────────────────────────────────
function setRole(role) {
  selectedRole = role;
  roleStudent.classList.toggle('active', role === 'student');
  roleEmployer.classList.toggle('active', role === 'employer');
}

roleStudent?.addEventListener('click', () => setRole('student'));
roleEmployer?.addEventListener('click', () => setRole('employer'));
setRole(selectedRole);

// ── Password Visibility Toggle ─────────────────────────────────────────────
setupPasswordToggle('login-password',    'toggle-login-password');
setupPasswordToggle('register-password', 'toggle-register-password');

function setupPasswordToggle(inputId, btnId) {
  const input = document.getElementById(inputId);
  const btn   = document.getElementById(btnId);
  if (!input || !btn) return;
  btn.addEventListener('click', () => {
    input.type = input.type === 'password' ? 'text' : 'password';
    btn.querySelector('svg')?.setAttribute('fill', input.type === 'text' ? '#6366f1' : 'currentColor');
  });
}

// ── Password Strength ──────────────────────────────────────────────────────
registerPasswordIn?.addEventListener('input', () => {
  const val = registerPasswordIn.value;
  if (!val) { passwordStrength.style.display = 'none'; return; }
  passwordStrength.style.display = 'flex';
  const strength = calculateStrength(val);
  const colors = ['#ef4444', '#f59e0b', '#f59e0b', '#22c55e', '#22c55e'];
  const labels = ['Very Weak', 'Weak', 'Fair', 'Strong', 'Very Strong'];
  const pcts   = [20, 40, 60, 80, 100];
  strengthFill.style.width      = `${pcts[strength]}%`;
  strengthFill.style.background = colors[strength];
  strengthText.textContent      = labels[strength];
  strengthText.style.color      = colors[strength];
});

function calculateStrength(pwd) {
  let score = 0;
  if (pwd.length >= 8)  score++;
  if (pwd.length >= 12) score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;
  return Math.min(4, score - 1 < 0 ? 0 : score - 1);
}

// ── Login Form ─────────────────────────────────────────────────────────────
loginForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  clearErrors();

  const email    = document.getElementById('login-email')?.value.trim();
  const password = document.getElementById('login-password')?.value;
  const submitBtn = document.getElementById('login-submit-btn');

  if (!validateEmail(email)) {
    showFieldError('login-email-error', 'Please enter a valid email address.');
    return;
  }
  if (!password || password.length < 6) {
    showFieldError('login-password-error', 'Password must be at least 6 characters.');
    return;
  }

  setLoading(submitBtn, true);
  try {
    const user = await loginWithEmail({ email, password });
    const role = await getUserRole(user.uid);
    toast.success('Welcome back!', { title: 'Signed In' });
    redirectByRole(role);
  } catch (err) {
    showAuthError('login-error', friendlyError(err.code));
  } finally {
    setLoading(submitBtn, false);
  }
});

// ── Register Form ──────────────────────────────────────────────────────────
registerForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  clearErrors();

  const name     = document.getElementById('register-name')?.value.trim();
  const email    = document.getElementById('register-email')?.value.trim();
  const password = document.getElementById('register-password')?.value;
  const submitBtn = document.getElementById('register-submit-btn');

  let valid = true;
  if (!name || name.length < 2) {
    showFieldError('register-name-error', 'Please enter your full name (min. 2 characters).');
    valid = false;
  }
  if (!validateEmail(email)) {
    showFieldError('register-email-error', 'Please enter a valid email address.');
    valid = false;
  }
  if (!password || password.length < 8) {
    showFieldError('register-password-error', 'Password must be at least 8 characters.');
    valid = false;
  }
  if (!valid) return;

  setLoading(submitBtn, true);
  try {
    await registerWithEmail({ email, password, displayName: name, role: selectedRole });
    toast.success('Account created! Welcome to UniBolt.', { title: 'Welcome! 🎉' });
    redirectByRole(selectedRole);
  } catch (err) {
    showAuthError('register-error', friendlyError(err.code));
  } finally {
    setLoading(submitBtn, false);
  }
});

// ── Google Sign-In ─────────────────────────────────────────────────────────
googleLoginBtn?.addEventListener('click', handleGoogleAuth);
googleRegisterBtn?.addEventListener('click', handleGoogleAuth);

async function handleGoogleAuth() {
  clearErrors();
  try {
    const user = await loginWithGoogle(selectedRole);
    const role = await getUserRole(user.uid);
    toast.success('Signed in with Google!', { title: 'Welcome! 🎉' });
    redirectByRole(role || selectedRole);
  } catch (err) {
    if (err.code !== 'auth/popup-closed-by-user') {
      toast.error(friendlyError(err.code), { title: 'Sign-In Failed' });
    }
  }
}

// ── Forgot Password ────────────────────────────────────────────────────────
forgotPasswordBtn?.addEventListener('click', async () => {
  const email = document.getElementById('login-email')?.value.trim();
  if (!validateEmail(email)) {
    showFieldError('login-email-error', 'Enter your email address first.');
    return;
  }
  try {
    await resetPassword(email);
    toast.success(`Reset email sent to ${email}`, { title: 'Check your inbox' });
  } catch (err) {
    toast.error(friendlyError(err.code), { title: 'Error' });
  }
});

// ── Utilities ──────────────────────────────────────────────────────────────
function redirectByRole(role) {
  if (role === 'employer') {
    window.location.href = '/src/pages/employer-dashboard/employer-dashboard.html';
  } else {
    window.location.href = '/src/pages/student-dashboard/student-dashboard.html';
  }
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '');
}

function showFieldError(id, msg) {
  const el = document.getElementById(id);
  if (el) { el.textContent = msg; el.style.display = 'flex'; }
}

function showAuthError(id, msg) {
  const el = document.getElementById(id);
  if (el) { el.textContent = msg; el.style.display = 'block'; }
}

function clearErrors() {
  document.querySelectorAll('.form-error').forEach((el) => {
    el.textContent = '';
    el.style.display = 'none';
  });
}

function setLoading(btn, loading) {
  if (!btn) return;
  btn.classList.toggle('btn-loading', loading);
  btn.disabled = loading;
}

function friendlyError(code = '') {
  const messages = {
    'auth/email-already-in-use':    'An account with this email already exists.',
    'auth/invalid-email':           'The email address is not valid.',
    'auth/user-not-found':          'No account found with this email.',
    'auth/wrong-password':          'Incorrect password. Please try again.',
    'auth/weak-password':           'Password must be at least 6 characters.',
    'auth/too-many-requests':       'Too many attempts. Please try again later.',
    'auth/popup-blocked':           'Pop-up was blocked. Please allow pop-ups.',
    'auth/network-request-failed':  'Network error. Please check your connection.',
    'auth/invalid-credential':      'Invalid credentials. Please check and try again.',
  };
  return messages[code] || 'Something went wrong. Please try again.';
}
