import React from 'react';
import PropTypes from 'prop-types';
import { Highlight } from 'react-instantsearch-dom';
import { AccordionDetails, Box, Paper, Typography } from '@material-ui/core';

const Solution = ({ hit, classes }) => {
  return (
    <AccordionDetails>
      <Box mx={1}>
        <Paper>
          <Typography>
            <span className={classes.spanHeader}> Solution: </span>
            <Highlight attribute='solution' hit={hit} />
          </Typography>
        </Paper>
      </Box>
    </AccordionDetails>
  );
};

Solution.propTypes = {
  hit: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default Solution;
