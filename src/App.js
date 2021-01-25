import React, { useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import CounterApp from './views/CounterApp';
import SignInScreen from './components/auth/SignInScreen';
import PrivateRoute from './components/auth/PrivateRoute';
import SignOutButton from './components/auth/SignOutButton';
import { fetchUser } from './app/reducers/authSlice';
import { useDispatch } from 'react-redux';

const App = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <SignOutButton />
      <Switch>
        <Route exact path='/signin' component={SignInScreen} />
        <PrivateRoute exact path='/' component={CounterApp} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
