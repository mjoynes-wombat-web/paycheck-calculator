import React from 'react';
import PropTypes from 'prop-types';

import colors from '../../../consts/colors';

const PaycheckItem = ({ paycheck, showPaycheck }) => (
  <tr>
    <style jsx>
      {`
      tr {
        td {
          font-size: 1.125rem;
          padding: 0.75rem;
          a:link, a:visited {
            color: ${colors.vividGreen()};
            text-decoration: none;
            transition: transform 0.5s;
            display: inline-block;

            :focus, :hover {
              transform: scale(1.2);
              outline: none;
            }
          }
        }
      }
      `}
    </style>
    <td>{`$${(paycheck.hourlyWage / 100).toFixed(2)}`}</td>
    <td>{(paycheck.hours / 100).toFixed(2)}</td>
    <td className="not-mobile">{paycheck.filingStatus}</td>
    <td className="not-mobile">{paycheck.usState}</td>
    <td className="not-mobile">{paycheck.payFrequency}</td>
    <td className="not-mobile">{paycheck.exemptions}</td>
    <td>{`$${(paycheck.net / 100).toFixed(2)}`}</td>
    <td><a href={`#${paycheck.id}`} onClick={() => showPaycheck(paycheck.id)}>View</a></td>
  </tr>
);

PaycheckItem.propTypes = {

};

export default PaycheckItem;
