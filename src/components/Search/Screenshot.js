import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

const Screenshot = ({ url }) => {
  console.log(url);
  return (
    <>
      <img
        src={url}
        style={{ maxHeight: '8rem', margin: '1rem' }}
        alt='bug screenshot'
      />
    </>
  );
};

Screenshot.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Screenshot;
