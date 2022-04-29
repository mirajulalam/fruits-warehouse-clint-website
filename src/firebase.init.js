// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABjPELBqUd158s34rrVH9I1LR2kZaOOOE",
    authDomain: "fruits-warehouse-1e44f.firebaseapp.com",
    projectId: "fruits-warehouse-1e44f",
    storageBucket: "fruits-warehouse-1e44f.appspot.com",
    messagingSenderId: "313022709334",
    appId: "1:313022709334:web:ebec954580168cf1dbc5f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;