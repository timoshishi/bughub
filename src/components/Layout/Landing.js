import React from 'react';
import SignInScreen from '../Auth/SignInScreen';
import ladybug from '../../assets/ladybug.png';
import { makeStyles, Grid, Typography } from '@material-ui/core';
const useStyles = makeStyles({
  logo: {
    maxWidth: '15%',
  },
  heading: {
    marginLeft: '1rem',
  },
  container: {
    position: 'relative',
  },
  main: {
    position: 'absolute',
    top: '5rem',
  },
});
const Landing = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems='center'
      justify='center'
      spacing={8}
      className={classes.container}>
      <Grid item className={classes.main}>
        <Grid container justify='center' alignItems='center' m={8} my={8}>
          <img src={ladybug} alt='logo' className={classes.logo} />
          <Typography variant='h1' className={classes.heading}>
            Bughub
          </Typography>
        </Grid>
        <SignInScreen />
      </Grid>
    </Grid>
  );
};

export default Landing;
