// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBChgMz89M7-Fxu_jAtxssE93uQIVQkBGE",
  authDomain: "chat-eb338.firebaseapp.com",
  projectId: "chat-eb338",
  storageBucket: "chat-eb338.appspot.com",
  messagingSenderId: "1069885427214",
  appId: "1:1069885427214:web:af5ada33a0c882d9a3f65f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
