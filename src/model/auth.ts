
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1UklvQvrU3uAKTXHZwsrBt5-sil26YxU",
  authDomain: "olya-blog-4bfdb.firebaseapp.com",
  projectId: "olya-blog-4bfdb",
  storageBucket: "olya-blog-4bfdb.appspot.com",
  messagingSenderId: "197459135971",
  appId: "1:197459135971:web:650c42f9af6423e107a4d6",
  measurementId: "G-N3WY450503"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);