import { createSlice } from '@reduxjs/toolkit';
import firebase from 'firebase/app';
import { db } from '../../config/firebase';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setAuthUser: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    setToken: (state, action) => {
      return {
        ...state,
        token: action.payload,
      };
    },
  },
});

export const { setAuthUser, setToken } = authSlice.actions;

export const fetchUser = (state) => async (dispatch) => {
  const currentUser = await firebase.auth().currentUser;
  try {
    if (currentUser) {
      const token = await firebase.auth().currentUser.getIdToken();
      const { displayName, email, photoURL, emailVerified, uid } = currentUser;
      const userObj = { displayName, email, photoURL, emailVerified, uid };
      dispatch(setAuthUser(userObj));
      dispatch(setToken(token));
      findOrCreateUser(userObj);
    } else {
      dispatch(setToken(null));
      dispatch(setAuthUser(currentUser));
    }
  } catch (err) {
    console.error(err);
  }
};
const findOrCreateUser = async (user) => {
  const userRef = db.collection('users').doc(user.uid);
  userRef
    .get()
    .then((doc) => {
      if (!doc.exists) {
        db.collection('users').doc(user.uid).set({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          emailVerified: user.emailVerified,
          posts: [],
          uid: user.uid,
          created: firebase.firestore.Timestamp.now(),
        });
      }
    })
    .catch((err) => console.error('error getting docs', err));
};

export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export default authSlice.reducer;
