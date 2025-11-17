
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyB7Uput2I7JFJ9EpXyYwUNTwEPX4pfm35M",
  authDomain: "react-exam-7995f.firebaseapp.com",
  projectId: "react-exam-7995f",
  storageBucket: "react-exam-7995f.firebasestorage.app",
  messagingSenderId: "843171193246",
  appId: "1:843171193246:web:0fc7ef337abc2c6f6cb68f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);