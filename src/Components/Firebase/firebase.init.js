// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBLC-sJ63hqbLoriXOVJ30YQ_UdUTiWiQ",
  authDomain: "chef-hunter-8afba.firebaseapp.com",
  projectId: "chef-hunter-8afba",
  storageBucket: "chef-hunter-8afba.appspot.com",
  messagingSenderId: "151829924300",
  appId: "1:151829924300:web:307a360cbfbe1319d8b569"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;