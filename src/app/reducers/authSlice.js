import { createSlice } from '@reduxjs/toolkit';
import firebase from 'firebase/app';
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setUser: (state, action) => {
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

export const { setUser, setToken } = authSlice.actions;

export const fetchUser = (state) => async (dispatch) => {
  const currentUser = await firebase.auth().currentUser;
  try {
    if (currentUser) {
      const token = await firebase.auth().currentUser.getIdToken();
      const { displayName, email, photoURL, emailVerified, uid } = currentUser;
      dispatch(setUser({ displayName, email, photoURL, emailVerified, uid }));
      dispatch(setToken(token));
    } else {
      dispatch(setToken(null));
      dispatch(setUser(currentUser));
    }
  } catch (err) {
    console.error(err);
  }
};

export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export default authSlice.reducer;
