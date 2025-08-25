import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3y6k6u1l2q9QjXo3K6m8U9e7rT5v4w1y",
  authDomain: "scissor-12345.firebaseapp.com",
  projectId: "scissor-12345",
  storageBucket: "scissor-12345.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
