import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_0PvvLl9N_DuySePRAg2Lk6Yg22D159g",
  authDomain: "everafterinvite-495bc.firebaseapp.com",
  projectId: "everafterinvite-495bc",
  storageBucket: "everafterinvite-495bc.firebasestorage.app",
  messagingSenderId: "585913404990",
  appId: "1:585913404990:web:6391374da57c0cf48a4b6f",
  measurementId: "G-FLEF67KGY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
