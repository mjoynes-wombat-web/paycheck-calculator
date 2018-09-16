import React from 'react';
import PropTypes from 'prop-types';

import colors from '../../../consts/colors';

const Close = ({ closePaycheck }) => (
  <button type="button" onClick={closePaycheck}>
    <style jsx>
      {`
      button {
        margin: 1rem;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 2.5rem;
        background-color: transparent;
        border: none;
        font-family: Raleway, open-sans;
        color: ${colors.vividGreen()};
        transition: transform 0.5s;
        transform-origin: top right;

        :focus {
          outline: none;
          transform: scale(1.3);
        }
      }
      `}
    </style>
    X
  </button>
);

Close.propTypes = {
  closePaycheck: PropTypes.func.isRequired,
};

export default Close;
