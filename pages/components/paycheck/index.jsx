import React from 'react';
import PropTypes from 'prop-types';

import colors from '../../../consts/colors';

import DetailItem from './list-items/detail';
import CloseButton from './closeButton';

const Paycheck = ({ check, paycheckReceived, closePaycheck }) => (
  <div className="wrapper" onClick={closePaycheck} onKeyDown={closePaycheck} role="button" tabIndex={0}>
    <style jsx>
      {`
      .wrapper {
        color: white;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${colors.midnightNavy(0.95)};
        box-sizing: border-box;
        overflow: scroll;
        padding: 4rem;
        transition: box-shadow 0.5s;

        :focus {
          box-shadow: inset 0 0 1rem ${colors.vividGreen()};
        }

        article {
          box-sizing: border-box;
          max-height: 100%;
          h1 {
            font-size: 2.5rem;

            &.calculating {
              font-size: 3.5rem;
            }
          }
          

          .paycheck-info {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 4rem;
            > * {
              min-width: 50%;
            }

            section {
              @media screen and (max-width: 700px) {
                min-width: 75%;
              }

              h3 {
                margin-bottom: 1rem;
              }
            }

            h2, h3 {
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
            }

            h2 {
              font-size: 2.5rem;

              span {
                display: block;

                &.label {
                  font-size: 1.5rem;
                  margin-bottom: 0.75rem;
                }
              }
            }
            h3 {
              font-size: 2.25rem;

              span {
                display: block;

                &.label {
                  font-size: 1.25rem;
                  margin-bottom: 0.5rem;
                }
              }
            }

            ul {
              padding: 0;
              margin: 0;
              list-style: none;
            }
          }
        }
      }
      `}
    </style>
    <article className="paycheck">
      {paycheckReceived ? (
        <>
          <h1>Paycheck</h1>
          <div className="paycheck-info">
            <h2 className="net-pay">
              <span className="label">Check Amount:</span>
              <span className="text">{`$${(check.net / 100).toFixed(2)}`}</span>
            </h2>
            <h3 className="gross-pay">
              <span className="label">Gross Pay:</span>
              <span className="text">{`$${(check.gross / 100).toFixed(2)}`}</span>
            </h3>
            <section className="taxes">
              <h3>Taxes</h3>
              <ul>
                <DetailItem label="Federal Withholding" detail={`$${check.taxes.per_pay_period.federal.amount.toFixed(2)}`} />
                <DetailItem label="FICA" detail={`$${check.taxes.per_pay_period.fica.amount.toFixed(2)}`} />
                <DetailItem label="State Withholding" detail={`$${check.taxes.per_pay_period.state.amount.toFixed(2)}`} />
              </ul>
            </section>
            <section className="details">
              <h3>Details</h3>
              <ul>
                <DetailItem label="Exemptions" detail={check.exemptions} />
                <DetailItem label="Filing Status" detail={check.filingStatus} />
                <DetailItem label="Hourly Wage" detail={`$${(check.hourlyWage / 100).toFixed(2)}`} />
                <DetailItem label="Hours" detail={check.hours / 100} />
                <DetailItem label="Pay Frequency" detail={check.payFrequency} />
                <DetailItem label="State" detail={check.usState} />
              </ul>
            </section>
            <CloseButton closePaycheck={closePaycheck} />
          </div>
        </>
      ) : (
        <h1 className="calculating">Calculating</h1>
      )}
    </article>
  </div>
);

Paycheck.propTypes = {
  check: PropTypes.shape({
    net: PropTypes.number,
    gross: PropTypes.number,
    taxes: PropTypes.shape({
      per_pay_period: PropTypes.shape({
        federal: PropTypes.shape({
          amount: PropTypes.number,
        }),
        fica: PropTypes.shape({
          amount: PropTypes.number,
        }),
        state: PropTypes.shape({
          amount: PropTypes.number,
        }),
      }),
    }),
    exemptions: PropTypes.number,
    filingStatus: PropTypes.string,
    hourlyWage: PropTypes.number,
    hours: PropTypes.number,
    payFrequency: PropTypes.string,
    usState: PropTypes.string,
  }),
  paycheckReceived: PropTypes.bool.isRequired,
  closePaycheck: PropTypes.func.isRequired,
};

Paycheck.defaultProps = {
  check: {},
};

export default Paycheck;
