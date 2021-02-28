import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, IconButton, AccordionDetails } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import Bug from './Bug';
import ScreenShots from './ScreenShots';
import Solution from './Solution';
import SummaryBody from './SummaryBody';
import BugSummary from './BugSummary';

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

const BugAccordion = ({ hit }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Accordion>
        <BugSummary classes={classes} hit={hit} />
        <AccordionDetails>
          <SummaryBody classes={classes} hit={hit} />
          {hit.bug.length ? <Bug classes={classes} hit={hit} /> : null}
        </AccordionDetails>
        <Solution hit={hit} classes={classes} />
        <ScreenShots hit={hit} />
        <IconButton>
          <Edit />
        </IconButton>
      </Accordion>
    </div>
  );
};

BugAccordion.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default BugAccordion;
