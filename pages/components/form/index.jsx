import React from 'react';
import PropTypes from 'prop-types';

import NumberInput from './inputs/number';
import SelectInput from './inputs/select';
import Confirmation from './confirmation';

const Form = ({
  steps, currentStep, nextStep, changeValue, changeActiveStep, submitForm, valid,
}) => (
  <form>
    <style jsx>
      {`
      display: flex;
      flex-direction: column;
      align-items: center;
      `}
    </style>
    {Object.keys(steps).map((stepName, i) => {
      switch (steps[stepName].constructor.name) {
        case 'NumInput':
          return (
            <NumberInput
              key={steps[stepName].id}
              {...steps[stepName]}
              currentStep={currentStep}
              index={i}
              nextStep={nextStep}
              changeValue={changeValue}
              lastInput={(Object.keys(steps).length - 1) === i}
            />
          );
        case 'SelectInput':
          return (
            <SelectInput
              key={steps[stepName].id}
              {...steps[stepName]}
              currentStep={currentStep}
              index={i}
              nextStep={nextStep}
              changeValue={changeValue}
              lastInput={(Object.keys(steps).length - 1) === i}
            />
          );
        default:
          return null;
      }
    })}
    <Confirmation
      steps={steps}
      currentStep={currentStep}
      changeActiveStep={changeActiveStep}
      submitForm={submitForm}
      valid={valid}
    />
  </form>
);

Form.propTypes = {
  steps: PropTypes.objectOf(PropTypes.object).isRequired,
  currentStep: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,
  changeValue: PropTypes.func.isRequired,
  changeActiveStep: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default Form;
