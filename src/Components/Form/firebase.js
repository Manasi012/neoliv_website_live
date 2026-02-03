import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCO4anamMsFU8pCRw55aoudilvWN7Wu9Fg",
  authDomain: "neoliv-c0c2a.firebaseapp.com",
  projectId: "neoliv-c0c2a",
  storageBucket: "neoliv-c0c2a.firebasestorage.app",
  messagingSenderId: "681161312332",
  appId: "1:681161312332:web:7ba9bfe670c29e8bd20ce9",
  measurementId: "G-PKPFGGTD40",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
