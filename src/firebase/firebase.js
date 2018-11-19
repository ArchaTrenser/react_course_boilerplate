import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBz84XYyKYVFxZTGX6Q0kqCyHNapsSIxK8",
  authDomain: "myblog-35e15.firebaseapp.com",
  databaseURL: "https://myblog-35e15.firebaseio.com",
  projectId: "myblog-35e15",
  storageBucket: "",
  messagingSenderId: "660068464177"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase,googleAuthProvider, database as default };
