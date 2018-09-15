import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NumberInput from './inputs/number';
import SelectInput from './inputs/select';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      submit: false,
    };
  }

  render() {
    const { steps } = this.props;
    return (
      <form>
        {steps.map((step) => {
          switch (step.constructor.name) {
            case 'NumInput':
              return <NumberInput key={step.id} {...step} />;
            case 'SelectInput':
              return <SelectInput key={step.id} {...step} />;
            default:
              return null;
          }
        })}
      </form>
    );
  }
}

Form.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Form;
