// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl2fuwambAzE2fKRe-FGWf18DKYjea7qI",
  authDomain: "curso-react-88c4c.firebaseapp.com",
  projectId: "curso-react-88c4c",
  storageBucket: "curso-react-88c4c.appspot.com",
  messagingSenderId: "1026136956230",
  appId: "1:1026136956230:web:75ed945fa5d103546ad947",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
