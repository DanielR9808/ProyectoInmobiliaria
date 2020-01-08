import * as firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAtslxWggabnRCgwHz6RJmsXTUq_D5NogM",
    authDomain: "inmobiliaria-2bcd0.firebaseapp.com",
    databaseURL: "https://inmobiliaria-2bcd0.firebaseio.com",
    projectId: "inmobiliaria-2bcd0",
    storageBucket: "inmobiliaria-2bcd0.appspot.com",
    messagingSenderId: "996413480025",
    appId: "1:996413480025:web:5ef541ca27797e8b256548",
    measurementId: "G-MRR4SX5P19"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;