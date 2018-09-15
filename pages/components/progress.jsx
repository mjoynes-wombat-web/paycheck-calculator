import React from 'react';
import PropTypes from 'prop-types';

import colors from '../../consts/colors';

const Progress = ({ steps, changeActiveStep, currentStep }) => {
  const completion = ((currentStep / steps.length) - (0.5 / steps.length)) * 100;
  return (
    <nav className="progress">
      <style jsx>
        {`
          span.progress-bar {
            display: inline-block;
            color: transparent;
            width: 100%;
            transform-origin: left;
            transition: transform 0.5s;
            background-color: ${colors.vividGreen()};
            line-height: 0;
            height: 0.125rem;
            position: absolute;
          }
          ul {
            display: flex;
            padding: 0;
            list-style: none;
            justify-content: space-around;
            color: white;
            border-top: 0.125rem solid white;
            transition: border-image-source 0.5s;

            li {
              flex: 1;
              display: flex;
              align-content: center;
              flex-direction: column;
              position: relative;

              :before {
                content: "•";
                text-align: center;
                position: relative;
                line-height: 0;
                font-size: 2rem;
                top: -0.0625rem;
                transition: color 0.5s linear 0.25s;
              }

              a:link, a:visited {
                text-decoration: none;
                text-align: center;
                color: white;
                padding: 1rem;
                transition: color 0.5s linear 0.25s, transform 0.5s;
                font-size: 1.25rem;

                :focus, :hover {
                  outline: none;
                  transform: scale(1.1) translateY(0.25rem);
                }
              }

              &.complete {
                :before, a {
                  color: ${colors.vividGreen()}
                }
              }
            }
          }
          `}
      </style>
      <span
        className="progress-bar"
        style={{
          transform: `scaleX(${completion / 100})`,
        }}
      >
        {completion}% Done
      </span>
      <ul>
        {steps.map((step, i) => (
          <li key={step.id} className={`${step.complete ? 'complete' : ''} ${currentStep > i ? 'complete' : ''}`}>
            <a href={`#${step.id}`} type="button" onClick={() => changeActiveStep(step.id)}>
              {step.shortLabel}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Progress.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.text,
    text: PropTypes.text,
  })).isRequired,
  changeActiveStep: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default Progress;
