// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBChgMz89M7-Fxu_jAtxssE93uQIVQkBGE",
  authDomain: "chatapplication-6c657.firebaseapp.com",
  projectId: "chatapplication-6c657",
  storageBucket: "chatapplication-6c657.appspot.com",
  messagingSenderId: "375662795560",
  appId: "1:375662795560:web:64028a81a7e26224290e1d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
