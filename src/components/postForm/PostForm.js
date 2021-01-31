import React, { useState } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from '../../app/reducers/authSlice';
import { db } from '../../config/firebase';
import firebase from 'firebase/app';
import postGenerator from '../../dataGen/postGenerator.js';

export default function PostForm() {
  const user = useSelector(selectUser);

  const [open, setOpen] = useState(false);
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
  const handleCancel = () => {
    setPostData({
      createdBy: user.uid,
      body: '',
      bug: '',
      keywords: '',
      solution: '',
      summary: '',
    });
    handleClose();
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box width='100%'>
      <Button variant='outlined' color='primary' onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>New Bug</DialogTitle>
        <DialogContent>
          <DialogContentText>These fields support Markdown!</DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            name='summary'
            label='Brief Summary'
            type='text'
            value={postData.summary}
            onChange={handleFormData}
            required
            fullWidth
          />
          <TextField
            autoFocus
            margin='dense'
            name='keywords'
            label='Add comma separated keywords'
            type='text'
            value={postData.keywords}
            onChange={handleFormData}
            fullWidth
          />
          <Box my={1}>
            <TextField
              aria-label='minimum height'
              multiline
              label='Problem Encountered'
              variant='outlined'
              fullWidth
              name='body'
              value={postData.body}
              onChange={handleFormData}
              rows={5}
              placeholder='Please enter a description of the problem'
              required
            />
          </Box>
          <Box my={2}>
            <TextField
              aria-label='minimum height'
              multiline
              label='Bugs'
              variant='outlined'
              fullWidth
              name='bug'
              value={postData.bug}
              onChange={handleFormData}
              rows={5}
              placeholder='Please enter any bugs'
            />
          </Box>
          <TextField
            aria-label='minimum height'
            multiline
            label='Solution'
            variant='outlined'
            fullWidth
            name='solution'
            value={postData.solution}
            onChange={handleFormData}
            rows={5}
            placeholder='Please enter the steps taken to come to a solution'
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleSubmit} color='primary'>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
