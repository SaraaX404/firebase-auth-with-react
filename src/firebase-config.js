import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import 'firebase/compat/auth';



//create an env file end create those variables

 const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain:process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};
//initialize app
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const gProvider = new firebase.auth.GoogleAuthProvider();
export const fProvider = new firebase.auth.FacebookAuthProvider()