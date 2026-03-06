/**
 * Firebase Initialization — App Check, Auth, Firestore, Storage, Functions, Analytics
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
import { getAnalytics, isSupported as analyticsIsSupported } from 'firebase/analytics';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

/**
 * Firebase client config — these values are intentionally public (security is
 * enforced by Firestore / Storage rules, not by hiding the config).
 * Override any value via the corresponding VITE_FIREBASE_* env var in .env.
 */
const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY            || 'AIzaSyCdY2FimGKJeWoU0AdEQIxxoZ4jXGaI7Ec',
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN        || 'unibolt-os.firebaseapp.com',
  databaseURL:       import.meta.env.VITE_FIREBASE_DATABASE_URL       || 'https://unibolt-os-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID         || 'unibolt-os',
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET     || 'unibolt-os.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '514045426541',
  appId:             import.meta.env.VITE_FIREBASE_APP_ID             || '1:514045426541:web:d665c423c87a1a96713864',
  measurementId:     import.meta.env.VITE_FIREBASE_MEASUREMENT_ID     || 'G-KDDQXTP64T',
};

// ── Initialize Firebase App ──────────────────────────────────────────────────
export let app = null;
export let auth = null;
export let db = null;
export let storage = null;
export let functions = null;
export let analytics = null;

try {
  app = initializeApp(firebaseConfig);

  // ── Services ───────────────────────────────────────────────────────────────
  auth      = getAuth(app);
  db        = getFirestore(app);
  storage   = getStorage(app);
  functions = getFunctions(app, 'us-central1');

  // ── Analytics (only where supported — not in SSR / Node environments) ─────
  analyticsIsSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch((err) => {
    console.warn('[Firebase] Analytics initialization skipped:', err.message);
  });

  // ── App Check (reCAPTCHA v3) ───────────────────────────────────────────────
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

  // ── Emulators (development only) ──────────────────────────────────────────
  if (import.meta.env.VITE_APP_ENV === 'development') {
    try {
      connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
      connectFirestoreEmulator(db, 'localhost', 8080);
      connectStorageEmulator(storage, 'localhost', 9199);
      connectFunctionsEmulator(functions, 'localhost', 5001);
    } catch {
      // Emulators already connected
    }
  }

  // ── Firestore Offline Persistence ─────────────────────────────────────────
  enableIndexedDbPersistence(db).catch((err) => {
    if (err.code === 'failed-precondition') {
      console.warn('[Firestore] Persistence failed: multiple tabs open.');
    } else if (err.code === 'unimplemented') {
      console.warn('[Firestore] Persistence not supported in this browser.');
    }
  });
} catch (err) {
  // Firebase failed to start despite having a config — this usually means
  // the credentials are invalid or a required service is unavailable.
  // The app will still render public pages (landing, auth) in a degraded state.
  console.error('[Firebase] Initialization error:', err.message);
}
