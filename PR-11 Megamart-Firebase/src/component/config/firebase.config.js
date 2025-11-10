import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDv0kewHBNSbbo4Cx_UP290iuap_hakJI",
  authDomain: "megamart-aa566.firebaseapp.com",
  projectId: "megamart-aa566",
  storageBucket: "megamart-aa566.firebasestorage.app",
  messagingSenderId: "555401284991",
  appId: "1:555401284991:web:01ff4073e15cbcd67b9e4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);