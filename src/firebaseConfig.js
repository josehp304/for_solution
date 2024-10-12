// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const fireApi = process.env.firebase_key
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: fireApi,
  authDomain: "forsolution-b6673.firebaseapp.com",
  projectId: "forsolution-b6673",
  storageBucket: "forsolution-b6673.appspot.com",
  messagingSenderId: "527910877979",
  appId: "1:527910877979:web:7622b8252b520cdc49b1be",
  measurementId: "G-E8QZB5RD41",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
