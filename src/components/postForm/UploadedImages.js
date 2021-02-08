import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  thumbnail: {
    maxWidth: '30rem',
    marginTop: '0.5rem',
    '&:hover': {
      cursor: 'pointer',
    },
  },
});
const UploadedImages = ({ imageUrls, setImageUrls }) => {
  const classes = useStyles();
  const removeImage = (currentUrl) => {
    const filtered = imageUrls.filter((url) => url !== currentUrl);
    setImageUrls(filtered);
  };
  return (
    <Grid
      container
      spacing={2}
      display='flex'
      flexWrap='wrap'
      justifyContent='center'
      alignContent='space-around'
      className={classes.thumbnail}>
      {imageUrls.map((url) => (
        <Grid item>
          <Badge
            badgeContent='x'
            color='secondary'
            onClick={() => removeImage(url)}>
            <img
              src={url}
              style={{ maxWidth: '8rem', border: '1px solid #aba4a4' }}
            />
          </Badge>
        </Grid>
      ))}
    </Grid>
  );
};

UploadedImages.propTypes = {
  imageUrls: PropTypes.array.isRequired,
  setImageUrls: PropTypes.func.isRequired,
};

export default UploadedImages;
