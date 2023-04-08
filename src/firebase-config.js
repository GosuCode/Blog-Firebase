// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqJS2vsGhOKJQYddxp3Gy_mE8P_Pip-K0",
  authDomain: "blog-app-5fa2c.firebaseapp.com",
  projectId: "blog-app-5fa2c",
  storageBucket: "blog-app-5fa2c.appspot.com",
  messagingSenderId: "69073721366",
  appId: "1:69073721366:web:aa36a69fc6cc034b19fd37",
  measurementId: "G-CNPXYLSJMV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
