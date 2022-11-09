// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHvb4l0v4sAVyA8hDe3UVZp03ehzBmpIg",
    authDomain: "trusted-graphy.firebaseapp.com",
    projectId: "trusted-graphy",
    storageBucket: "trusted-graphy.appspot.com",
    messagingSenderId: "1075731353872",
    appId: "1:1075731353872:web:f1f0d6b2b36e1edc11d595"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;