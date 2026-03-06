/**
 * Firebase Initialization — App Check, Auth, Firestore, Storage, Functions
 */
import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import {
  getFirestore,
  connectFirestoreEmulator,
  enableIndexedDbPersistence,
} from 'firebase/firestore';
import { getStorage, connectStorageEmulator } from 'firebase/storage';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId:     import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// ── Initialize Firebase App ──────────────────────────────────────────────────
export const app = initializeApp(firebaseConfig);

// ── Services ─────────────────────────────────────────────────────────────────
export const auth     = getAuth(app);
export const db       = getFirestore(app);
export const storage  = getStorage(app);
export const functions = getFunctions(app, 'us-central1');

// ── App Check (reCAPTCHA v3) ─────────────────────────────────────────────────
const appCheckKey = import.meta.env.VITE_APP_CHECK_RECAPTCHA_KEY;
if (appCheckKey && import.meta.env.VITE_APP_ENV !== 'development') {
  try {
    initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(appCheckKey),
      isTokenAutoRefreshEnabled: true,
    });
  } catch (err) {
    console.warn('[Firebase] App Check initialization skipped:', err.message);
  }
}

// ── Emulators (development only) ─────────────────────────────────────────────
if (import.meta.env.VITE_APP_ENV === 'development' && typeof window !== 'undefined') {
  try {
    connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
    connectFirestoreEmulator(db, 'localhost', 8080);
    connectStorageEmulator(storage, 'localhost', 9199);
    connectFunctionsEmulator(functions, 'localhost', 5001);
  } catch (err) {
    // Emulators already connected
  }
}

// ── Firestore Offline Persistence ────────────────────────────────────────────
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === 'failed-precondition') {
    console.warn('[Firestore] Persistence failed: multiple tabs open.');
  } else if (err.code === 'unimplemented') {
    console.warn('[Firestore] Persistence not supported in this browser.');
  }
});
