import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyARkd-DpYZDO-9qusoBouNWkJzpbIo0J6Y",
    authDomain: "net-ninja-marioplan-d8891.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-d8891.firebaseio.com",
    projectId: "net-ninja-marioplan-d8891",
    storageBucket: "net-ninja-marioplan-d8891.appspot.com",
    messagingSenderId: "1006066428459"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;