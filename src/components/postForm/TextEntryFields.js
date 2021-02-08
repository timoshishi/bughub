import React from 'react';
import PropTypes from 'prop-types';
import { DialogContentText, TextField, Box } from '@material-ui/core';
import ImageForm from '../ImageUploader/ImageForm';
const TextEntryFields = ({ postData, handleFormData }) => {
  return (
    <>
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
    </>
  );
};

TextEntryFields.propTypes = {
  postData: PropTypes.object.isRequired,
  handleFormData: PropTypes.func.isRequired,
};

export default TextEntryFields;
