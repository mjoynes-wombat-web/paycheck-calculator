import React, { Component } from 'react';
import usStates from 'datasets-us-states-abbr';
import axios from 'axios';
import queryString from 'querystring';

import MainTemplate from './layout/main';
import Progress from './components/progress';
import Form from './components/form';
import { NumInput, SelectInput } from '../helpers/inputClasses';

class Index extends Component {
  constructor() {
    super();
    this.state = {
      steps: {
        hourlyWage: new NumInput('Hourly Wage', 'How much do you make an hour?', '', 0.01, 100),
        hours: new NumInput('Hours', 'How many hours are in this paycheck?', '', 0.01, 100),
        filingStatus: new SelectInput('Filing Status', 'What is your filing status?', [{ value: 'single', text: 'Single' }, { value: 'married', text: 'Married' }, { value: 'married_seperately', text: 'Married Filing Separately' }, { value: 'head_of_household', text: 'Head of Household' }]),
        usState: new SelectInput('US State', 'What state do you live in?', usStates.map(state => ({ value: state, text: state }))),
        payFrequency: new SelectInput('Pay Frequency', 'How often do you get paid?', [{ value: 52, text: 'Weekly' }, { value: 26, text: 'Bi-Weekly' }, { value: 24, text: 'Semi-Monthly' }, { value: 12, text: 'Monthly' }, { value: 4, text: 'Quarterly' }, { value: 1, text: 'Yearly' }]),
        exemptions: new NumInput('Exemptions', 'What number of exemptions do you get?', '', 0, 0, 0, 20),
      },
      currentStep: 0,
    };
    this.nextStep = this.nextStep.bind(this);
    this.changeActiveStep = this.changeActiveStep.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    const { steps } = this.state;
    const data = {
      pay_rate: (steps.hourlyWage.value / 100) * (steps.hours.value / 100),
      filing_status: steps.filingStatus.value,
      state: steps.usState.value,
      pay_periods: steps.payFrequency.value,
      exemptions: steps.exemptions.value,
    };
    axios({
      method: 'post',
      url: `https://taxee.io/api/v2/calculate/${(new Date()).getFullYear()}`,
      data: queryString.stringify(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUElfS0VZX01BTkFHRVIiLCJodHRwOi8vdGF4ZWUuaW8vdXNlcl9pZCI6IjU4NzI2MDUzY2UzN2E4MjM4NGFmYmYzMyIsImh0dHA6Ly90YXhlZS5pby9zY29wZXMiOlsiYXBpIl0sImlhdCI6MTQ4Mzg5MDc3MX0.GcPeCa2H1bi9BQx4uo_NypoQ4pGsd2aDRC9YjjvHG5s',
      },
    });
  }

  nextStep(currentStep) {
    const { steps } = this.state;
    steps[Object.keys(steps)[currentStep]].complete = true;
    this.setState({ currentStep: currentStep + 1, steps });
  }

  changeActiveStep(step) {
    this.setState({ currentStep: step });
  }

  changeValue(value, key, valid) {
    const { steps } = this.state;
    steps[key].value = value;
    steps[key].valid = valid;
    steps[key].complete = true;

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
          submitForm={this.submitForm}
        />
      </MainTemplate>
    );
  }
}

export default Index;
