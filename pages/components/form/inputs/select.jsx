import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NextButton from '../buttons/next';
import inputCSS from './input.css';


class SelectInput extends Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { changeValue, index } = this.props;
    const { target } = e;
    const { validity: { valid }, value } = target;
    return changeValue(value, index, valid);
  }

  render() {
    const {
      id, shortLabel, label, complete, options, currentStep, nextStep, index, value,
    } = this.props;
    return (
      <div className={`input-wrapper ${complete ? 'complete' : ''} ${currentStep === index ? 'active' : ''}`}>
        <style jsx>
          {inputCSS}
        </style>
        <label htmlFor={id}>
          {label}
        </label>
        <select name={shortLabel} id={id} onChange={this.onChange} value={value}>
          {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
        <NextButton id={id} currentStep={currentStep} onClick={nextStep} />
      </div>
    );
  }
}

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  shortLabel: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentStep: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
};

export default SelectInput;
