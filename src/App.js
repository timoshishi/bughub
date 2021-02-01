import React, { useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import CounterApp from './views/CounterApp';
import SignInScreen from './components/auth/SignInScreen';
import PrivateRoute from './components/auth/PrivateRoute';
import { fetchUser } from './app/reducers/authSlice';
import { getRecentPosts } from './app/reducers/postSlice';
import { useDispatch } from 'react-redux';
import PostForm from './components/postForm/PostForm';
import Navbar from './components/Navbar/Navbar';
import SearchComponent from './components/Search/SearchComponent';
import './App.css';
const App = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(getRecentPosts());
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <Navbar />
      <PostForm />
      <SearchComponent />
      <Switch>
        <Route exact path='/signin' component={SignInScreen} />
        <PrivateRoute exact path='/' component={CounterApp} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
