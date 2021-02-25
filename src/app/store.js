import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';
import postReducer from './reducers/postSlice';

export default configureStore({
  reducer: {
    // counter: counterReducer,
    auth: authReducer,
    post: postReducer,
  },
});
