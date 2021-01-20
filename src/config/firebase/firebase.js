import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD6amAAIpu_lAXsloXgYa0HfKUf-HjYfBs",
  authDomain: "computerassembly-972aa.firebaseapp.com",
  projectId: "computerassembly-972aa",
  storageBucket: "computerassembly-972aa.appspot.com",
  messagingSenderId: "581966174478",
  appId: "1:581966174478:web:8ca35b2429f7b745771f5f",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
