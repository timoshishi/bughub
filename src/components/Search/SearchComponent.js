import React from 'react';
import PropTypes from 'prop-types';
import searchClient from '../../config/algolia';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
} from 'react-instantsearch-dom';

const SearchComponent = (props) => {
  return (
    <div>
      <h3>search component</h3>
      <InstantSearch searchClient={searchClient} indexName='posts'>
        <SearchBox />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </div>
  );
};
function Hit({ hit }) {
  console.log(hit);
  return <Highlight attribute='body' hit={hit} />;
  // return (
  //   <div>
  //     <img src={props.hit.image} align='left' alt={props.hit.name} />
  //     <div className='hit-name'>
  //       <Highlight attribute='name' hit={props.hit} />
  //     </div>
  //     <div className='hit-description'>
  //       <Highlight attribute='description' hit={props.hit} />
  //     </div>
  //     <div className='hit-price'>${props.hit.price}</div>
  //   </div>
  // );
}

SearchComponent.propTypes = {};

export default SearchComponent;
