// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4LkZKoCiW6AnjuHSjzQ0mO_rxIlhRVEM",
  authDomain: "ivan-sandbox-e76e7.firebaseapp.com",
  projectId: "ivan-sandbox-e76e7",
  storageBucket: "ivan-sandbox-e76e7.firebasestorage.app",
  messagingSenderId: "767207180222",
  appId: "1:767207180222:web:cde1fb7205ad3acf7a9bef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app