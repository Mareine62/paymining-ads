import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCANnk7rtYk01Ugs3FzID0SoLE5Eolc0rw",
  authDomain: "paymining-ads.firebaseapp.com",
  projectId: "paymining-ads",
  storageBucket: "paymining-ads.firebasestorage.app",
  messagingSenderId: "558427208647",
  appId: "1:558427208647:web:3ff5efe08bb7f863feb7e2",
  measurementId: "G-ZXCFCHJXY3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Vérifier que Firebase est initialisé
console.log("Firebase est initialisé pour Paymining Ads.");

export {
  db,
  collection,
  addDoc,
  serverTimestamp
};