import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyDo6EFkXr3I-KCPkViIdEy9y9prWaDtcwg",
  authDomain: "bazak-eshop.firebaseapp.com",
  projectId: "bazak-eshop",
  storageBucket: "bazak-eshop.appspot.com",
  messagingSenderId: "170623097390",
  appId: "1:170623097390:web:af9c8a2c9bde0b7b155dbf",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
