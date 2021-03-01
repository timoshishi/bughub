import React from 'react';
import PropTypes from 'prop-types';
import { Box, Paper, Typography } from '@material-ui/core';
import { Highlight } from 'react-instantsearch-dom';

const Bug = ({ hit, classes }) => {
  return (
    <Box mx={1}>
      {/* Bugs */}
      <Paper>
        <Typography>
          <span className={classes.spanHeader}> Bugs: </span>
          <Highlight attribute='bug' hit={hit} />
        </Typography>
      </Paper>
    </Box>
  );
};

Bug.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Bug;
