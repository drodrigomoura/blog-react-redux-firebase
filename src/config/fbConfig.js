import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyCZkXqCSu7Lmkjvb2AVuWvOK8LOLVWcTKA",
    authDomain: "marioplan-c0177.firebaseapp.com",
    databaseURL: "https://marioplan-c0177.firebaseio.com",
    projectId: "marioplan-c0177",
    storageBucket: "marioplan-c0177.appspot.com",
    messagingSenderId: "457574165619",
    appId: "1:457574165619:web:a2b9b4edc9ca7930b18e06"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({})


export default firebase