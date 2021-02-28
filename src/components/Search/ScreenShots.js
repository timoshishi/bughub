import React from 'react';
import PropTypes from 'prop-types';
import ScreenShot from './ScreenShot';
import { AccordionDetails, Paper, Typography } from '@material-ui/core';

const ScreenShots = ({ hit }) => {
  return (
    <AccordionDetails>
      {/* ScreenShots */}
      <Paper>
        <Typography>
          {hit.imageUrls.length
            ? hit.imageUrls.map((url) => (
                <ScreenShot url={url} key={Math.random()} />
              ))
            : null}
        </Typography>
      </Paper>
    </AccordionDetails>
  );
};

ScreenShots.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default ScreenShots;
