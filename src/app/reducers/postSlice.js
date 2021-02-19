import { createSlice } from '@reduxjs/toolkit';
import firebase from 'firebase/app';
import { db } from '../../config/firebase';

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
  },
  reducers: {
    setPosts: (state, action) => {
      return {
        ...state,
        posts: action.payload,
      };
    },
  },
});
export const { setPosts } = postSlice.actions;

export const getRecentPosts = (state) => async (dispatch) => {
  const postsRef = db.collection('posts');
  const snapshot = await postsRef.get();

  const posts = await snapshot.docs.map((doc, i) => {
    const dataObj = doc.data();
    const created = dataObj.created;
    return {
      ...dataObj,
      created,
    };
  });
  dispatch(setPosts(posts));
  // console.log(state.posts);
  //   postsRef.get().then((querySnapshot) => {
  //   querySnapshot.forEach((doc) => console.log('data', doc.data()));
  // });
};
export const createPost = (postData) => async (dispatch) => {
  try {
    console.log({ postData });
    const postsRef = db.collection('posts');
    postsRef.set({
      ...postData,
      created: firebase.firestore.Timestamp.now(),
    });
  } catch (err) {}
};

export default postSlice.reducer;
