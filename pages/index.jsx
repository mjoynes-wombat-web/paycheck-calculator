import React, { Component } from 'react';
import usStates from 'datasets-us-states-abbr';
import axios from 'axios';
import queryString from 'querystring';

import MainTemplate from './layout/main';
import Progress from './components/progress';
import Form from './components/form';
import { NumInput, SelectInput } from '../helpers/inputClasses';
import Error from './components/error';
import Paycheck from './components/paycheck';
import PaycheckList from './components/paycheck-list';
import TaxBrackets from './components/taxBrackets';

import authToken from '../consts/authToken';

class Index extends Component {
  constructor() {
    super();
    this.state = {
      paychecksSubmitted: 0,
      steps: {
        hourlyWage: new NumInput('Hourly Wage', 'How much do you make an hour?', '', 0.01),
        hours: new NumInput('Hours', 'How many hours are in this paycheck?', '', 0.01),
        filingStatus: new SelectInput('Filing Status', 'What is your filing status?', [{ value: 'single', text: 'Single' }, { value: 'married', text: 'Married' }, { value: 'married_separately', text: 'Married Filing Separately' }, { value: 'head_of_household', text: 'Head of Household' }]),
        usState: new SelectInput('US State', 'What state do you live in?', usStates.map(state => ({ value: state, text: state }))),
        payFrequency: new SelectInput('Pay Frequency', 'How often do you get paid?', [{ value: 52, text: 'Weekly' }, { value: 26, text: 'Bi-Weekly' }, { value: 24, text: 'Semi-Monthly' }, { value: 12, text: 'Monthly' }, { value: 4, text: 'Quarterly' }, { value: 1, text: 'Yearly' }]),
        exemptions: new NumInput('Exemptions', 'What number of exemptions do you get?', '', 0, 0, 0, 20),
      },
      currentStep: 0,
      paychecks: [],
      paycheckError: '',
      paycheckToShow: null,
      showPaycheck: false,
      paycheckReceived: false,
      historyOpen: false,
      historyClickedOnce: false,
      openTaxBrackets: false,
      valid: false,
    };
    this.nextStep = this.nextStep.bind(this);
    this.changeActiveStep = this.changeActiveStep.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.closePaycheck = this.closePaycheck.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.showPaycheck = this.showPaycheck.bind(this);
    this.closeTaxBrackets = this.closeTaxBrackets.bind(this);
    this.checkValidity = this.checkValidity.bind(this);
  }

  componentDidMount() {
    const localPaychecks = JSON.parse(localStorage.getItem('paychecks'));

    if (localPaychecks && localPaychecks.length) this.setState({ paychecks: localPaychecks });
  }

  submitForm(e) {
    e.preventDefault();
    const { steps, valid } = this.state;
    if (!valid) return null;
    const data = {
      pay_rate: (steps.hourlyWage.value / 100) * (steps.hours.value / 100),
      filing_status: steps.filingStatus.value,
      state: steps.usState.value,
      pay_periods: steps.payFrequency.value,
      exemptions: steps.exemptions.value,
    };
    this.setState({ showPaycheck: true });
    return axios({
      method: 'post',
      url: `https://taxee.io/api/v2/calculate/${(new Date()).getFullYear()}`,
      data: queryString.stringify(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: authToken,
      },
    }).then((response) => {
      const { paychecks, paychecksSubmitted } = this.state;
      const taxes = response.data;
      const newPaycheck = {
        id: `paycheck${paychecksSubmitted}${new Date().getTime()}`,
        gross: (steps.hourlyWage.value) * (steps.hours.value / 100),
        net: ((steps.hourlyWage.value) * (steps.hours.value / 100))
          - Math.round(
            (taxes.per_pay_period.federal.amount
              + taxes.per_pay_period.fica.amount
              + taxes.per_pay_period.state.amount)
            * 100,
          ),
        hourlyWage: steps.hourlyWage.value,
        hours: steps.hours.value,
        filingStatus: steps.filingStatus.options
          .find(option => steps.filingStatus.value === option.value).text,
        payFrequency: steps.payFrequency.options
          .find(option => steps.payFrequency.value == option.value).text,
        usState: steps.usState.value,
        exemptions: steps.exemptions.value,
        taxes,
      };
      paychecks.unshift(newPaycheck);

      const cleanSteps = Object.keys(steps).reduce((stepAccu, stepName) => {
        const newStepAccu = stepAccu;
        newStepAccu[stepName] = steps[stepName];
        newStepAccu[stepName].complete = false;
        newStepAccu[stepName].valid = true;

        return stepAccu;
      }, {});

      const trimedPaychecks = paychecks.slice(0, 15);

      localStorage.setItem('paychecks', JSON.stringify(trimedPaychecks));

      this.setState({
        paychecks: trimedPaychecks,
        paychecksSubmitted: paychecksSubmitted + 1,
        currentStep: 0,
        steps: cleanSteps,
        paycheckReceived: true,
        paycheckToShow: paychecks[0],
      });
    }).catch((error) => {
      this.setState({
        paycheckError: error.response.data.description,
        currentStep: 0,
      });
    });
  }

