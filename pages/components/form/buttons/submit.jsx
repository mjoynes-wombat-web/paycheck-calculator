import React from 'react';
import PropTypes from 'prop-types';

import buttonCSS from './buttonCSS';

const SubmitButton = ({ onClick, valid }) => (
  <button type="submit" onClick={onClick} disabled={!valid}>
    <style jsx>
      {buttonCSS}
    </style>
    {valid ? 'Calculate Paycheck' : 'Please Correct Form'}
  </button>
);

SubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SubmitButton;
