import { createSlice } from '@reduxjs/toolkit';
import firebase from 'firebase';
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      // const currentUser = action.payload;
      // if (!currentUser) {
      //   state.user = currentUser;
      // } else {
      //   const user = {
      //     name: currentUser.displayName,
      //     email: currentUser.email,
      //     photoUrl: currentUser.photoUrl,
      //     emailVerified: currentUser.email,
      //     uid: currentUser.uid,
      //   };
      //   state.user = user;
      // }
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setUser, setToken } = authSlice.actions;

export const fetchUser = (state) => async (dispatch) => {
  try {
    const currentUser = await firebase.auth().currentUser;
    const token = await firebase.auth().currentUser.getIdToken();
    if (!!currentUser) {
      const user = {
        name: currentUser.displayName,
        email: currentUser.email,
        photoUrl: currentUser.photoUrl,
        emailVerified: currentUser.email,
        uid: currentUser.uid,
      };
      dispatch(setUser(user));
    }
    if (!!token) {
      dispatch(setToken(token));
    }
  } catch (err) {
    console.error(err);
  }
};

export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
