import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
        apiKey: "AIzaSyBLf522v3nyepfTk9Jpc7Gb9Zlstnsn3xg",
        authDomain: "action-it.firebaseapp.com",
        databaseURL: "https://action-it.firebaseio.com",
        projectId: "action-it",
        storageBucket: "action-it.appspot.com",
        messagingSenderId: "1040441498017",
        appId: "1:1040441498017:web:a23e7801c3260aece7d3e0"
});

export { firebaseConfig as firebase };