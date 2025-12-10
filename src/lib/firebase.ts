import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Firebase configuration
// Using environment variables if available, otherwise fallback to direct config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAnVLDLL8TGjaKQ5nQtpMpRfWphFeiwTKo",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "pavepath-design-efd5b.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "pavepath-design-efd5b",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "pavepath-design-efd5b.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "483676537326",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:483676537326:web:f1d3eac92ca5d8a01e8eff",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-RSEYH2HN7C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Analytics (only in browser environment)
let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== 'undefined') {
  // Initialize analytics asynchronously
  isSupported().then((supported) => {
    if (supported) {
      try {
        analytics = getAnalytics(app);
      } catch (error) {
        console.warn('Firebase Analytics initialization error:', error);
      }
    }
  }).catch(() => {
    // Analytics not supported or failed to initialize
    console.warn('Firebase Analytics is not supported in this environment');
  });
}

export { analytics };
export default app;

