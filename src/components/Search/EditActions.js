import React from 'react';
import PropTypes from 'prop-types';
import { Edit, Delete } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { setCurrentBug } from '../../app/reducers/postSlice';
import { useDispatch } from 'react-redux';
import { db } from '../../config/firebase';
import firebase from 'firebase';

const EditActions = ({ hit }) => {
  const dispatch = useDispatch();

  const deletePost = async () => {
    try {
      await db.collection('posts').doc(hit.objectID).delete();
      await console.log('Post successfully deleted');
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
