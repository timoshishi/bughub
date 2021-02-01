import React from 'react';
import searchClient from '../../config/algolia';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import Hit from './Hit';
const SearchComponent = (props) => {
  return (
    <div>
      <h3>search component</h3>
      <InstantSearch searchClient={searchClient} indexName='posts'>
        <SearchBox />
        <Hits hitComponent={Hit} style={{ listStyle: 'none' }} />
      </InstantSearch>
    </div>
  );
};
// function Hit({ hit }) {
//   console.log(hit);
//   return (
//     <Highlight attribute='body' hit={hit} />);
// }

export default SearchComponent;
