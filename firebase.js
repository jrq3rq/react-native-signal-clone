// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";
import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBreg1lB1x8uWOYOzXEJyEj92CddBMQBdM",
  authDomain: "react-native-signal-clone.firebaseapp.com",
  projectId: "react-native-signal-clone",
  storageBucket: "react-native-signal-clone.appspot.com",
  messagingSenderId: "474117114140",
  appId: "1:474117114140:web:c5987e99b948e414dc92d9",
  measurementId: "G-4DF31ZVQED",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };

//   command P
