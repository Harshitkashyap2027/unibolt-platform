/**
 * Firestore API Service — CRUD operations for all collections
 */
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  onSnapshot,
  serverTimestamp,
  increment,
  arrayUnion,
  arrayRemove,
  writeBatch,
  runTransaction,
} from 'firebase/firestore';
import { db } from '../core/firebase-init.js';

// ══════════════════════════════════════════════════════════════
// USERS
// ══════════════════════════════════════════════════════════════

export async function getUser(uid) {
  const snap = await getDoc(doc(db, 'users', uid));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export async function updateUser(uid, data) {
  await updateDoc(doc(db, 'users', uid), {
    ...data,
    updatedAt: serverTimestamp(),
  });
  // Mirror public fields
  const publicFields = ['displayName', 'photoURL', 'eloRating', 'wins', 'losses', 'streak', 'skills'];
  const publicUpdate = {};
  publicFields.forEach((f) => { if (f in data) publicUpdate[f] = data[f]; });
  if (Object.keys(publicUpdate).length) {
    await updateDoc(doc(db, 'publicProfiles', uid), {
      ...publicUpdate,
      updatedAt: serverTimestamp(),
    });
  }
}

// ══════════════════════════════════════════════════════════════
// INTERNSHIPS
// ══════════════════════════════════════════════════════════════

export async function createInternship(data) {
  const ref = await addDoc(collection(db, 'internships'), {
    ...data,
    applicantCount: 0,
    status: 'active',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}

export async function getInternship(id) {
  const snap = await getDoc(doc(db, 'internships', id));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export async function listInternships({ filters = {}, pageSize = 20, lastDoc = null } = {}) {
  let q = query(collection(db, 'internships'), where('status', '==', 'active'), orderBy('createdAt', 'desc'), limit(pageSize));
  if (filters.skills?.length) q = query(q, where('skills', 'array-contains-any', filters.skills));
  if (lastDoc) q = query(q, startAfter(lastDoc));
  const snap = await getDocs(q);
  return { items: snap.docs.map((d) => ({ id: d.id, ...d.data() })), lastDoc: snap.docs[snap.docs.length - 1] };
}

export async function getEmployerInternships(employerId) {
  const snap = await getDocs(query(collection(db, 'internships'), where('employerId', '==', employerId), orderBy('createdAt', 'desc')));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function updateInternship(id, data) {
  await updateDoc(doc(db, 'internships', id), { ...data, updatedAt: serverTimestamp() });
}

export async function deleteInternship(id) {
  await deleteDoc(doc(db, 'internships', id));
}

// ══════════════════════════════════════════════════════════════
// APPLICATIONS
// ══════════════════════════════════════════════════════════════

export async function createApplication(data) {
  const ref = await addDoc(collection(db, 'applications'), {
    ...data,
    status: 'applied',
    matchScore: null,
    submittedAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  // Increment applicant count
  await updateDoc(doc(db, 'internships', data.internshipId), {
    applicantCount: increment(1),
  });
  return ref.id;
}

export async function getApplication(id) {
  const snap = await getDoc(doc(db, 'applications', id));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export async function getStudentApplications(studentId) {
  const snap = await getDocs(query(collection(db, 'applications'), where('studentId', '==', studentId), orderBy('submittedAt', 'desc')));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function getInternshipApplications(internshipId) {
  const snap = await getDocs(query(collection(db, 'applications'), where('internshipId', '==', internshipId), orderBy('submittedAt', 'desc')));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function updateApplicationStatus(id, status) {
  await updateDoc(doc(db, 'applications', id), { status, updatedAt: serverTimestamp() });
}

// ══════════════════════════════════════════════════════════════
// LEADERBOARD (real-time)
// ══════════════════════════════════════════════════════════════

export function subscribeLeaderboard(callback, pageSize = 50) {
  const q = query(collection(db, 'publicProfiles'), orderBy('eloRating', 'desc'), limit(pageSize));
  return onSnapshot(q, (snap) => {
    const entries = snap.docs.map((d, i) => ({ rank: i + 1, id: d.id, ...d.data() }));
    callback(entries);
  });
}

// ══════════════════════════════════════════════════════════════
// SKILL TREE
// ══════════════════════════════════════════════════════════════

export async function getSkillTree(userId) {
  const snap = await getDoc(doc(db, 'skillTrees', userId));
  return snap.exists() ? snap.data() : { unlockedSkills: [], inProgressSkills: [] };
}

export async function unlockSkill(userId, skillId) {
  const ref = doc(db, 'skillTrees', userId);
  await setDoc(ref, {
    unlockedSkills: arrayUnion(skillId),
    inProgressSkills: arrayRemove(skillId),
    updatedAt: serverTimestamp(),
  }, { merge: true });
  await updateDoc(doc(db, 'users', userId), {
    skills: arrayUnion(skillId),
    updatedAt: serverTimestamp(),
  });
}

export async function startSkill(userId, skillId) {
  await setDoc(doc(db, 'skillTrees', userId), {
    inProgressSkills: arrayUnion(skillId),
    updatedAt: serverTimestamp(),
  }, { merge: true });
}

// ══════════════════════════════════════════════════════════════
// CHAT / CONVERSATIONS
// ══════════════════════════════════════════════════════════════

export async function getOrCreateConversation(userAId, userBId) {
  const participantsSorted = [userAId, userBId].sort();
  const q = query(collection(db, 'conversations'), where('participants', '==', participantsSorted));
  const snap = await getDocs(q);
  if (!snap.empty) return { id: snap.docs[0].id, ...snap.docs[0].data() };
  const ref = await addDoc(collection(db, 'conversations'), {
    participants: participantsSorted,
    createdAt: serverTimestamp(),
    lastMessage: '',
    lastMessageAt: serverTimestamp(),
  });
  return { id: ref.id, participants: participantsSorted };
}

export async function getUserConversations(userId) {
  const snap = await getDocs(query(collection(db, 'conversations'), where('participants', 'array-contains', userId), orderBy('lastMessageAt', 'desc')));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export function subscribeMessages(conversationId, callback) {
  const q = query(collection(db, 'conversations', conversationId, 'messages'), orderBy('timestamp', 'asc'));
  return onSnapshot(q, (snap) => {
    const msgs = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(msgs);
  });
}

export async function sendMessage(conversationId, senderId, text) {
  const batch = writeBatch(db);
  const msgRef = doc(collection(db, 'conversations', conversationId, 'messages'));
  batch.set(msgRef, {
    senderId,
    text: text.trim(),
    timestamp: serverTimestamp(),
    read: false,
  });
  batch.update(doc(db, 'conversations', conversationId), {
    lastMessage: text.trim().slice(0, 100),
    lastMessageAt: serverTimestamp(),
  });
  await batch.commit();
}

// ══════════════════════════════════════════════════════════════
// NOTIFICATIONS
// ══════════════════════════════════════════════════════════════

export function subscribeNotifications(userId, callback) {
  const q = query(collection(db, 'notifications', userId, 'items'), orderBy('createdAt', 'desc'), limit(20));
  return onSnapshot(q, (snap) => {
    const items = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(items);
  });
}

export async function markNotificationRead(userId, notificationId) {
  await updateDoc(doc(db, 'notifications', userId, 'items', notificationId), { read: true });
}

// ══════════════════════════════════════════════════════════════
// ELO RATINGS
// ══════════════════════════════════════════════════════════════

export async function getEloRating(userId) {
  const snap = await getDoc(doc(db, 'eloRatings', userId));
  return snap.exists() ? snap.data() : { rating: 1200, wins: 0, losses: 0, streak: 0 };
}

export function subscribeEloRating(userId, callback) {
  return onSnapshot(doc(db, 'eloRatings', userId), (snap) => {
    callback(snap.exists() ? snap.data() : { rating: 1200 });
  });
}
