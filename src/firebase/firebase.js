import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDDs-PdTBljwwjlI9Sz7hmSzr1w2cPiSs8",
  authDomain: "expensify-1634b.firebaseapp.com",
  databaseURL: "https://expensify-1634b.firebaseio.com",
  projectId: "expensify-1634b",
  storageBucket: "expensify-1634b.appspot.com",
  messagingSenderId: "1034405220425"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase,googleAuthProvider, database as default };
