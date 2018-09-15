import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NumberInput from './inputs/number';
import SelectInput from './inputs/select';
import colors from '../../../consts/colors';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      submit: false,
    };
  }

  render() {
    const { steps, currentStep, nextStep } = this.props;
    return (
      <form>
        <style jsx>
          {`
          display: flex;
          flex-direction: column;
          align-items: center;

          form > :global(.input-wrapper) {
            opacity: 0;
            position: absolute;
            transition: opacity 0.5s;
            display: flex;
            flex-direction: column;
            pointer-events: none;

            :global(label) {
              color: white;
              font-size: 2rem;
              margin: 2rem;
            }

            :global(input, select) {
              margin: 2rem;
              background-color: transparent;
              border: 0.125rem solid ${colors.vividGreen()};
              border-radius: 0.5rem;
              padding: 1rem;
              color: white;
              font-size: 2rem;
              appearance: none;
            }
          }

          form > :global(.input-wrapper.active) {
            opacity: 1;
            pointer-events: all;
          }
          `}
        </style>
        {steps.map((step, i) => {
          switch (step.constructor.name) {
            case 'NumInput':
              return <NumberInput key={step.id} {...step} currentStep={currentStep} index={i} nextStep={nextStep} />;
            case 'SelectInput':
              return <SelectInput key={step.id} {...step} currentStep={currentStep} index={i} nextStep={nextStep} />;
            default:
              return null;
          }
        })}
        <button tupe="submit">Submit</button>
      </form>
    );
  }
}

Form.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentStep: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default Form;
