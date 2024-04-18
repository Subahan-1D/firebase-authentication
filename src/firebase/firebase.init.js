// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY0s4XsFnI-HgMbDo5g6uvHvpRfZTj3mI",
  authDomain: "fir-authentication-470b3.firebaseapp.com",
  projectId: "fir-authentication-470b3",
  storageBucket: "fir-authentication-470b3.appspot.com",
  messagingSenderId: "333326530843",
  appId: "1:333326530843:web:9765ff64718e77d4f2fbbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
