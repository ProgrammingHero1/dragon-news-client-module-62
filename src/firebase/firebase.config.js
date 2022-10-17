// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3PJQS_EMD2NkkXx-pdDrxNo_PoyYRvDw",
  authDomain: "dragon-news.firebaseapp.com",
  projectId: "dragon-news",
  storageBucket: "dragon-news.appspot.com",
  messagingSenderId: "876854094124",
  appId: "1:876854094124:web:3c64c71943daa95ae1e489"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;