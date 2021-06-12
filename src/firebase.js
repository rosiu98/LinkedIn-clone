import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyABGSudrZsUY4yNcbtEhC7RttL7Z4dM7H0",
  authDomain: "linked-in-b93dd.firebaseapp.com",
  projectId: "linked-in-b93dd",
  storageBucket: "linked-in-b93dd.appspot.com",
  messagingSenderId: "112336282924",
  appId: "1:112336282924:web:9ea6b30647dd44b6557889"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};

