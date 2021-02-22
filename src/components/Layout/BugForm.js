import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from '../../app/reducers/authSlice';
import { db } from '../../config/firebase';
import firebase from 'firebase/app';
import { AddCircleOutlined } from '@material-ui/icons';
import FormActionButtons from '../BugForm/FormActionButtons';
import FormContent from '../BugForm/FormContent';

export default function BugForm() {
  const user = useSelector(selectUser);

  const [open, setOpen] = useState(false);
  const [postData, setPostData] = useState({
    body: '',
    bug: '',
    keywords: '',
    solution: '',
    summary: '',
  });
  const [imageUrls, setImageUrls] = useState([]);
  const handleFormData = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const newPost = {
      imageUrls,
      createdBy: user.uid,
      ...postData,
    };
    createPost(newPost);
    handleCancel();
  };

  const createPost = async (postData) => {
    try {
      const postsRef = db.collection('posts');
      let keywordArr = postData.keywords.length
        ? postData.keywords.split(',').map((word) => word.trim())
        : [];
      await postsRef.doc().set({
        ...postData,
        keywords: keywordArr,
        imageUrls,
        created: firebase.firestore.Timestamp.now().seconds,
      });
      await console.log('created', postData);
    } catch (err) {
      console.error(err);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setPostData({
      createdBy: user.uid,
      body: '',
      bug: '',
      keywords: '',
      solution: '',
      summary: '',
    });
    setImageUrls([]);
    handleClose();
  };

  return (
    <Box width='100%'>
      <Button
        variant='outlined'
        color='inherit'
        onClick={handleClickOpen}
        endIcon={<AddCircleOutlined />}>
        New bug
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>New Bug</DialogTitle>
        <DialogContent>
          <FormContent
            imageUrls={imageUrls}
            setImageUrls={setImageUrls}
            handleFormData={handleFormData}
            postData={postData}
          />
        </DialogContent>
        <DialogActions>
          <FormActionButtons
            handleSubmit={handleSubmit}
            imageUrls={imageUrls}
            setImageUrls={setImageUrls}
            handleCancel={handleCancel}
          />
        </DialogActions>
      </Dialog>
    </Box>
  );
}
