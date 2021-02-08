import React from 'react';
import searchClient from '../../config/algolia';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import Hit from './Hit';
import { Grid, Paper, Typography } from '@material-ui/core';
const SearchComponent = (props) => {
  return (
    <Grid container justify='center' spacing={2}>
      <InstantSearch searchClient={searchClient} indexName='posts'>
        <SearchBox />
        <Grid item mx={2} md={8}>
          <Hits hitComponent={Hit} style={{ listStyle: 'none' }} />
        </Grid>
      </InstantSearch>
    </Grid>
  );
};
// function Hit({ hit }) {
//   console.log(hit);
//   return (
//     <Highlight attribute='body' hit={hit} />);
// }

export default SearchComponent;
