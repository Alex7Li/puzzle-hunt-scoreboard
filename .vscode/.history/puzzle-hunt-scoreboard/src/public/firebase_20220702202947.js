
import * as admin from 'firebase-admin'
import { initializeApp } from 'firebase-admin/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import dotenv from 'dotenv'
dotenv.config()
const serviceAccount = require(evn.path_to_service_account_key);


const firebaseConfig = {
  apiKey: process.env.firebase_api_key,
  authDomain: "cmu-puzzle-hunt.firebaseapp.com",
  databaseURL: "https://cmu-puzzle-hunt-default-rtdb.firebaseio.com",
  projectId: "cmu-puzzle-hunt",
  storageBucket: "cmu-puzzle-hunt.appspot.com",
  messagingSenderId: "787680941875",
  appId: "1:787680941875:web:dd6656f38c9d24b6cdd046",
  credential: admin.credential.cert(serviceAccount),
};
console.log(firebaseConfig)

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }