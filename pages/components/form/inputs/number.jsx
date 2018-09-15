import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NextButton from '../buttons/next';
import inputCSS from './input.css';

class NumInput extends Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const {
      changeValue, index, min, max,
    } = this.props;
    const { target } = e;
    const { validity: { valid } } = target;
    let { value } = target;
    value = value.split('.').join('');
    value = value.length < 3 ? `${value}0` : value;
    value = parseFloat(value);
    if (Number.isNaN(value) || value < min * 100) value = min * 100;
    if (max && value > max) value = max;
    return changeValue(value, index, valid);
  }

  render() {
    const {
      id, label, value, pattern, complete, step, min, max, currentStep, index, nextStep,
    } = this.props;
    return (
      <div className={`input-wrapper ${complete ? 'complete' : ''} ${currentStep === index ? 'active' : ''}`}>
        <style jsx>
          {inputCSS}
        </style>
        <label htmlFor={id}>
          {label}
        </label>
        <input type="number" id={id} value={step !== 0 ? (value / 100).toFixed(2) : value} pattern={pattern} step={step} min={min} max={max} onChange={this.onChange} />
        <NextButton id={id} currentStep={currentStep} onClick={nextStep} />
      </div>
    );
  }
}

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
  changeValue: PropTypes.func.isRequired,
};

NumInput.defaultProps = {
  max: null,
};

export default NumInput;
