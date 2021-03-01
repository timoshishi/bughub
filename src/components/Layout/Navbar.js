import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import useStyles from './navStyles.js';
import SignOutButton from '../Auth/SignOutButton.js';

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography className={classes.title} variant='h6' noWrap>
            Bughub
          </Typography>
          <SignOutButton variant='outlined' />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
