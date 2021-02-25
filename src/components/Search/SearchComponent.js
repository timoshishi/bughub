import React from 'react';
import searchClient from '../../config/algolia';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import Hit from './Hit';
import { Box, Grid } from '@material-ui/core';
import BugForm from '../Layout/BugForm';
const SearchComponent = (props) => {
  return (
    <Grid container justify='flex-start' spacing={2}>
      <InstantSearch searchClient={searchClient} indexName='posts'>
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
            <Hits hitComponent={Hit} style={{ listStyle: 'none' }} />
          </Grid>
        </Grid>
      </InstantSearch>
    </Grid>
  );
};

export default SearchComponent;
