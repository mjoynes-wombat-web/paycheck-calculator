import React from 'react';
import PropTypes from 'prop-types';

import fieldsCSS from './fieldsCSS';

const SelectField = ({ step, changeActiveStep, index }) => (
  <li key={step.id}>
    <style jsx>
      {fieldsCSS}
    </style>
    <a href={`#${step.id}`} onClick={() => changeActiveStep(index)}>
      <span className="label">{step.shortLabel}:</span>
      <span className="value">{step.options.find(option => (option.value == step.value)).text}
      </span>
    </a>
  </li>
);

SelectField.propTypes = {
  step: PropTypes.shape({
    id: PropTypes.string,
    shortLabel: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      text: PropTypes.string,
    })),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  changeActiveStep: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default SelectField;
