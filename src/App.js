import React, { useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import SignInScreen from './components/auth/SignInScreen';
import PrivateRoute from './components/auth/PrivateRoute';
import { fetchUser } from './app/reducers/authSlice';
import { getRecentPosts } from './app/reducers/postSlice';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import './App.css';

import Landing from './components/Landing/Landing';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(getRecentPosts());
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path='/signin' component={SignInScreen} />
        <PrivateRoute exact path='/' component={Landing} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
