// Import the functions you need from the SDKs you need

  
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJHUIfulE-WbODAYqfNh5iTeU2cLDdz5I",
  authDomain: "bosm23-e7b78.firebaseapp.com",
  projectId: "bosm23-e7b78",
  storageBucket: "bosm23-e7b78.appspot.com",
  messagingSenderId: "915516325620",
  appId: "1:915516325620:web:18b1a1519e3282b8d3e8a1",
  measurementId: "G-2YGR1BM85W"
};

// Initialize Firebase
let storage;
if (typeof window !== "undefined") {
  const app = initializeApp(firebaseConfig);
  storage = getStorage(app);

}
export {storage};