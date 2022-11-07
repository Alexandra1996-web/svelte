// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnbSAzTmdSHuxZfjKSTTs-aMyf64vZJ8c",
  authDomain: "svelte-crud-51131.firebaseapp.com",
  projectId: "svelte-crud-51131",
  storageBucket: "svelte-crud-51131.appspot.com",
  messagingSenderId: "157099435769",
  appId: "1:157099435769:web:4f9d5456b56f57f928e428",
  measurementId: "G-9MHGDKJ20K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);


