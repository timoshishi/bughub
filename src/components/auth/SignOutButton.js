import firebase from 'firebase/app';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAuthUser,
  setToken,
  selectUser,
} from '../../app/reducers/authSlice';

const SignOutButton = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const signOut = () => {
    firebase.auth().signOut();
    dispatch(setAuthUser(null));
    dispatch(setToken(null));
  };
  return <div>{user && <button onClick={signOut}>Sign Out</button>}</div>;
};

export default SignOutButton;
