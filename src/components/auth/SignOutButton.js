import React from 'react';
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';

import { setUser, setToken, selectUser } from '../../app/reducers/authSlice';
const SignOutButton = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const signOut = () => {
    firebase.auth().signOut();
    dispatch(setUser(null));
    dispatch(setToken(null));
  };
  return <div>{user && <button onClick={signOut}>Sign Out</button>}</div>;
};

SignOutButton.propTypes = {};

export default SignOutButton;
