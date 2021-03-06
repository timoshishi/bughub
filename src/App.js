import React, { useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import Landing from './components/Layout/Landing';
import PrivateRoute from './components/Auth/PrivateRoute';
import { fetchUser } from './app/reducers/authSlice';
import { getRecentPosts } from './app/reducers/postSlice';
import { useDispatch } from 'react-redux';
import Navbar from './components/Layout/Navbar';
import './App.css';

import Home from './components/Layout/Home';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/signin' component={Landing} />
        <PrivateRoute exact path='/' component={Home} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
