import React from 'react';
import PropTypes from 'prop-types';

const NumInput = ({
  id, label, value, pattern, complete, step, min, max,
}) => (
  <div className={complete ? 'complete' : ''}>
    <label htmlFor={id}>
      {label}
      <input type="number" id={id} value={value} pattern={pattern} step={step} min={min} max={max} />
    </label>
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
};

NumInput.defaultProps = {
  max: null,
};

export default NumInput;
