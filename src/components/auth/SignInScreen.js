// Import FirebaseAuth and firebase.
import React, { useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, fetchUser } from '../../app/reducers/authSlice';
import { getRecentPosts } from '../../app/reducers/postSlice';
import { Redirect } from 'react-router-dom';
import { uiConfig } from '../../config/firebase';

function SignInScreen() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        dispatch(fetchUser());
        dispatch(getRecentPosts());
      });
    return () => unregisterAuthObserver();
    //eslint-disable-next-line
  }, []);

  if (!user) {
    return (
      <div>
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
