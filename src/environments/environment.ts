// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_LgNIQfjApxc1Y8rEeZWyqOCpftZJaRA",
  authDomain: "crosschatanalytics.firebaseapp.com",
  projectId: "crosschatanalytics",
  storageBucket: "crosschatanalytics.appspot.com",
  messagingSenderId: "376775926748",
  appId: "1:376775926748:web:887ebee019fd8c966a6519",
  measurementId: "G-F4Y1YV801B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);