// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOMV62oZ3P5THEaL5Sz8_AwMgENH4kV-c",
  authDomain: "truechat-d2b30.firebaseapp.com",
  projectId: "truechat-d2b30",
  storageBucket: "truechat-d2b30.appspot.com",
  messagingSenderId: "730934253669",
  appId: "1:730934253669:web:935c09fcf7b34dc46a4e8c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
