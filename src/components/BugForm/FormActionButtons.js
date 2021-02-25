import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import ImageForm from '../ImageUploader/ImageForm';
const FormActionButtons = ({
  imageUrls,
  setImageUrls,
  handleSubmit,
  handleCancel,
}) => {
  return (
    <>
      <Button onClick={handleCancel} color='secondary'>
        Cancel
      </Button>
      <ImageForm setImageUrls={setImageUrls} imageUrls={imageUrls} />
      <Button onClick={handleSubmit} color='inherit'>
        Submit
      </Button>
    </>
  );
};

FormActionButtons.propTypes = {
  imageUrls: PropTypes.array.isRequired,
  setImageUrls: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default FormActionButtons;
