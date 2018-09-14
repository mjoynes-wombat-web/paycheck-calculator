import React from 'react';
import PropTypes from 'prop-types';

const Progress = ({ steps, changeActiveStep }) => (
  <ul>
    {steps.map(step => (
      <li key={step.id}>
        <button type="button" onClick={() => changeActiveStep(step.id)}>
          {step.text}
        </button>
      </li>
    ))}
  </ul>
);

Progress.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.text,
  })).isRequired,
  changeActiveStep: PropTypes.func.isRequired,
};

export default Progress;
