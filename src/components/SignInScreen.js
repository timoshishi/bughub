// Import FirebaseAuth and firebase.
import React, { useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

import { useDispatch, useSelector } from 'react-redux';
import { setUser, setToken, selectUser } from '../app/reducers/authSlice';
import { Redirect } from 'react-router-dom';

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    // signInSuccessWithAuthResult: () => false,
  },
  signInSuccessUrl: '/',
};

function SignInScreen() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        const currentUser = firebase.auth().currentUser;
        if (currentUser) {
          const token = firebase.auth().currentUser.getIdToken();
          const {
            displayName,
            email,
            photoURL,
            emailVerified,
            uid,
          } = currentUser;
          dispatch(setToken(token.i));
          dispatch(
            setUser({ displayName, email, photoURL, emailVerified, uid })
          );
        } else {
          dispatch(setToken(null));
          dispatch(setUser(currentUser));
        }
      });
    return () => unregisterAuthObserver();
    //eslint-disable-next-line
  }, []);

  if (!user) {
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }
  return <Redirect to='/' />;
}

export default SignInScreen;
