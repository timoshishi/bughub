import React from 'react';
import SignInScreen from '../Auth/SignInScreen';
import ladybug from '../../assets/ladybug.png';
import { makeStyles, Grid, Typography } from '@material-ui/core';
const useStyles = makeStyles({
  logo: {
    maxWidth: '5rem',
  },
  heading: {
    marginLeft: '1rem',
    fontWeight: '600',
  },
  container: {
    position: 'relative',
  },
  main: {
    position: 'absolute',
    top: '5rem',
  },
  sub: {
    marginTop: '1.5rem',
    marginBottom: '2rem',
    fontStyle: 'italic',
    fontWeight: '300',
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
        <Grid container justify='center' alignItems='center'>
          <img src={ladybug} alt='logo' className={classes.logo} />
          <Typography variant='h2' className={classes.heading}>
            Bughub
          </Typography>
        </Grid>
        <Grid container justify='center' m={6}>
          <Typography className={classes.sub} variant='h5'>
            Where bugs go to die
          </Typography>
        </Grid>
        <SignInScreen />
      </Grid>
    </Grid>
  );
};

export default Landing;
