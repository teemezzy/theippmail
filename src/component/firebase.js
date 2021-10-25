
import firebase from 'firebase/app';
import "firebase/database";

const firebaseConfig = {
  apiKey: 'AIzaSyBKrTFms151ZLdt8NmMrxssclY0HEFvloY',
  authDomain: 'theippmail-7e910.firebaseapp.com',
  projectId: 'theippmail-7e910',
  storageBucket: 'theippmail-7e910.appspot.com',
  messagingSenderId: '838661241421',
  appId: '1:838661241421:web:0c8fec9de4a3d9ab6ffa04',
}

// Initialize Firebase Database
const firebasedb = firebase.initializeApp(firebaseConfig);

export default firebasedb.database.ref();
