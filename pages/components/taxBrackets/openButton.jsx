import React from 'react';
import PropTypes from 'prop-types';

import colors from '../../../consts/colors';

const OpenTaxBrackets = ({ toggleTaxBrackets }) => (
  <button type="button" onClick={toggleTaxBrackets}>
    <style jsx>
      {`
      button {
        background-color: transparent;
        border: none;
        color: ${colors.vividGreen()};
        position: fixed;
        bottom: 0;
        left: 0;
        padding: 1rem;
        font-size: 1.25rem;
        transition: transform 0.5s;
        font-family: Raleway,sans-serif;
        transform-origin: bottom left;

        :hover, :focus {
          outline: none;
          transform: scale(1.1);
        }
      }
      `}
    </style>
    View Tax Brackets
  </button>
);

OpenTaxBrackets.propTypes = {
  toggleTaxBrackets: PropTypes.func.isRequired,
};

export default OpenTaxBrackets;
