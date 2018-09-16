import React from 'react';
import PropTypes from 'prop-types';

const PaycheckItem = ({ paycheck }) => (
  <tr>
    <td>{`$${(paycheck.hourlyWage / 100).toFixed(2)}`}</td>
    <td>{(paycheck.hours / 100).toFixed(2)}</td>
    <td className="not-mobile">{paycheck.filingStatus}</td>
    <td className="not-mobile">{paycheck.usState}</td>
    <td className="not-mobile">{paycheck.payFrequency}</td>
    <td className="not-mobile">{paycheck.exemptions}</td>
    <td>{`$${(paycheck.net / 100).toFixed(2)}`}</td>
    <td><a href={`#${paycheck.id}`}>View</a></td>
  </tr>
);

PaycheckItem.propTypes = {

};

export default PaycheckItem;
