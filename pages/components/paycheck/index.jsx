import React from 'react';
import PropTypes from 'prop-types';

import DetailItem from './list-items/detail';

const Paycheck = ({ check }) => (
  <article className="paycheck">
    <h2 className="net-pay">Check Amount:{`$${(check.net / 100).toFixed(2)}`}</h2>
    <h3 className="gross-pay">Gross Pay:{`$${(check.gross / 100).toFixed(2)}`}</h3>
    <section className="taxes">
      <ul>
        <DetailItem label="Federal Withholding" detail={`$${check.taxes.per_pay_period.federal.amount.toFixed(2)}`} />
        <DetailItem label="FICA" detail={`$${check.taxes.per_pay_period.fica.amount.toFixed(2)}`} />
        <DetailItem label="State Withholding" detail={`$${check.taxes.per_pay_period.state.amount.toFixed(2)}`} />
      </ul>
    </section>
    <section className="details">
      <ul>
        <DetailItem label="Exemptions" detail={check.exemptions} />
        <DetailItem label="Filing Status" detail={check.filingStatus} />
        <DetailItem label="Hourly Wage" detail={`$${(check.hourlyWage / 100).toFixed(2)}`} />
        <DetailItem label="Hours" detail={check.hours / 100} />
        <DetailItem label="Pay Frequency" detail={check.payFrequency} />
        <DetailItem label="State" detail={check.usState} />
      </ul>
    </section>
  </article>
);

Paycheck.propTypes = {

};

export default Paycheck;
