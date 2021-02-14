import { Button } from '@material-ui/core';
import firebase from 'firebase/app';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAuthUser,
  setToken,
  selectUser,
} from '../../app/reducers/authSlice';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(Button);
const SignOutButton = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const signOut = () => {
    firebase.auth().signOut();
    dispatch(setAuthUser(null));
    dispatch(setToken(null));
  };
  return (
    <div>
      {user ? (
        <ColorButton
          onClick={signOut}
          variant='outlined'
          style={{ color: 'white' }}>
          Sign Out
        </ColorButton>
      ) : (
        <ColorButton disabled></ColorButton>
      )}
    </div>
  );
};

export default SignOutButton;
