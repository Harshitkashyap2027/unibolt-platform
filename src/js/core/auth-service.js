/**
 * Auth Service — Firebase Authentication with role-based access
 */
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
  deleteUser,
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from './firebase-init.js';

const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('email');
googleProvider.addScope('profile');

/** ── Register with email/password ──────────────────────────────────────── */
export async function registerWithEmail({ email, password, displayName, role }) {
  const credential = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(credential.user, { displayName });
  await createUserDocument(credential.user, { role, displayName });
  return credential.user;
}

/** ── Login with email/password ─────────────────────────────────────────── */
export async function loginWithEmail({ email, password }) {
  const credential = await signInWithEmailAndPassword(auth, email, password);
  return credential.user;
}

/** ── Google Sign-In ─────────────────────────────────────────────────────── */
export async function loginWithGoogle(role = 'student') {
  const credential = await signInWithPopup(auth, googleProvider);
  const isNew = credential._tokenResponse?.isNewUser;
  if (isNew) {
    await createUserDocument(credential.user, {
      role,
      displayName: credential.user.displayName || '',
    });
  }
  return credential.user;
}

/** ── Sign Out ───────────────────────────────────────────────────────────── */
export async function logout() {
  await signOut(auth);
}

/** ── Password Reset ─────────────────────────────────────────────────────── */
export async function resetPassword(email) {
  await sendPasswordResetEmail(auth, email);
}

/** ── Get Current User Role ──────────────────────────────────────────────── */
export async function getUserRole(uid) {
  if (!db) return null;
  const snap = await getDoc(doc(db, 'users', uid));
  return snap.exists() ? snap.data().role : null;
}

/** ── Get User Profile ───────────────────────────────────────────────────── */
export async function getUserProfile(uid) {
  if (!db) return null;
  const snap = await getDoc(doc(db, 'users', uid));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

/** ── Auth State Observer ────────────────────────────────────────────────── */
export function onAuthChange(callback) {
  if (!auth) {
    callback({ user: null, profile: null });
    return () => {};
  }
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      const profile = await getUserProfile(user.uid).catch(() => null);
      callback({ user, profile });
    } else {
      callback({ user: null, profile: null });
    }
  });
}

/** ── Current User Getter ────────────────────────────────────────────────── */
export function getCurrentUser() {
  return auth ? auth.currentUser : null;
}

/** ── Require Auth Guard ─────────────────────────────────────────────────── */
export function requireAuth(redirectPath = '/src/pages/auth/auth.html') {
  if (!auth) {
    window.location.href = redirectPath;
    return Promise.resolve(null);
  }
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      if (!user) {
        window.location.href = redirectPath;
      } else {
        resolve(user);
      }
    });
  });
}

/** ── Require Role Guard ─────────────────────────────────────────────────── */
export async function requireRole(expectedRole, redirectPath = '/') {
  const user = await requireAuth();
  if (!user) return null;
  const role = await getUserRole(user.uid);
  if (role !== expectedRole) {
    window.location.href = redirectPath;
    return null;
  }
  return user;
}

/** ── Create User Document in Firestore ──────────────────────────────────── */
async function createUserDocument(user, { role, displayName }) {
  if (!db) return;
  const userRef = doc(db, 'users', user.uid);
  const existing = await getDoc(userRef);
  if (!existing.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      displayName: displayName || user.displayName || '',
      photoURL: user.photoURL || '',
      role: role || 'student',
      bio: '',
      university: '',
      skills: [],
      linkedIn: '',
      eloRating: 1200,
      gamesPlayed: 0,
      wins: 0,
      losses: 0,
      streak: 0,
      achievementIds: [],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    // Public profile for leaderboard
    await setDoc(doc(db, 'publicProfiles', user.uid), {
      uid: user.uid,
      displayName: displayName || user.displayName || '',
      photoURL: user.photoURL || '',
      eloRating: 1200,
      wins: 0,
      losses: 0,
      streak: 0,
      skills: [],
      updatedAt: serverTimestamp(),
    });
  }
}
