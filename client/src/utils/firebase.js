import * as firebase from 'firebase/app';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDpbsZP6AMlUAsuFwksJMLqjY8R6NY4jRQ",
    authDomain: "expense-tracker-82122.firebaseapp.com",
    databaseURL: "https://expense-tracker-82122.firebaseio.com",
    projectId: "expense-tracker-82122",
    storageBucket: "expense-tracker-82122.appspot.com",
    messagingSenderId: "123739885329",
    appId: "1:123739885329:web:2825f1638a75ba519146b0",
    measurementId: "G-X6Z8JG849K"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;