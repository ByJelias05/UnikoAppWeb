import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBzpa94sE2dEHQIEuIN0bp2Ua6dflYrAO8",
  authDomain: "uniko-216b5.firebaseapp.com",
  databaseURL: "https://uniko-216b5-default-rtdb.firebaseio.com",
  projectId: "uniko-216b5",
  storageBucket: "uniko-216b5.firebasestorage.app",
  messagingSenderId: "646128369331",
  appId: "1:646128369331:web:723dc103d7ca8f6a6b7ac6",
  measurementId: "G-T258KRZ371"
};

export const db = firebase.default.initializeApp(firebaseConfig).firestore();