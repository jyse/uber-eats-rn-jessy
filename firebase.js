import firebase from "firebase";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHK6DOJKimqLD4x08gaUYFN8XNZ0ayqjY",
  authDomain: "uber-rn-jessy.firebaseapp.com",
  projectId: "uber-rn-jessy",
  storageBucket: "uber-rn-jessy.appspot.com",
  messagingSenderId: "611631969944",
  appId: "1:611631969944:web:0c2355d1e06dc17dbf42ed",
  measurementId: "G-H9VB493VK6",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
