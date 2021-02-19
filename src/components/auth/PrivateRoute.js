import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../app/reducers/authSlice';
const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector(selectUser);
  return (
    <Route
      {...rest} //rest of the props that the component is receiving
      render={(
        props //
      ) => (!user ? <Redirect to='/signin' /> : <Component {...props} />)}
    />
  );
};

export default PrivateRoute;
