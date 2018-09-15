import React from 'react';
import PropTypes from 'prop-types';

import NextButton from '../buttons/next';

const SelectInput = ({
  id, shortLabel, label, complete, options, currentStep, nextStep, index,
}) => (
  <div className={`input-wrapper ${complete ? 'complete' : ''} ${currentStep === index ? 'active' : ''}`}>
    <label htmlFor={id}>
      {label}
    </label>
    <select name={shortLabel} id={id}>
      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
    <NextButton id={id} currentStep={currentStep} onClick={nextStep} />
  </div>
);

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  shortLabel: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentStep: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default SelectInput;
