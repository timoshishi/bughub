import React, { useEffect } from 'react';
import searchClient from '../../config/algolia';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import BugAccordion from './BugAccordion';
import { Box, Grid } from '@material-ui/core';
import BugForm from '../Layout/BugForm';
import { useDispatch, useSelector } from 'react-redux';
import { selectRefresh, toggleRefresh } from '../../app/reducers/postSlice';

const SearchComponent = () => {
  const dispatch = useDispatch();
  const refresh = useSelector(selectRefresh);

  useEffect(() => {
    dispatch(toggleRefresh(false));
    // eslint-disable-next-line
  }, [refresh]);
  return (
    <Grid container justify='flex-start' spacing={2}>
      <InstantSearch
        searchClient={searchClient}
        indexName='posts'
        refresh={refresh}>
        <Grid container justify='flex-start'>
          <Box
            display='flex'
            alignItems='flex-end'
            justify='space-between'
            style={{ marginTop: '2rem' }}>
            <SearchBox />
            <BugForm />
          </Box>
          <Grid item mx={4} md={10}>
            <Hits hitComponent={BugAccordion} style={{ listStyle: 'none' }} />
          </Grid>
        </Grid>
      </InstantSearch>
    </Grid>
  );
};

export default SearchComponent;
