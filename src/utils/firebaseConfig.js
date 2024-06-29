import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbbNSV8-edDd3pEztEbpYFcy7t4UPPQ7M",
  authDomain: "netflixgpt-a4086.firebaseapp.com",
  projectId: "netflixgpt-a4086",
  storageBucket: "netflixgpt-a4086.appspot.com",
  messagingSenderId: "120793733800",
  appId: "1:120793733800:web:65ea6227b00f64a653c09d",
  measurementId: "G-1JJQ2QL8WC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();