import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// PLEASE DON'T READ THE DATABASE TO TRY AND SOLVE THE CLUES
// IT IS NOT WORTH IT FOR ME TO SPEND 10 HOURS TRYING TO
// IMPROVE SECURITY TO THE POINT WHERE YOU CANNOT HACK IT IN 2 HOURS.
// If you think that it's terrible for such a
// contest to have shitty security, please just submit
// a pull request to the github. If you have an uncontrollable
// urge to hack the website, do it after the contest.
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
const db = getDatabase(app);

export { db }