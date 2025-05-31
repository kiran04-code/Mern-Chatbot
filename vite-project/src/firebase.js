// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAeAdeAsE9l4TTRwfDkL-pUbtAQq14yks",
  authDomain: "chatbot-auth-d4732.firebaseapp.com",
  projectId: "chatbot-auth-d4732",
  storageBucket: "chatbot-auth-d4732.firebasestorage.app",
  messagingSenderId: "1028089671454",
  appId: "1:1028089671454:web:dd47b4e1840fb1d83ca30f",
  measurementId: "G-CY33FKN1E1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);