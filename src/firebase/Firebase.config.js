// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6jW9Htk85uvfvxKxV0I-3Q_PWgnWMyiw",
  authDomain: "dragon-news-48c70.firebaseapp.com",
  projectId: "dragon-news-48c70",
  storageBucket: "dragon-news-48c70.firebasestorage.app",
  messagingSenderId: "1083412486018",
  appId: "1:1083412486018:web:17116d7fe641d49d6f219b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;