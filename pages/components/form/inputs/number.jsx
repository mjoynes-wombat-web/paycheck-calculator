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
      changeValue, id, min, max, step,
    } = this.props;
    const { target } = e;
    let { value } = target;
    value = value.split('.').join('');
    value = parseInt(value, 10);
    if (step === 0.01) {
      value = value.length < 3 ? `${value}0` : value;
      value = parseFloat(value);
    } else {
      value = parseFloat(value);
    }
    return changeValue(
      value,
      id,
      (!Number.isNaN(value) && value >= (min * 100) && ((value <= max) || (max === null))),
    );
  }

  render() {
    const {
      id,
      label,
      value,
      pattern,
      complete,
      step,
      min,
      max,
      currentStep,
      index,
      nextStep,
      lastInput,
      valid,
    } = this.props;
    return (
      <div className={`input-wrapper ${complete ? 'complete' : ''} ${currentStep === index ? 'active' : ''} ${!valid && value ? 'error' : ''}`}>
        <style jsx>
          {inputCSS}
        </style>
        <label htmlFor={id}>
          {label}
        </label>
        <input type="number" id={id} value={step !== 0 ? (value / 100).toFixed(2) : value} pattern={pattern} step={step} min={min} max={max} onChange={this.onChange} placeholder="0" required />
        <p className="instructions">The number needs to be more than {min}{max ? ` and less than ${max}` : ''}.</p>
        <NextButton id={id} currentStep={currentStep} onClick={nextStep} lastInput={lastInput} />
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
  lastInput: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
};

NumInput.defaultProps = {
  max: null,
};

export default NumInput;
