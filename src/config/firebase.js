import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "",
  authDomain: "cdemzy-portfolio.firebaseapp.com",
  projectId: "cdemzy-portfolio",
  storageBucket: "cdemzy-portfolio.appspot.com",
  messagingSenderId: "649297458779",
  appId: "1:649297458779:web:398e2655411c535ef2b17e"
};

const app = initializeApp(firebaseConfig);

export { app };
