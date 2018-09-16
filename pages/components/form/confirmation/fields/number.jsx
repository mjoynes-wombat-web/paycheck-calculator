import React from 'react';
import PropTypes from 'prop-types';

import fieldsCSS from './fieldsCSS';

const NumberField = ({ step, changeActiveStep, index }) => (
  <li key={step.id}>
    <style jsx>
      {fieldsCSS}
    </style>
    <a href={`#${step.id}`} onClick={() => changeActiveStep(index)}>
      <span className="label">{step.shortLabel}:</span>
      <span className="value">{step.step === 0.01 ? (step.value / 100).toFixed(2) : step.value}</span>
    </a>
  </li>
);


NumberField.propTypes = {
  step: PropTypes.shape({
    id: PropTypes.string,
    shortLabel: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  changeActiveStep: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default NumberField;
