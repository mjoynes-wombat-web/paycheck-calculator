import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({
  id, shortLabel, label, complete, options,
}) => (
  <div className={complete ? 'complete' : ''}>
    <label htmlFor={id}>
      {label}
      <select name={shortLabel} id={id}>
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </label>
  </div>
);

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  shortLabel: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectInput;
