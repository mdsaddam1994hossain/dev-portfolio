import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC0UyHVsDpehkzKeWijRmzaxOx0JYHL64o",
  authDomain: "bitsofts-official.firebaseapp.com",
  projectId: "bitsofts-official",
  storageBucket: "bitsofts-official.appspot.com",
  messagingSenderId: "631926316093",
  appId: "1:631926316093:web:aafacd3330e0feb44ede54",
  measurementId: "G-Q2556329K0",
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  // let firestore = firebase.firestore();
} else {
  firebase.app(); // if already initialized, use that one
}

export default firebase;