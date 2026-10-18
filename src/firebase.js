// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2ztZWrBoyoJ8xZ7kAyz_rkoVPFwlI7qc",
  authDomain: "react-authgg.firebaseapp.com",
  projectId: "react-authgg",
  storageBucket: "react-authgg.firebasestorage.app",
  messagingSenderId: "111678707393",
  appId: "1:111678707393:web:2701a29bd05d6d9bf8e640"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;