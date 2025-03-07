import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPAKRydxHQ90id9QUVtT7wjCIdLruR-Cw",
  authDomain: "shelevate-1bc8e.firebaseapp.com",
  projectId: "shelevate-1bc8e",
  storageBucket: "shelevate-1bc8e.firebasestorage.app",
  messagingSenderId: "380735718339",
  appId: "1:380735718339:web:049bcdf7164a5a7855f376"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);