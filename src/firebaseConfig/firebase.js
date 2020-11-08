import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyDkdrcDEThSq3mkZTwvxrOhDhYSLcwcGKc",
    authDomain: "calculator-92f5d.firebaseapp.com",
    databaseURL: "https://calculator-92f5d.firebaseio.com",
    projectId: "calculator-92f5d",
    storageBucket: "calculator-92f5d.appspot.com",
    messagingSenderId: "1084688897851",
    appId: "1:1084688897851:web:41d461511b22409366491e",
    measurementId: "G-54XS9BHDKJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;