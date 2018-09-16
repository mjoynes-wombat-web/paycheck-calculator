import React from 'react';
import PropTypes from 'prop-types';

import colors from '../../consts/colors';

const Progress = ({ steps, changeActiveStep, currentStep }) => {
  const completion = (((currentStep + 1) / Object.keys(steps).length) - (0.5 / Object.keys(steps).length)) * 100;
  return (
    <nav className="progress">
      <style jsx>
        {`
          @keyframes error-shake {
            25% {
              transform: translateX(-0.25rem);
            }
            50% {
              transform: translateX(0.25rem);
            }
            75% {
              transform: translateX(-0.25rem);
            }
            100% {
              transform: translateX(0);
            }
          }
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

              &.current {
                a {
                  transform: scale(1.1) translateY(0.25rem);

                  :focus, :hover {
                    transform: none;
                  }
                }
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

                &.invalid {
                  :before, a {
                    color: ${colors.errorRed()};
                    animation-name: error-shake;
                    animation-duration: 0.5s;
                    animation-delay: 0.5s;
                  }
                }
              }
            }
          }
          `}
      </style>
      <span
        className="progress-bar"
        style={{
          transform: `scaleX(${Math.min(completion / 100, 1)})`,
        }}
      >
        {completion}% Done
      </span>
      <ul>
        {Object.keys(steps).map((stepName, i) => (
          <li key={steps[stepName].id} className={`${steps[stepName].complete ? 'complete' : ''} ${steps[stepName].valid ? '' : 'invalid'} ${currentStep === i ? 'current' : ''}`}>
            <a href={`#${steps[stepName].id}`} type="button" onClick={() => changeActiveStep(i)} aria-current={currentStep === i ? 'step' : null}>
              {steps[stepName].shortLabel}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Progress.propTypes = {
  steps: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.text,
    text: PropTypes.text,
  })).isRequired,
  changeActiveStep: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default Progress;
