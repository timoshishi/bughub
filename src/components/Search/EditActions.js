import React from 'react';
import PropTypes from 'prop-types';
import { Edit, Delete } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { setCurrentBug, toggleRefresh } from '../../app/reducers/postSlice';
import { useDispatch } from 'react-redux';
import { db } from '../../config/firebase';

const EditActions = ({ hit }) => {
  const dispatch = useDispatch();

  const deletePost = async () => {
    try {
      dispatch(toggleRefresh(true));
      await db.collection('posts').doc(hit.objectID).delete();
      await console.log('Post successfully deleted');
      // await dispatch(toggleRefresh(false));
    } catch (err) {
      console.error('deletePost', err);
    }
  };

  return (
    <>
      <IconButton onClick={() => dispatch(setCurrentBug(hit))}>
        <Edit />
      </IconButton>
      <IconButton onClick={deletePost}>
        <Delete />
      </IconButton>
    </>
  );
};

EditActions.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default EditActions;
