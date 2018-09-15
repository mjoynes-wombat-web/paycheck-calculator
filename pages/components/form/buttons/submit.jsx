import React from 'react';
import PropTypes from 'prop-types';

import buttonCSS from './buttonCSS';

const SubmitButton = ({ onClick }) => (
  <button type="submit" onClick={onClick}>
    <style jsx>
      {buttonCSS}
    </style>
    Calculate Paycheck
  </button>
);

SubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SubmitButton;
