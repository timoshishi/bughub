import React, { useState } from 'react';
import firebase from 'firebase';
import FileUploader from './react-firebase-file-uploader/lib/index';
import { FormLabel, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  label: {
    padding: '0.5rem',
    borderRadius: '4px',
    marginBottom: '1rem',
    color: '#3f51b5',
    '&:hover': {
      backgroundColor: 'rgba(63, 81, 181, 0.05)',
      cursor: 'pointer',
    },
  },
});

const ImageForm = ({ setImageUrls, imageUrls }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState('');

  const classes = useStyles();

  const handleUploadStart = () => {
    setIsUploading(true);
    setProgress(0);
  };

  const handleProgress = (progress) => setProgress(progress);

  const handleUploadError = (error) => {
    setIsUploading(false);
    console.error('handleUploadError', error);
  };

  const handleUploadSuccess = (filename) => {
    setIsUploading(false);
    setProgress(100);

    firebase
      .storage()
      .ref('')
      .child(filename)
      .getDownloadURL()
      .then((url) => {
        console.log(url);
        setImageUrls([...imageUrls, url]);
        setUrl(url);
      })
      .catch((err) => console.error('at upload success', err));
  };

  return (
    <div>
      <form>
        {isUploading && <p>Progress: {progress}</p>}

        <FormLabel variant='filled' className={classes.label} color='primary'>
          <FileUploader
            hidden
            accept='image/*'
            name='avatar'
            randomizeFilename
            storageRef={firebase.storage().ref('')}
            onUploadStart={handleUploadStart}
            onUploadError={handleUploadError}
            onUploadSuccess={handleUploadSuccess}
            onProgress={handleProgress}
          />
          Add Screen Shots
        </FormLabel>
      </form>
    </div>
  );
};
ImageForm.propTypes = {
  imageUrls: PropTypes.array.isRequired,
  setImageUrls: PropTypes.func.isRequired,
};
export default ImageForm;
