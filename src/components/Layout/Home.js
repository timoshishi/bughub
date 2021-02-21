import React from 'react';
import SearchComponent from '../Search/SearchComponent';
import BugForm from '../BugForm/BugForm';

const Landing = () => {
  return (
    <div>
      <BugForm />
      <SearchComponent />
    </div>
  );
};

export default Landing;
