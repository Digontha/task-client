// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq3434tuOQRisn_IEaxxNnCAhEZJAVATM",
  authDomain: "task-client-bd83a.firebaseapp.com",
  projectId: "task-client-bd83a",
  storageBucket: "task-client-bd83a.appspot.com",
  messagingSenderId: "435002548144",
  appId: "1:435002548144:web:635cecb63a3e6582368075"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;