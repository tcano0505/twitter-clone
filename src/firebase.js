import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHJfMwdypEIlnyocAfNbqXvimPpBpiju4",
    authDomain: "twitter-headstarter-project.firebaseapp.com",
    projectId: "twitter-headstarter-project",
    storageBucket: "twitter-headstarter-project.appspot.com",
    messagingSenderId: "476343762014",
    appId: "1:476343762014:web:4743be156ec5ec082b48cf",
    measurementId: "G-96V2PYSC6N"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

  export default db;