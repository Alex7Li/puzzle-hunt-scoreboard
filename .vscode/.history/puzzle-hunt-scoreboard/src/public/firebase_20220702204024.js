import { initializeApp } from 'firebase-admin/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
const firebase = require('firebase');
const firebaseui = require('firebaseui');

import dotenv from 'dotenv'
dotenv.config()
firebase.auth.getcurrentuser()

const firebaseConfig = {
  apiKey: process.env.firebase_api_key,
  authDomain: "cmu-puzzle-hunt.firebaseapp.com",
  databaseURL: "https://cmu-puzzle-hunt-default-rtdb.firebaseio.com",
  projectId: "cmu-puzzle-hunt",
  storageBucket: "cmu-puzzle-hunt.appspot.com",
  messagingSenderId: "787680941875",
  appId: "1:787680941875:web:dd6656f38c9d24b6cdd046",
  //credential: admin.credential.cert(serviceAccount),
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
firebase.database().ref('users/' + firebase.auth().currentUser.uid)

export { db }