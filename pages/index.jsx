import React, { Component } from 'react';
import usStates from 'datasets-us-states-abbr';

import MainTemplate from './layout/main';
import Progress from './components/progress';
import Form from './components/form';
import { NumInput, SelectInput } from '../helpers/inputClasses';

class Index extends Component {
  constructor() {
    super();
    this.state = {
      steps: [
        new NumInput('Pay Rate', 'How much do you make an hour?', '', 0.01, 100),
        new NumInput('Hours', 'How many hours are in this paycheck?', '', 0.01, 100),
        new SelectInput('Filing Status', 'What is your filing status?', ['Single', 'Married', 'Married Filing Separately', 'Head of Household']),
        new SelectInput('US State', 'What state do you live in?', usStates),
        new SelectInput('Pay Frequency', 'How often do you get paid?', ['Weekly', 'Bi-Weekly', 'Semi-Monthly', 'Monthly', 'Quarterly', 'Yearly']),
        new NumInput('Exemptions', 'What number of exemptions do you get?', '', 0, 0, 0, 20),
      ],
      currentStep: 7,
    };
    this.nextStep = this.nextStep.bind(this);
    this.changeActiveStep = this.changeActiveStep.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  nextStep(currentStep) {
    const { steps } = this.state;
    steps[currentStep].complete = true;
    this.setState({ currentStep: currentStep + 1, steps });
  }

  changeActiveStep(step) {
    this.setState({ currentStep: step });
  }

  changeValue(value, index, valid) {
    const { steps } = this.state;
    steps[index].value = value;
    steps[index].valid = valid;
    steps[index].complete = true;

    this.setState({ steps });
  }

  render() {
    const { steps, currentStep } = this.state;
    return (
      <MainTemplate>
        <Progress
          steps={steps}
          currentStep={currentStep}
          changeActiveStep={this.changeActiveStep}
        />
        <Form
          steps={steps}
          currentStep={currentStep}
          nextStep={this.nextStep}
          changeValue={this.changeValue}
          changeActiveStep={this.changeActiveStep}
        />
      </MainTemplate>
    );
  }
}

export default Index;
