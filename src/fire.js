import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBaoVlAlKHVzcvEZWC1_mD15s495uaS1TA",
  authDomain: "emailtest-a1a60.firebaseapp.com",
  projectId: "emailtest-a1a60",
  storageBucket: "emailtest-a1a60.appspot.com",
  messagingSenderId: "162933415167",
  appId: "1:162933415167:web:9b8c60f5a27295b91440ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
