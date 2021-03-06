import firebase from 'firebase/app';
import 'firebase/auth';
require('firebase/firestore');
require('firebase/analytics');
const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,
  REACT_APP_FIREBASE_MEASUREMENT_ID,
} = process.env;
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: 'hd-bughub.firebaseapp.com',
  projectId: 'hd-bughub',
  storageBucket: 'timoshishi-bughub',
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
  measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID,
  callbacks: {
    beforeSignInSuccess: (user) => {
      console.log('HELLO', user);
    },
  },
};

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
  //redirect on success (using react-router Redirect instead)
  // signInSuccessUrl: '/',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
//firestore db instance
const db = firebase.firestore();
// const storage = firebase.storage();
export { firebaseConfig, uiConfig, db };
