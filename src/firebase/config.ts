import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCOnC5A7soVY7Lz_XRlP6pxfbenX_XASqU",
  authDomain: "healthnest-c3d1b.firebaseapp.com",
  projectId: "healthnest-c3d1b",
  storageBucket: "healthnest-c3d1b.firebasestorage.app",
  messagingSenderId: "1013238296452",
  appId: "1:1013238296452:web:446b5307c805fcf07537d1",
  measurementId: "G-DNV47EHN17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Admin email for reference
export const ADMIN_EMAIL = 'hardyy.pathfinder@gmail.com';

export default app;