import React from 'react';
import PropTypes from 'prop-types';

import PaycheckItem from './paycheckItem';
import colors from '../../../consts/colors';

const PaycheckList = ({
  paychecks, open, toggleMenu, clickedOnce,
}) => (
  <nav className={open ? 'open' : ''}>
    <style jsx>
      {`
      nav {
        color: white;
        position: absolute;
        right: 0;
        top: 0;
        padding: 2rem;
        background-color: ${colors.midnightNavy(0.95)};
        min-height: 100%;
        z-index: 100;
        border-left: 0.125rem solid rgba(255, 255, 255, 0.10);
        transform: translateX(100%);
        transition: transform 0.5s;
        box-sizing: border-box;

        &.open {
          transform: translateX(0);
        }

        button {
          @keyframes pulse {
            0% { transform: translateX(-100%); };
            50% { transform: scale(1.1) translateX(-100%); };
            100% { transform: translateX(-100%); };
          }
          transform: translateX(-100%);
          box-sizing: border-box;
          position: absolute;
          padding: 1rem;
          left: 0;
          top: 0;
          background-color: transparent;
          border: none;
          color: ${colors.vividGreen()};
          transition: transform 0.5s;
          font-family: Raleway, sans-serif;
          transform-origin: top right;
          font-size: 1.25rem;
          animation-name: pulse;
          animation-duration: 1.5s;
          animation-iteration-count: infinite;

          :focus, :hover {
            outline: none;
            transform: scale(1.1) translateX(-100%);
          }

          &.clicked {
            animation-name: none;
          }
        }
        article {
          table {
            th {
              vertical-align: bottom;
              font-family: 'Raleway', sans-serif;
              font-size: 1.25rem;
              font-weight: normal;
            }
            th, :global(td) {
              padding: 0.5rem 0.75rem;
              text-align: left;
            }
            th:not(:last-child):not(:nth-last-child(2)), :global(td:not(:last-child):not(:nth-last-child(2))) {
              border-right: 0.125rem solid rgba(255, 255, 255, 0.25);
            }
            th.not-mobile, :global(td.not-mobile) {
              @media screen and (max-width: 750px) {
                display: none;
              }
            }
          }
        }
      }
      `}
    </style>
    {paychecks.length ? <button className={clickedOnce ? 'clicked' : ''} type="button" onClick={toggleMenu}>{open ? 'X' : 'History'}</button> : null }
    <article className="list">
      {paychecks.length ? (
        <>
          <h2>Paychecks</h2>
          <table>
            <thead>
              <tr>
                <th>Hourly Wage</th>
                <th>Hours</th>
                <th className="not-mobile">Filing Status</th>
                <th className="not-mobile">US State</th>
                <th className="not-mobile">Pay Frequency</th>
                <th className="not-mobile">Exemptions</th>
                <th>Net</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {paychecks.map(paycheck => <PaycheckItem key={paycheck.id} paycheck={paycheck} />)}
            </tbody>
          </table>
        </>
      ) : <h2>No Paychecks</h2>}
    </article>
  </nav>
);

PaycheckList.propTypes = {

};

export default PaycheckList;
