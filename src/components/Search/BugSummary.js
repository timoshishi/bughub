import React from 'react';
import PropTypes from 'prop-types';
import { AccordionSummary, Typography } from '@material-ui/core';
import { Highlight } from 'react-instantsearch-dom';
import { ExpandMore } from '@material-ui/icons';

const BugSummary = ({ classes, hit }) => {
  return (
    <AccordionSummary
      expandIcon={<ExpandMore />}
      aria-controls='panel1a-content'
      id='panel1a-header'
      className={classes.accordionSummary}>
      <Typography className={classes.heading}>
        <Highlight attribute='summary' hit={hit} />
      </Typography>
    </AccordionSummary>
  );
};

BugSummary.propTypes = {
  classes: PropTypes.object.isRequired,
  hit: PropTypes.object.isRequired,
};

export default BugSummary;
