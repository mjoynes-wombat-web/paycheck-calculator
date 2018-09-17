import React from 'react';
import PropTypes from 'prop-types';

import SubmitButton from '../buttons/submit';
import NumberField from './fields/number';
import SelectField from './fields/select';
import colors from '../../../../consts/colors';

const Confirmation = ({
  steps, currentStep, changeActiveStep, submitForm, valid,
}) => (
  <div className={`confirmation ${currentStep > Object.keys(steps).length - 1 ? 'active' : ''} ${valid ? '' : 'invalid'}`}>
    <style jsx>
      {`
      .confirmation {
        opacity: 0;
        transition: 1s opacity;
        width: 50%;
        pointer-events: none;
        display: flex;
        flex-direction: column;
        padding: 2rem;

        &.active {
          opacity: 1;
          pointer-events: all;
        }

        p.instructions {
          font-size: 1.25rem;
          visibility: hidden;
          opacity: 0;
          margin: 0;
          bottom: -1rem;
          position: relative;
          color: ${colors.errorRed()};
          text-align: center;
          transition: opacity 0.5s;
          max-width: 35ch;
          margin: 0 auto;
        }

        &.invalid {
          p.instructions {
            visibility: initial;
            opacity: 1;
          }
        }

        ul {
          padding: 0;
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin: 0;
        }
      }
      `}
    </style>
    <ul>
      {Object.keys(steps).map((stepName, i) => {
        switch (steps[stepName].constructor.name) {
          case 'NumInput':
            return (
              <NumberField
                key={stepName}
                step={steps[stepName]}
                changeActiveStep={changeActiveStep}
                index={i}
              />
            );
          case 'SelectInput':
            return (
              <SelectField
                key={stepName}
                step={steps[stepName]}
                changeActiveStep={changeActiveStep}
                index={i}
              />
            );
          default:
            return null;
        }
      })}
    </ul>
    <p className="instructions">Please correct the form. White steps are incomplete and red steps have errors.</p>
    <SubmitButton onClick={submitForm} valid={valid} />
  </div>
);

Confirmation.propTypes = {
  steps: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  })).isRequired,
  currentStep: PropTypes.number.isRequired,
  changeActiveStep: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default Confirmation;
