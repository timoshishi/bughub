import PropTypes from 'prop-types';
import { Highlight } from 'react-instantsearch-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    listStyle: 'none',
    marginTop: theme.spacing(1),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  spanHeader: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
  },
  accordionSummary: {
    height: '4rem',
  },
}));

const Hit = ({ hit }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
          className={classes.accordionSummary}>
          <Typography className={classes.heading}>
            <Highlight attribute='summary' hit={hit} />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className={classes.spanHeader}> Summary: </span>
            <Highlight attribute='body' hit={hit} />
          </Typography>
          {hit.bug.length ? (
            <Typography>
              <span className={classes.spanHeader}> Bugs: </span>
              <Highlight attribute='bug' hit={hit} />
            </Typography>
          ) : null}
        </AccordionDetails>
        <Box mx={2}>
          <Typography>
            <span className={classes.spanHeader}> Solution: </span>
            <Highlight attribute='solution' hit={hit} />
          </Typography>
        </Box>
      </Accordion>
    </div>
  );
};

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Hit;
