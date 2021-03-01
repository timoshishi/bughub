import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../app/reducers/authSlice';
import {
  clearCurrentBug,
  selectCurrentBug,
} from '../../app/reducers/postSlice';
import { db } from '../../config/firebase';
import firebase from 'firebase/app';
import { AddCircleOutlined } from '@material-ui/icons';
import FormActionButtons from '../BugForm/FormActionButtons';
import FormContent from '../BugForm/FormContent';

const BugForm = () => {
  const user = useSelector(selectUser);
  const currentBug = useSelector(selectCurrentBug);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [imageUrls, setImageUrls] = useState([]);
  const [postData, setPostData] = useState({
    body: '',
    bug: '',
    keywords: '',
    solution: '',
    summary: '',
  });
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
      const docId = currentBug ? currentBug.objectID : undefined;
      console.log({ docId });
      await postsRef.doc(docId).set({
        ...postData,
        keywords: keywordArr,
        imageUrls,
        created: !currentBug
          ? firebase.firestore.Timestamp.now().seconds
          : currentBug.created,
        updated: firebase.firestore.Timestamp.now().seconds,
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
    handleCancel();
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
    setOpen(false);
    console.log('@handleCLose');
    dispatch(clearCurrentBug());
  };

  useEffect(() => {
    if (currentBug) {
      console.log(Array.isArray(currentBug.keywords));
      setOpen(true);
      setPostData({
        createdBy: user.uid,
        body: currentBug.body,
        bug: currentBug.bug,
        keywords: currentBug.keywords.length
          ? currentBug.keywords.join(', ')
          : '',
        solution: currentBug.solution,
        summary: currentBug.summary,
      });
      setImageUrls([...currentBug.imageUrls]);
    }
    //eslint-disable-next-line
  }, [currentBug]);

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
            currentBug={currentBug}
          />
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default BugForm;
