import React from 'react';
import PropTypes from 'prop-types';

import buttonCSS from './buttonCSS';

const NextButton = ({
  id, currentStep, onClick, lastInput,
}) => (
  <button key={id} type="button" onClick={() => onClick(currentStep)}>
    <style jsx>
      {buttonCSS}
    </style>
    {lastInput ? 'Confirm Entries' : 'Next'}
  </button>
);

NextButton.propTypes = {
  id: PropTypes.string.isRequired,
  currentStep: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  lastInput: PropTypes.bool.isRequired,
};

export default NextButton;
