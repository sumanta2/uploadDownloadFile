import firebase from 'firebase';


//connection string to connect firebase server
const firebaseConfig = {
    apiKey: "AIzaSyAk3O2p7HobLa9V4mkLxPiLeCBPwKxnZz0",
    authDomain: "reactfirebaseconnection.firebaseapp.com",
    databaseURL: "https://reactfirebaseconnection-default-rtdb.firebaseio.com",
    projectId: "reactfirebaseconnection",
    storageBucket: "reactfirebaseconnection.appspot.com",
    messagingSenderId: "574167705081",
    appId: "1:574167705081:web:d9378cfc4a271835d20928"
  };


firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();


export default storage
