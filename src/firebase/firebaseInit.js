import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBWQE949kT0iHzuVv1IivuEkBDTaEX6IwY",
  authDomain: "blogs-a811a.firebaseapp.com",
  projectId: "blogs-a811a",
  storageBucket: "blogs-a811a.appspot.com",
  messagingSenderId: "435024656047",
  appId: "1:435024656047:web:41e182e36c60e14d2f065a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
