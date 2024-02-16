
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBpuu6DU_xcvpFFrSJJiTUUfmh4C5AZgcI",
    authDomain: "proyecto-final-react-js-santiv.firebaseapp.com",
    projectId: "proyecto-final-react-js-santiv",
    storageBucket: "proyecto-final-react-js-santiv.appspot.com",
    messagingSenderId: "978043549602",
    appId: "1:978043549602:web:d2f65ca11cae2582fbe4fb"
};


initializeApp(firebaseConfig);

const db = getFirestore()

export default db