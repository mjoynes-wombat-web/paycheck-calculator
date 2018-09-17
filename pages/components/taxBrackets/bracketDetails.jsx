import React from 'react';
import PropTypes from 'prop-types';

import colors from '../../../consts/colors';

const BracketDetails = ({ data }) => (
  <section className="bracket-details">
    <style jsx>
      {`
      section.bracket-details {
        border: 0.125rem solid ${colors.vividGreen()};
        border-top: none;
        overflow: auto;
        padding: 2rem;
        border-bottom-right-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;

        h2 {
          font-size: 2.25rem;
          margin-top: 1rem;
        }

        h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        section.deductions {
          p {
            span {
              margin-bottom: 0.25rem;
              display: block;
              &.label {
                font-size: 1rem;
              }
              &.amount {
                font-size: 2rem;
              }
            }
          }
        }

        section.tax-brackets {
          table {
            th {
              font-size: 1.125rem;
              vertical-align: center;
            }

            td {
              vertical-align: bottom;
            }
            th, td {
              padding: 0.375rem;
              text-align: left;

              :not(:last-child) {
                border-right: 0.125rem solid rgba(255, 255, 255, 0.5);
                padding-right: 1rem;
              }

              :not(:first-child) {
                padding-left: 1rem;
              }
            }
          }
        }
      }
      `}
    </style>
    <h2>Bracket Details</h2>
    <section className="deductions">
      <h3>Deductions</h3>
      {data.deductions.map(deduction => (
        <p>
          <span className="label">
            {deduction.deduction_name}:
          </span>
          <span className="amount">
            ${deduction.deduction_amount.toFixed(2)}
          </span>
        </p>
      ))}
    </section>
    <section className="tax-brackets">
      <h3>Tax Brackets</h3>
      <table>
        <thead>
          <tr>
            <th>Income Range</th>
            <th>Max Income Tax</th>
            <th>Income Tax Rate</th>
            <th>Capital Gains Tax Rate</th>
          </tr>
        </thead>
        <tbody>
          {data.income_tax_brackets.map((taxBracket, i) => (
            <tr>
              <td>${taxBracket.bracket.toFixed(2)}{i + 1 < data.income_tax_brackets.length ? ` - $${data.income_tax_brackets[i + 1].bracket.toFixed(2)}` : '+'}</td>
              <td>{i + 1 < data.income_tax_brackets.length ? `$${data.income_tax_brackets[i + 1].amount.toFixed(2)}` : ''}</td>
              <td>{taxBracket.marginal_rate}%</td>
              <td>{taxBracket.marginal_capital_gain_rate}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  </section>
);

BracketDetails.propTypes = {
  data: PropTypes.object,
};

export default BracketDetails;
