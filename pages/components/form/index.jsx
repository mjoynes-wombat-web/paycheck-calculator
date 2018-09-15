import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NumberInput from './inputs/number';
import SelectInput from './inputs/select';
import Confirmation from './confirmation';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      submit: false,
    };
  }

  render() {
    const {
      steps, currentStep, nextStep, changeValue, changeActiveStep,
    } = this.props;
    return (
      <form>
        <style jsx>
          {`
          display: flex;
          flex-direction: column;
          align-items: center;
          `}
        </style>
        {steps.map((step, i) => {
          switch (step.constructor.name) {
            case 'NumInput':
              return (
                <NumberInput
                  key={step.id}
                  {...step}
                  currentStep={currentStep}
                  index={i}
                  nextStep={nextStep}
                  changeValue={changeValue}
                />
              );
            case 'SelectInput':
              return (
                <SelectInput
                  key={step.id}
                  {...step}
                  currentStep={currentStep}
                  index={i}
                  nextStep={nextStep}
                  changeValue={changeValue}
                />
              );
            default:
              return null;
          }
        })}
        <Confirmation steps={steps} currentStep={currentStep} changeActiveStep={changeActiveStep} />
      </form>
    );
  }
}

Form.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentStep: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,
  changeValue: PropTypes.func.isRequired,
  changeActiveStep: PropTypes.func.isRequired,
};

export default Form;
