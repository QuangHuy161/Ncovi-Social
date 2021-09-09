import { initializeApp } from '../firebase/app'
import { getFirestore, collection, getDoc, getDocs } from '../firebase/firestore'

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDyANMdWKIXdgP0qRutnAq8G4mOU_k75-E",
    authDomain: "covid-test-fbfda.firebaseapp.com",
    projectId: "covid-test-fbfda",
    storageBucket: "covid-test-fbfda.appspot.com",
    messagingSenderId: "471597847358",
    appId: "1:471597847358:web:42d48b24cd6403b8ded26f",
    measurementId: "G-FD0J6WVTRQ"
});

const db = getFirestore(firebaseApp);

console.log(db)