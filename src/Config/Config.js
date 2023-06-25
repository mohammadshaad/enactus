import * as firebase from "firebase";

import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyDGmVBx5LAYJuIq_Ni1nZBenfcVUFX-SyY",
//     authDomain: "ecommerce-with-react-2ac06.firebaseapp.com",
//     databaseURL: "https://ecommerce-with-react-2ac06.firebaseio.com",
//     projectId: "ecommerce-with-react-2ac06",
//     storageBucket: "ecommerce-with-react-2ac06.appspot.com",
//     messagingSenderId: "690603499200",
//     appId: "1:690603499200:web:09860bc318b5b7fd74d725",
//     measurementId: "G-88N35MC51Q"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCWt5sgt3WvQ4GjEiOezyZrK13ODaSYPaQ",
  authDomain: "enactus-ecommerce-e840f.firebaseapp.com",
  databaseURL: "https://enactus-ecommerce.firebaseio.com",
  projectId: "enactus-ecommerce-e840f",
  storageBucket: "enactus-ecommerce-e840f.appspot.com",
  messagingSenderId: "1050946403575",
  appId: "1:1050946403575:web:501c9e8be00165d5aca7f2",
  measurementId: "G-F9JF3VY4R2",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
