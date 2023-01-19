import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBElW6Pv_AyB7B_velaFzoOLwpbZn9CD7A",
  authDomain: "loginlive-34e36.firebaseapp.com",
  projectId: "loginlive-34e36",
  storageBucket: "loginlive-34e36.appspot.com",
  messagingSenderId: "788313389546",
  appId: "1:788313389546:web:ba9ae7f4025fea24c79a93",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
