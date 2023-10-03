// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcFfzhKHCDINdPzRDvvLY8cLCxSbuiv8c",
  authDomain: "dragon-news-buid.firebaseapp.com",
  projectId: "dragon-news-buid",
  storageBucket: "dragon-news-buid.appspot.com",
  messagingSenderId: "405641559085",
  appId: "1:405641559085:web:2f9808e6e96eb62a954ca4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);