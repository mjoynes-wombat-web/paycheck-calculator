import React from 'react';
import PropTypes from 'prop-types';

const NextButton = ({ id, currentStep, onClick }) => (
  <button key={id} type="button" onClick={() => onClick(currentStep)}>Next</button>
);

NextButton.propTypes = {
  id: PropTypes.string.isRequired,
  currentStep: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NextButton;
