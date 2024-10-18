import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDl_89KusfnLReQmhjX10BYZDX_GAFtvpI",
  authDomain: "blog-nextjs-81bae.firebaseapp.com",
  projectId: "blog-nextjs-81bae",
  storageBucket: "blog-nextjs-81bae.appspot.com",
  messagingSenderId: "406184116688",
  appId: "1:406184116688:web:6e5b4b59d80ad4eb3d79d5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);