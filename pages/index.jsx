import React, { Component } from 'react';
import camelCase from 'camelcase';

import MainTemplate from './layout/main';
import Progress from './components/progress';

class Step {
  constructor(text, label) {
    this.id = camelCase(text);
    this.text = text;
    this.label = label;
    this.complete = false;
  }
}

class Index extends Component {
  constructor() {
    super();
    this.state = {
      steps: [
        new Step('Pay Rate', 'How much do you make an hour?'),
        new Step('Hours', 'How many hours are in this paycheck?'),
        new Step('Filing Status', 'What is your filing status?'),
        new Step('US State', 'What state do you live in?'),
        new Step('Pay Frequency', 'How often do you get paid?'),
        new Step('Exemptions', 'What number of exemptions do you get?'),
      ],
      currentStep: 0,
    };
  }

  render() {
    const { steps, currentStep } = this.state;
    return (
      <MainTemplate>
        <Progress steps={steps} currentStep={currentStep} />
      </MainTemplate>
    );
  }
}

export default Index;
