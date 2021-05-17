import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDTFUuw9108cjaPmZ2Yg-Fsx5n1bLergw8",
    authDomain: "disneyclone-ae770.firebaseapp.com",
    projectId: "disneyclone-ae770",
    storageBucket: "disneyclone-ae770.appspot.com",
    messagingSenderId: "832824101837",
    appId: "1:832824101837:web:c8c6a353cb658edabf1284",
    measurementId: "G-K45G5XZKH4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;