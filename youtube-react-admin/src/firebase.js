// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCl2ltZmW1plp4JMsAyLHlJhlO2HgiFOcw",
    authDomain: "netflix-97354.firebaseapp.com",
    projectId: "netflix-97354",
    storageBucket: "netflix-97354.appspot.com",
    messagingSenderId: "640461788624",
    appId: "1:640461788624:web:a0ee02f89eaffb03cc15d5",
    measurementId: "G-8TJWZ29SW3"
  };

  firebase.initializeApp(firebaseConfig);
  export const storage = firebase.storage();
  export default firebase;