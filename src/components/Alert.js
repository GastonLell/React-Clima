import React from "react";
import PropTypes from 'prop-types';

const MyAlert = ({ message, type }) => {
  return (
    <div className="d-flex justify-content-center w-100 ">
      <div className={`w-100 text-center alert alert-${type}`} role="alert">
        {message}
      </div>
    </div>
  );
};

MyAlert.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

export default MyAlert;
