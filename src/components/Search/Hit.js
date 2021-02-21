import PropTypes from 'prop-types';
import { Highlight } from 'react-instantsearch-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Paper,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Screenshot from './Screenshot';
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
          <Box mx={1}>
            <Paper>
              <Typography>
                <span className={classes.spanHeader}> Summary: </span>
                <Highlight attribute='body' hit={hit} />
              </Typography>
            </Paper>
          </Box>
          {hit.bug.length ? (
            <Box mx={1}>
              <Paper>
                <Typography>
                  <span className={classes.spanHeader}> Bugs: </span>
                  <Highlight attribute='bug' hit={hit} />
                </Typography>
              </Paper>
            </Box>
          ) : null}
        </AccordionDetails>
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
        <AccordionDetails>
          <Paper>
            <Typography>
              {hit.imageUrls.length
                ? hit.imageUrls.map((url) => (
                    <Screenshot url={url} key={Math.random()} />
                  ))
                : null}
            </Typography>
          </Paper>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Hit;
