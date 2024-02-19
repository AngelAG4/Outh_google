import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCRo-SMBDrJEYUT0Xa_frLpm1vJC8F80GA",
  authDomain: "coffee1-39c1c.firebaseapp.com",
  projectId: "coffee1-39c1c",
  storageBucket: "coffee1-39c1c.appspot.com",
  messagingSenderId: "918060776772",
  appId: "1:918060776772:web:ea842f248ed72e3593ab11",
  measurementId: "G-0QDCCHRT3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)