import React from 'react';
import PropTypes from 'prop-types';

import colors from '../../consts/colors';

const Error = ({ message }) => (
  <div className={`error ${message ? 'active' : ''}`}>
    <style jsx>
      {`
      div.error {
        @keyframes fade-in-error {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes shake-error-text {
          25% {
            transform: translateX(-0.5rem);
          }
          50% {
            transform: translateX(0.5rem);
          }
          75% {
            transform: translateX(-0.5rem);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        background-color: ${colors.errorRed()};
        width: 100%;
        position: fixed;
        bottom: 0;
        overflow: auto;
        opacity: 0;

        &.active {
          animation-name: fade-in-error;
          animation-duration: 0.25s;
          opacity: 1;

          p {
            animation-name: shake-error-text;
            animation-duration: 0.5s;
            animation-delay: 0.25s;
          }
        }

        p {
          color: white;
          font-size: 2rem;
          text-align: center;
          margin: 1rem;
        }
      }
      `}
    </style>
    <p>{message}</p>
  </div>
);

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
