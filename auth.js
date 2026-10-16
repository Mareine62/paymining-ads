// Charger Firebase déjà initialisé
import "./firebase.js";

import { getApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

const auth = getAuth(getApp());

// Créer un compte
function inscrireUtilisateur(email, motDePasse) {
  return createUserWithEmailAndPassword(
    auth,
    email,
    motDePasse
  );
}

// Connecter un utilisateur existant
function connecterUtilisateur(email, motDePasse) {
  return signInWithEmailAndPassword(
    auth,
    email,
    motDePasse
  );
}

// Déconnecter l'utilisateur
function deconnecterUtilisateur() {
  return signOut(auth);
}

// Surveiller l'état de connexion
function surveillerConnexion(callback) {
  return onAuthStateChanged(auth, callback);
}

export {
  auth,
  inscrireUtilisateur,
  connecterUtilisateur,
  deconnecterUtilisateur,
  surveillerConnexion
};