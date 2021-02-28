import React from 'react';
import PropTypes from 'prop-types';
import { Edit, Delete } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { setCurrentBug } from '../../app/reducers/postSlice';
import { useDispatch } from 'react-redux';

const EditActions = ({ hit }) => {
  const dispatch = useDispatch();
  return (
    <>
      <IconButton onClick={() => dispatch(setCurrentBug(hit))}>
        <Edit />
      </IconButton>
      <IconButton>
        <Delete />
      </IconButton>
    </>
  );
};

EditActions.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default EditActions;
