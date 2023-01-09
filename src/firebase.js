import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "admin-panel-a6aa0.firebaseapp.com",
  projectId: "admin-panel-a6aa0",
  storageBucket: "admin-panel-a6aa0.appspot.com",
  messagingSenderId: "259688834497",
  appId: "1:259688834497:web:20395213bc72c8ccf73b40",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
