import firebase from 'firebase/app'
import 'firebase/firebase-database'


  // Your web app's Firebase configuration
  var firebaseConfig = {
    //apiKey: "AIzaSyAbiDl6dvSsERR-IQW9rr9-0jY20M1fXEs",
    apiKey: process.env.VUE_APP_FIREBASE_KEY,
    authDomain: "share-byte.firebaseapp.com",
    databaseURL: "https://share-byte.firebaseio.com",
    projectId: "share-byte",
    storageBucket: "share-byte.appspot.com",
    messagingSenderId: "751208361850",
    appId: "1:751208361850:web:e7c6b15fc09cc677e830c3",
    measurementId: "G-G0LMBXKNCK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.database();