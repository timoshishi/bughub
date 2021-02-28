import React from 'react';
import PropTypes from 'prop-types';

const ScreenShot = ({ url }) => {
  return (
    <>
      <img
        src={url}
        style={{ maxHeight: '8rem', margin: '1rem' }}
        alt='bug screenShot'
      />
    </>
  );
};

ScreenShot.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ScreenShot;
