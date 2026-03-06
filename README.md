<div align="center">

<img src="https://img.shields.io/badge/UniBolt-Launch%20Your%20Career-6366f1?style=for-the-badge&logo=lightning&logoColor=white" alt="UniBolt" />

# ⚡ UniBolt Platform

**Enterprise-grade gamified internship and recruitment platform**

[![Firebase](https://img.shields.io/badge/Firebase-10.x-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node](https://img.shields.io/badge/Node-%3E%3D18-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

[Features](#-features) · [Tech Stack](#-tech-stack) · [Getting Started](#-getting-started) · [Project Structure](#-project-structure) · [Architecture](#-architecture) · [Deployment](#-deployment) · [Contributing](#-contributing)

</div>

---

## 📖 Overview

**UniBolt** connects university students with employers through a gamified, merit-based recruitment experience. Students build verifiable skill trees, compete on a live ELO leaderboard, and get AI-matched to internship opportunities — while employers get auto-screened, ranked applicants in real time.

---

## ✨ Features

### 🎓 For Students
| Feature | Description |
|---|---|
| **Skill Tree** | Visual, gamified skill progression map across programming, design, data science, and more |
| **ELO Leaderboard** | Dynamic ranking system based on skill challenges and peer competition |
| **AI Job Matching** | Gemini AI scores resume-to-job fit; falls back to keyword matching when unavailable |
| **Application Tracking** | Track application status from applied → screening → interview → offer |
| **Real-time Chat** | Secure conversations with employers |
| **Profile Page** | Portfolio-style profile with bio, university, skills, and LinkedIn |

### 🏢 For Employers
| Feature | Description |
|---|---|
| **Post Internships** | Create detailed listings with required skills and descriptions |
| **Auto-Screening** | Cloud Function automatically scores and ranks every incoming application |
| **Applicant Dashboard** | View ranked applicants with match scores and missing skills at a glance |
| **Real-time Chat** | Communicate directly with candidates |
| **Notifications** | Instant in-app alerts when new applications arrive |

### 🔒 Platform
- **Role-based auth** — `student` and `employer` roles with Firestore security rules
- **Google Sign-In** and email/password authentication
- **Offline support** — Firestore IndexedDB persistence
- **Progressive Web App** — installable, with a web manifest and service worker
- **View Transitions API** — smooth client-side page navigation
- **Firebase App Check** — reCAPTCHA v3 protection in production

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | Vanilla JavaScript (ES Modules), HTML5, CSS3 |
| **Build tool** | [Vite 5](https://vitejs.dev/) |
| **Backend / BaaS** | [Firebase 10](https://firebase.google.com/) — Firestore, Auth, Storage, Functions v2, Analytics |
| **AI** | [Google Gemini API](https://ai.google.dev/) (`gemini-pro`) with keyword-match fallback |
| **Hosting** | Firebase Hosting (CDN, cache headers, HTTPS) |
| **Security** | Firebase App Check (reCAPTCHA v3), Firestore security rules |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **≥ 18**
- [Firebase CLI](https://firebase.google.com/docs/cli) **≥ 13** — `npm i -g firebase-tools`
- A Firebase project with **Firestore, Auth, Storage, Functions, and Hosting** enabled

### 1 — Clone & install

```bash
git clone https://github.com/Harshitkashyap2027/unibolt-platform.git
cd unibolt-platform
npm install
```

### 2 — Configure environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env
```

| Variable | Description |
|---|---|
| `VITE_FIREBASE_API_KEY` | Firebase Web API key |
| `VITE_FIREBASE_AUTH_DOMAIN` | `<project-id>.firebaseapp.com` |
| `VITE_FIREBASE_DATABASE_URL` | Realtime Database URL (used for presence / real-time features alongside Firestore) |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | `<project-id>.firebasestorage.app` |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Cloud Messaging sender ID |
| `VITE_FIREBASE_APP_ID` | Firebase app ID |
| `VITE_FIREBASE_MEASUREMENT_ID` | Google Analytics measurement ID |
| `VITE_APP_CHECK_RECAPTCHA_KEY` | reCAPTCHA v3 site key (production only) |
| `VITE_GEMINI_API_KEY` | Google Gemini API key — if set, enables AI-powered matching on the client; if omitted, the system falls back to local keyword matching automatically |
| `VITE_GEMINI_API_URL` | Gemini endpoint (defaults to `gemini-pro:generateContent`) |
| `VITE_APP_ENV` | `development` or `production` |
| `VITE_APP_URL` | Public URL of the app |

> **Note:** Firebase client config values are intentionally public. Security is enforced by Firestore/Storage rules, not by hiding the config.

### 3 — Log in to Firebase

```bash
firebase login
firebase use --add   # select your project
```

### 4 — Start the development server

```bash
npm run dev
```

The app opens at **http://localhost:3000** with hot-module replacement.

---

## 🔥 Firebase Emulators (recommended for local dev)

Set `VITE_APP_ENV=development` in `.env`, then run:

```bash
firebase emulators:start
```

This starts local emulators on the ports below — the app connects to them automatically:

| Service | Port |
|---|---|
| Auth | 9099 |
| Firestore | 8080 |
| Functions | 5001 |
| Hosting | 5000 |
| Emulator UI | 4000 |

---

## 📁 Project Structure

```
unibolt-platform/
├── public/                   # Static assets (favicon, web manifest, icons)
├── src/
│   ├── main.js               # App entry point
│   ├── css/
│   │   ├── design-tokens.css # CSS custom properties (colours, spacing, type)
│   │   ├── base.css          # Global reset & base styles
│   │   ├── skeleton.css      # Skeleton loading animations
│   │   └── components/       # Shared component styles
│   ├── js/
│   │   ├── app.js            # App bootstrap & auth listener
│   │   ├── core/
│   │   │   ├── firebase-init.js   # Firebase SDK initialisation (App Check, emulators)
│   │   │   ├── auth-service.js    # Authentication & role guards
│   │   │   └── router.js          # Client-side router (View Transitions API)
│   │   ├── services/
│   │   │   ├── ai-matching.js         # Gemini AI resume ↔ job matching
│   │   │   ├── elo-ranking.js         # ELO algorithm (client-side)
│   │   │   ├── firestore-api.js       # Typed Firestore read/write helpers
│   │   │   ├── notification-service.js # In-app notifications
│   │   │   └── storage-service.js     # Firebase Storage helpers
│   │   └── components/
│   │       ├── modal.js               # Accessible modal dialog
│   │       ├── toast-notifications.js # Toast UI component
│   │       ├── skeleton-loader.js     # Skeleton screen component
│   │       ├── svg-progress.js        # SVG circular progress ring
│   │       └── intersection-observer.js # Lazy-load helper
│   └── pages/
│       ├── landing/           # Marketing / home page
│       ├── auth/              # Sign-in / sign-up page
│       ├── student-dashboard/ # Student home
│       ├── employer-dashboard/# Employer home
│       ├── skill-tree/        # Gamified skill progression
│       ├── leaderboard/       # ELO rankings
│       ├── chat/              # Real-time messaging
│       └── profile/           # User profile
├── functions/
│   ├── index.js              # Cloud Functions (auto-screening, ELO, AI scoring)
│   └── package.json
├── firestore.rules           # Firestore security rules
├── firestore.indexes.json    # Composite index definitions
├── firebase.json             # Firebase project configuration
├── vite.config.js            # Vite multi-page build config
├── .env.example              # Environment variable template
└── package.json
```

---

## 🗺 Pages & Routes

| Route | Page | Auth required |
|---|---|---|
| `/` | Initial loader / redirect | No |
| `/landing` | Marketing landing page | No |
| `/auth` | Sign in / Sign up | No (redirects if logged in) |
| `/student-dashboard` | Student home & job feed | ✅ |
| `/employer-dashboard` | Employer home & applicants | ✅ |
| `/skill-tree` | Skill tree & progress | ✅ |
| `/leaderboard` | ELO leaderboard | ✅ |
| `/chat` | Messaging | ✅ |
| `/profile` | User profile editor | ✅ |

Navigation uses the **View Transitions API** for smooth animated transitions, with a fallback to standard navigation on older browsers.

---

## 🏗 Architecture

```
Browser (SPA)
│
├── Vite multi-page build (one HTML entry per route)
├── Client-side router   — intercepts [data-route] link clicks
├── Firebase SDK v10     — modular, tree-shaken
│   ├── Auth             — email/password + Google OAuth
│   ├── Firestore        — real-time DB + offline cache
│   ├── Storage          — resume / avatar uploads
│   ├── Analytics        — page-view & event tracking
│   └── App Check        — reCAPTCHA v3 (production only)
│
└── Cloud Functions v2
    ├── onApplicationCreated  — Firestore trigger: auto-screens applications
    ├── calculateEloRating    — HTTPS callable: server-side ELO update
    └── getAiMatchScore       — HTTPS callable: Gemini AI scoring with fallback
```

### ELO Ranking

Students earn an ELO rating (starting at **1,200**) through skill challenges. The K-factor is dynamic:

| Condition | K-factor |
|---|---|
| Fewer than 10 games | 40 (Beginner) |
| More than 30 games and rating > 2,000 | 16 (Master) |
| Otherwise | 32 (Default) |

Rank titles range from **Newcomer** (< 1,200) up to **Grandmaster** (≥ 2,400).

### AI Job Matching

1. Client calls `getMatchScore(resumeText, jobDescription)` in `ai-matching.js`.
2. If `VITE_GEMINI_API_KEY` is set, it calls the Gemini API and parses structured JSON.
3. If Gemini is unavailable (no key, quota exceeded, or network error), it falls back to local **keyword matching** — no external API required.
4. Cloud Function `getAiMatchScore` provides the same logic server-side (used by auto-screening).

### Firestore Security Model

- **`/users/{uid}`** — private; owner read/write, role and email are immutable after creation.
- **`/publicProfiles/{uid}`** — public read (leaderboard data), owner write.
- **`/internships/{id}`** — public read; employer create/update/delete (own only).
- **`/applications/{id}`** — student creates once; employer updates status; no deletes.
- **`/leaderboard` / `/eloRatings`** — public read; written only by Cloud Functions.
- **`/skillTrees/{uid}`** — owner read/write.
- **`/conversations` / `messages`** — participants only.
- **`/notifications/{uid}/items`** — owner read/delete; created only by Cloud Functions.

---

## 📦 Build & Deployment

### Build for production

```bash
npm run build
```

Output goes to `dist/`. Vite bundles each page as a separate entry point and splits Firebase SDK chunks for optimal caching.

### Deploy to Firebase Hosting

```bash
npm run deploy
# equivalent to: npm run build && firebase deploy
```

This deploys:
- **Hosting** — static files from `dist/` with long-lived cache headers and security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`)
- **Firestore rules & indexes**
- **Cloud Functions** (Node.js 18 runtime)

### Preview locally

```bash
npm run preview
```

---

## 🧪 Scripts Reference

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR on port 3000 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run deploy` | Build and deploy to Firebase |
| `firebase emulators:start` | Start all local Firebase emulators |

---

## 🤝 Contributing

1. **Fork** the repository and create a feature branch: `git checkout -b feat/my-feature`
2. **Commit** with clear messages following [Conventional Commits](https://www.conventionalcommits.org/): `feat:`, `fix:`, `chore:`, etc.
3. **Test** your changes against the Firebase emulators before pushing.
4. Open a **Pull Request** with a clear description of what was changed and why.

### Code style

- Vanilla JavaScript (ES2022+ features are fine — Vite transpiles for target browsers)
- No framework dependencies — keep the bundle lean
- Follow the existing module pattern: thin UI files import from `@core`, `@services`, and `@components`

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">
  Made with ⚡ by <a href="https://github.com/Harshitkashyap2027">Harshit Kashyap</a>
</div>