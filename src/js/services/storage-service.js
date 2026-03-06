/**
 * Firebase Cloud Storage Service — Resume and profile picture uploads
 */
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { storage } from '../core/firebase-init.js';

const MAX_RESUME_SIZE_MB    = 10;
const MAX_AVATAR_SIZE_MB    = 5;
const ALLOWED_RESUME_TYPES  = ['application/pdf'];
const ALLOWED_IMAGE_TYPES   = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

/**
 * Upload a resume PDF for a user.
 * @param {string}   userId
 * @param {File}     file
 * @param {Function} [onProgress] - Called with 0–100
 * @returns {Promise<string>} Download URL
 */
export async function uploadResume(userId, file, onProgress) {
  validateFile(file, ALLOWED_RESUME_TYPES, MAX_RESUME_SIZE_MB);
  const path = `resumes/${userId}/resume_${Date.now()}.pdf`;
  return uploadFile(path, file, onProgress);
}

/**
 * Upload a profile picture for a user.
 * @param {string}   userId
 * @param {File}     file
 * @param {Function} [onProgress] - Called with 0–100
 * @returns {Promise<string>} Download URL
 */
export async function uploadProfilePicture(userId, file, onProgress) {
  validateFile(file, ALLOWED_IMAGE_TYPES, MAX_AVATAR_SIZE_MB);
  const ext  = file.name.split('.').pop().toLowerCase();
  const path = `avatars/${userId}/avatar_${Date.now()}.${ext}`;
  return uploadFile(path, file, onProgress);
}

/**
 * Delete a file by its download URL.
 * @param {string} downloadURL
 */
export async function deleteFileByURL(downloadURL) {
  try {
    const fileRef = ref(storage, downloadURL);
    await deleteObject(fileRef);
  } catch (err) {
    if (err.code !== 'storage/object-not-found') throw err;
  }
}

// ── Internal helpers ──────────────────────────────────────────────────────

function uploadFile(path, file, onProgress) {
  return new Promise((resolve, reject) => {
    const fileRef  = ref(storage, path);
    const task     = uploadBytesResumable(fileRef, file, {
      contentType: file.type,
      customMetadata: { originalName: file.name },
    });

    task.on(
      'state_changed',
      (snapshot) => {
        const pct = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        onProgress?.(pct);
      },
      (err) => reject(err),
      async () => {
        try {
          const url = await getDownloadURL(task.snapshot.ref);
          resolve(url);
        } catch (err) {
          reject(err);
        }
      }
    );
  });
}

function validateFile(file, allowedTypes, maxSizeMB) {
  if (!file) throw new Error('No file provided.');
  if (!allowedTypes.includes(file.type)) {
    throw new Error(`Invalid file type. Allowed: ${allowedTypes.join(', ')}`);
  }
  if (file.size > maxSizeMB * 1024 * 1024) {
    throw new Error(`File too large. Max size: ${maxSizeMB}MB`);
  }
}
