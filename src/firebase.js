// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_nOIZ3JRiP93AwtHwCA8i1W0hU8LKRII",
  authDomain: "fbase-40ef5.firebaseapp.com",
  projectId: "fbase-40ef5",
  storageBucket: "fbase-40ef5.appspot.com",
  messagingSenderId: "1086225764439",
  appId: "1:1086225764439:web:1fd6947a170b6765891312",
  measurementId: "G-L6NSN67X39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);        // Initialize Firebase Authentication
export const db = getFirestore(app);     // Initialize Firestore
