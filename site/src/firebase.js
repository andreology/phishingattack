import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBEUWggw13Cyia9TZ85N1R_ohBeG5MRjhM",
    authDomain: "phishing-attack.firebaseapp.com",
    databaseURL: "https://phishing-attack.firebaseio.com",
    projectId: "phishing-attack",
    storageBucket: "phishing-attack.appspot.com",
    messagingSenderId: "66930744476",
    appId: "1:66930744476:web:bb9baf7f93fc0e53b62159",
    measurementId: "G-657ZQET8CM"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase
