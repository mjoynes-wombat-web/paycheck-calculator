import React from 'react';
import PropTypes from 'prop-types';

import NextButton from '../buttons/next';
import inputCSS from './input.css';

const NumInput = ({
  id, label, value, pattern, complete, step, min, max, currentStep, index, nextStep,
}) => (
  <div className={`input-wrapper ${complete ? 'complete' : ''} ${currentStep === index ? 'active' : ''}`}>
    <style jsx>
      {inputCSS}
    </style>
    <label htmlFor={id}>
      {label}
    </label>
    <input type="number" id={id} value={value} pattern={pattern} step={step} min={min} max={max} />
    <NextButton id={id} currentStep={currentStep} onClick={nextStep} />
  </div>
);

NumInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  pattern: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  step: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number,
  currentStep: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,
};

NumInput.defaultProps = {
  max: null,
};

export default NumInput;
