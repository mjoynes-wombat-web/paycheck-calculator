import React, { Component } from 'react';
import camelCase from 'camelcase';
import usStates from 'datasets-us-states-abbr';

import MainTemplate from './layout/main';
import Progress from './components/progress';
import Form from './components/form';

class Input {
  constructor(shortLabel, label, pattern = '') {
    this.id = camelCase(shortLabel);
    this.shortLabel = shortLabel;
    this.label = label;
    this.pattern = pattern;
    this.complete = false;
  }
}

class NumInput extends Input {
  constructor(text, label, pattern, step = 0, min = 1, max = null) {
    super(text, label, pattern);
    this.value = 0;
    this.type = 'number';
    this.step = step;
    this.min = min;
    this.max = max;
  }
}

class SelectInput extends Input {
  constructor(text, label, options) {
    super(text, label);
    this.type = 'select';
    this.options = options;
  }
}

class Index extends Component {
  constructor() {
    super();
    this.state = {
      steps: [
        new NumInput('Pay Rate', 'How much do you make an hour?', '', 0.01),
        new NumInput('Hours', 'How many hours are in this paycheck?'),
        new SelectInput('Filing Status', 'What is your filing status?', ['Single', 'Married', 'Married Filing Separately', 'Head of Household']),
        new SelectInput('US State', 'What state do you live in?', usStates),
        new SelectInput('Pay Frequency', 'How often do you get paid?', ['Weekly', 'Bi-Weekly', 'Semi-Monthly', 'Monthly', 'Quarterly', 'Yearly']),
        new NumInput('Exemptions', 'What number of exemptions do you get?', '', 0, 0, 20),
      ],
      currentStep: 0,
    };
    this.nextStep = this.nextStep.bind(this);
  }

  nextStep(currentStep) {
    this.setState({ currentStep: currentStep + 1 });
  }

  render() {
    const { steps, currentStep } = this.state;
    return (
      <MainTemplate>
        <Progress steps={steps} currentStep={currentStep} />
        <Form steps={steps} currentStep={currentStep} nextStep={this.nextStep} />
      </MainTemplate>
    );
  }
}

export default Index;
