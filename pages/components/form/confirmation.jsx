import React from 'react';
import PropTypes from 'prop-types';

const Confirmation = ({ steps, currentStep }) => (
  <div className={`confirmation ${currentStep > steps.length - 1 ? 'active' : ''}`}>
    <style jsx>
      {`
      .confirmation {
        opacity: 0;
        transition: 1s opacity;
        width: 50%;
        pointer-events: none;

        &.active {
          opacity: 1;
          pointer-events: all;
        }

        ul {
          padding: 0;
          list-style: none;

          li {
            color: white;
            display: flex;

            span {
              display: block;
              flex: 1;
            }

            span.label {
              text-align: right;
            }
          }
        }
      }
      `}
    </style>
    <ul>
      {steps.map(step => (
        <li key={step.id}>
          <span className="label">{step.shortLabel}:</span>
          <span className="value">{step.step === 0.01 ? (step.value / 100).toFixed(2) : step.value}</span>
        </li>
      ))}
    </ul>
    <button type="submit">Submit</button>
  </div>
);

Confirmation.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  })).isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default Confirmation;
