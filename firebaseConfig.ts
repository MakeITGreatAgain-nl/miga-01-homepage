// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3S6Kj986W_aOpRcq63DvhjilOGKOgpBU",
  authDomain: "makeitgreatagain-ge.firebaseapp.com",
  projectId: "makeitgreatagain-ge",
  storageBucket: "makeitgreatagain-ge.firebasestorage.app",
  messagingSenderId: "308620462135",
  appId: "1:308620462135:web:781757a3ebd00f160397b2",
  measurementId: "G-C0B997RQP5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { app, db }