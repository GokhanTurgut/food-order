import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCttiGqc8V7g8RC0ZVHuqfcO-NXK2_OX6g",
  authDomain: "food-app-8e47b.firebaseapp.com",
  databaseURL:
    "https://food-app-8e47b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "food-app-8e47b",
  storageBucket: "food-app-8e47b.appspot.com",
  messagingSenderId: "819035052152",
  appId: "1:819035052152:web:b22e92dac20cbefea5358d",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export async function googleSignIn() {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    return {
      credential,
      token,
      user,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    return {
      errorCode,
      errorMessage,
      email,
      credential,
    };
  }
}
export async function googleSignOut() {
  try {
    const result = await signOut(auth);
    return result;
  } catch (error) {
    return error;
  }
}

export function authStateChecker(callback) {
  onAuthStateChanged(auth, callback);
}
