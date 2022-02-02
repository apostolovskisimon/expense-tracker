import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDY2U4wBoCzOB439WfFXgF7AZS1H7Cbyf4",
  authDomain: "expense-tracker-9132d.firebaseapp.com",
  projectId: "expense-tracker-9132d",
  storageBucket: "expense-tracker-9132d.appspot.com",
  messagingSenderId: "900790093009",
  appId: "1:900790093009:web:4741a40e47a411d14631f0",
  measurementId: "G-ZFB3R86H4D",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);

// const analytics = getAnalytics(FIREBASE_APP);

export const FIRESTORE = getFirestore();
