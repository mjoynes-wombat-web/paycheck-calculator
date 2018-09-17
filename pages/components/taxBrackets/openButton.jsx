import React from 'react';
import PropTypes from 'prop-types';

const OpenTaxBrackets = ({ toggleTaxBrackets }) => (
  <button type="button" onClick={toggleTaxBrackets}>
      View Tax Brackets
  </button>
);

OpenTaxBrackets.propTypes = {
  toggleTaxBrackets: PropTypes.func.isRequired,
};

export default OpenTaxBrackets;
