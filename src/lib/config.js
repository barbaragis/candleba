
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCvbgn6iu5dfSsIF4IuGK1XjxgLN2S9ocw",
  authDomain: "candleba-f5085.firebaseapp.com",
  projectId: "candleba-f5085",
  storageBucket: "candleba-f5085.appspot.com",
  messagingSenderId: "798130854191",
  appId: "1:798130854191:web:7f8a166ca67b6e1bf869da"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);