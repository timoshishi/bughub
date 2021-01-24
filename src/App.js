import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import CounterApp from './views/CounterApp';
import SignInScreen from './components/SignInScreen';
import PrivateRoute from './components/auth/PrivateRoute';
import SignOutButton from './components/auth/SignOutButton';
const App = (props) => {
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
