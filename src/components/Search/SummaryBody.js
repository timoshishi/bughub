import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Paper } from '@material-ui/core';
import { Highlight } from 'react-instantsearch-dom';

const SummaryBody = ({ classes, hit }) => {
  return (
    <Box mx={1}>
      <Paper>
        <Typography>
          <span className={classes.spanHeader}> SummaryBody: </span>
          <Highlight attribute='body' hit={hit} />
        </Typography>
      </Paper>
    </Box>
  );
};

SummaryBody.propTypes = {
  hit: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default SummaryBody;
