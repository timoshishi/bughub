import { createSlice } from '@reduxjs/toolkit';
import firebase from 'firebase/app';
import { db } from '../../config/firebase';

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    currentBug: null,
    refresh: false,
  },
  reducers: {
    setPosts: (state, action) => {
      return {
        ...state,
        posts: action.payload,
      };
    },
    setCurrentBug: (state, action) => {
      return {
        ...state,
        currentBug: action.payload,
      };
    },
    clearCurrentBug: (state, action) => {
      return {
        ...state,
        currentBug: null,
      };
    },
    toggleRefresh: (state, action) => {
      return {
        ...state,
        refresh: action.payload,
      };
    },
  },
});

export const {
  setPosts,
  setCurrentBug,
  clearCurrentBug,
  toggleRefresh,
} = postSlice.actions;
export const selectCurrentBug = (state) => state.post.currentBug;
export const selectRefresh = (state) => state.post.refresh;

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
};
// export const createPost = (postData) => async (dispatch) => {
//   try {
//     console.log({ postData });
//     const postsRef = db.collection('posts');
//     postsRef.set({
//       ...postData,
//       created: firebase.firestore.Timestamp.now(),
//     });
//   } catch (err) {
//     console.error('createPost', err);
//   }
// };

// export const updatePost = (postData, docId) => async (dispatch) => {
//   try {
//     db.collection('posts')
//       .doc(docId)
//       .set({
//         ...postData,
//         updated: firebase.firestore.Timestamp.now(),
//       });
//   } catch (err) {
//     console.error('updatePost', err);
//   }
// };

export default postSlice.reducer;
