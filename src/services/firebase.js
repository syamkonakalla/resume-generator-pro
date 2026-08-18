import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDjLKJHyrtRzkiQ-AYc3k-0ik2Ir7nUca4",
    authDomain: "resume-generator-ba50b.firebaseapp.com",
    databaseURL: "https://resume-generator-ba50b-default-rtdb.firebaseio.com",
    projectId: "resume-generator-ba50b",
    storageBucket: "resume-generator-ba50b.firebasestorage.app",
    messagingSenderId: "864365980136",
    appId: "1:864365980136:web:c417e92ad693e6f47c1c5d",
    measurementId: "G-9TQQEPGR99"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;