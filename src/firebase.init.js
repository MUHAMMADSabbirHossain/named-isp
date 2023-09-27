// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXJAT_NprqbOA2u9knv2zsnihlFjpxdyI",
    authDomain: "named-isp.firebaseapp.com",
    projectId: "named-isp",
    storageBucket: "named-isp.appspot.com",
    messagingSenderId: "418844617462",
    appId: "1:418844617462:web:78a7b3cda1b23507dadad7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;