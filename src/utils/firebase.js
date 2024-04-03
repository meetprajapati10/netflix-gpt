// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAoBW6vLVfrQyGYJc1_Q-0XGqaxN9ykLo",
  authDomain: "netflixgpt-79fa1.firebaseapp.com",
  projectId: "netflixgpt-79fa1",
  storageBucket: "netflixgpt-79fa1.appspot.com",
  messagingSenderId: "395838005681",
  appId: "1:395838005681:web:ca9748d1dc3a9db362dd90",
  measurementId: "G-CM2H5SMX39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
