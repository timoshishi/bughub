import React from 'react';
import PropTypes from 'prop-types';
import TextEntryFields from './TextEntryFields';
import UploadedImages from './UploadedImages';
const FormContent = ({ postData, handleFormData, imageUrls, setImageUrls }) => {
  return (
    <>
      <TextEntryFields postData={postData} handleFormData={handleFormData} />
      {imageUrls.length ? (
        <UploadedImages imageUrls={imageUrls} setImageUrls={setImageUrls} />
      ) : null}
    </>
  );
};

FormContent.propTypes = {
  postData: PropTypes.object.isRequired,
  handleFormData: PropTypes.func.isRequired,
  imageUrls: PropTypes.array.isRequired,
  setImageUrls: PropTypes.func.isRequired,
};

export default FormContent;
