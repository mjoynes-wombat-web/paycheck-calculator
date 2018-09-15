import React from 'react';
import PropTypes from 'prop-types';

import SubmitButton from './buttons/submit';

const Confirmation = ({ steps, currentStep, changeActiveStep }) => (
  <div className={`confirmation ${currentStep > steps.length - 1 ? 'active' : ''}`}>
    <style jsx>
      {`
      .confirmation {
        opacity: 0;
        transition: 1s opacity;
        width: 50%;
        pointer-events: none;
        display: flex;
        flex-direction: column;
        padding: 2rem;

        &.active {
          opacity: 1;
          pointer-events: all;
        }

        ul {
          padding: 0;
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin: 0;

          li {
            margin: 0.25rem;
            font-size: 1.5rem;
            min-width: 33%;
            display: flex;
            flex-direction: column;

            a:link, a:visited {
              padding: 0.5rem;
              text-decoration: none;
              text-align: center;
              transition: transform 0.5s;

              span {
                display: block;
                flex: 0;
                color: white;
              }

              span.label {
                font-size: 1.125rem;
                margin-bottom: 0.25rem;
              }

              :hover, :focus {
                outline: none;
                transform: scale(1.1);
              }
            }
          }
        }
      }
      `}
    </style>
    <ul>
      {steps.map((step, i) => (
        <li key={step.id}>
          <a href={`#${step.id}`} onClick={() => changeActiveStep(i)}>
            <span className="label">{step.shortLabel}:</span>
            <span className="value">{step.step === 0.01 ? (step.value / 100).toFixed(2) : step.value}</span>
          </a>
        </li>
      ))}
    </ul>
    <SubmitButton />
  </div>
);

Confirmation.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  })).isRequired,
  currentStep: PropTypes.number.isRequired,
  changeActiveStep: PropTypes.func.isRequired,
};

export default Confirmation;
