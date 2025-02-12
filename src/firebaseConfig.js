// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAguOUlxT1BaMhUa5X8_Kg6rpWR8Ddl25A",
    authDomain: "cursinhoherbert-9ac75.firebaseapp.com",
    databaseURL: "https://cursinhoherbert-9ac75-default-rtdb.firebaseio.com",
    projectId: "cursinhoherbert-9ac75",
    storageBucket: "cursinhoherbert-9ac75.appspot.com",
    messagingSenderId: "474772741725",
    appId: "1:474772741725:web:a5c48a7166b16e783437b4",
    measurementId: "G-JXPN7P3QY1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { analytics, db };