  closePaycheck(e) {
    const { type, key } = e;
    if (type === 'keydown' && key !== 'Enter') return false;
    return this.setState({ showPaycheck: false, paycheckReceived: false });
  }

  nextStep(currentStep) {
    const { steps } = this.state;
    steps[Object.keys(steps)[currentStep]].complete = true;
    this.setState({ currentStep: currentStep + 1, steps, valid: this.checkValidity() });
  }

  changeActiveStep(step) {
    this.setState({ currentStep: step, valid: this.checkValidity() });
  }

  checkValidity() {
    const { steps } = this.state;
    const inValid = Object.keys(steps).find((stepName) => {
      if (steps[stepName].constructor.name === 'NumInput') {
        return !(!Number.isNaN(steps[stepName].value) && steps[stepName].value >= (steps[stepName].min * 100) && ((steps[stepName].value <= steps[stepName].max) || (steps[stepName].max === null)));
      }
      return steps[stepName].valid === false;
    });

    if (inValid) return false;
    return true;
  }

  changeValue(value, key, valid) {
    const { steps } = this.state;
    steps[key].value = value;
    steps[key].valid = valid;
    steps[key].complete = true;

    this.setState({ steps });
  }

  toggleMenu() {
    const { historyOpen } = this.state;
    this.setState({ historyOpen: !historyOpen, historyClickedOnce: true });
  }

  showPaycheck(id) {
    const { paychecks } = this.state;
    const paycheck = paychecks.find(check => check.id === id);

    this.setState({ paycheckToShow: paycheck, showPaycheck: true, paycheckReceived: true });
  }

  closeTaxBrackets() {
    this.setState({ openTaxBrackets: false });
  }

  render() {
    const {
      steps,
      currentStep,
      paycheckError,
      showPaycheck,
      paycheckReceived,
      paychecks,
      historyOpen,
      historyClickedOnce,
      paycheckToShow,
      openTaxBrackets,
      valid,
    } = this.state;
    return (
      <MainTemplate>
        <PaycheckList
          paychecks={paychecks}
          open={historyOpen}
          toggleMenu={this.toggleMenu}
          clickedOnce={historyClickedOnce}
          showPaycheck={this.showPaycheck}
        />
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
          valid={valid}
        />
        {showPaycheck && !paycheckError
          ? (
            <Paycheck
              check={paycheckToShow}
              paycheckReceived={paycheckReceived}
              closePaycheck={this.closePaycheck}
            />
          )
          : null}
        {paycheckError ? <Error message={paycheckError} /> : null}
        {openTaxBrackets ? <TaxBrackets closeTaxBrackets={this.closeTaxBrackets} /> : null}
      </MainTemplate>
    );
  }
}

export default Index;
