// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // 1. Import Firestore

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
  // It's good practice to include these if you have them in .env, otherwise they are optional
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
};

// 2. Initialize App (Singleton pattern for Next.js)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// 3. Export Auth and Database
export const auth = getAuth(app);
export const db = getFirestore(app); // <--- CRITICAL: Exporting the database
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  return await signInWithPopup(auth, provider);
};

export const logout = async () => signOut(auth);