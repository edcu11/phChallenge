import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCLD0aZyzzUG8WmIQDnWo8xYOP3Q5JT4ls",
  authDomain: "phdb-6c73a.firebaseapp.com",
  databaseURL: "https://phdb-6c73a.firebaseio.com",
  projectId: "phdb-6c73a",
  storageBucket: "phdb-6c73a.appspot.com",
  messagingSenderId: "1058325984461",
  appId: "1:1058325984461:web:80605d035c1f1c1d"
};


firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
