import React, { Component } from 'react';

import MainTemplate from './layout/main';
import Progress from './components/progress';

class Step {
  constructor(id, text, label) {
    this.id = id;
    this.text = text;
    this.label = label;
  }
}

class Index extends Component {
  constructor() {
    super();
    this.state = {
      steps: [
        new Step('payRate', 'Pay Rate', 'How much do you make an hour?'),
        {
          id: 'hours',
          text: 'Hours',
          label: 'How many hours are in this paycheck?',
        },
        {
          id: 'filingStatus',
          text: 'Filing Status',
          label: 'What is your filing status?',
        },
        {

        },
      ],
    };
  }

  render() {
    const { steps } = this.state;
    return (
      <MainTemplate>
        <Progress steps={steps} />
      </MainTemplate>
    );
  }
}

export default Index;
