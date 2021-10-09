import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC7wcQ_DTGfmkee1M2Vh_FDUDRBlV_vbTg",
    authDomain: "react-app-cc2e5.firebaseapp.com",
    projectId: "react-app-cc2e5",
    storageBucket: "react-app-cc2e5.appspot.com",
    messagingSenderId: "156524881274",
    appId: "1:156524881274:web:dfe5dd5ced63f91ce5e2c3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}