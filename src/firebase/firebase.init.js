// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6OfXiOz0sN4RtY05MTcmVR-4QQEhMzCw",
  authDomain: "coding-hero-325aa.firebaseapp.com",
  projectId: "coding-hero-325aa",
  storageBucket: "coding-hero-325aa.appspot.com",
  messagingSenderId: "912662948316",
  appId: "1:912662948316:web:41c6b091d19a4f46ee0719"
  // apiKey:process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // c:process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;