// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVFD6rnaHgXbwDTplA344CCgbfWdzIqCA",
    authDomain: "todo-cb771.firebaseapp.com",
    projectId: "todo-cb771",
    storageBucket: "todo-cb771.appspot.com",
    messagingSenderId: "1010003211805",
    appId: "1:1010003211805:web:fd1b66e00df25693f138f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;