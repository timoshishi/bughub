import React from 'react';
import PropTypes from 'prop-types';
import SearchComponent from '../Search/SearchComponent';
import PostForm from '../postForm/PostForm';

const Landing = (props) => {
  return (
    <div>
      <PostForm />
      <SearchComponent />
    </div>
  );
};

Landing.propTypes = {};

export default Landing;
