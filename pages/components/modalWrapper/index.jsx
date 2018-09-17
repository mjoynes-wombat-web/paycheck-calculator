import React from 'react';
import PropTypes from 'prop-types';

import CloseButton from './closeButton';
import colors from '../../../consts/colors';

const ModalWrapper = ({ children, close }) => (
  <div className="wrapper" onClick={close} onKeyDown={close} role="button" tabIndex={0}>
    <style jsx>
      {`
      .wrapper {
        color: white;
        position: fixed;
        width: 100vw;
        height: 100vh;
        overflow: scroll;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${colors.midnightNavy(0.95)};
        transition: box-shadow 0.5s;
        z-index: 200;

        :focus {
          box-shadow: inset 0 0 1rem ${colors.vividGreen()};
        }

        .padding {
          padding: 4rem;
          overflow: scroll;
        }
      }
      `}
    </style>
    <div className="padding">
      {children}
    </div>
    <CloseButton close={close} />
  </div>
);

ModalWrapper.propTypes = {

};

export default ModalWrapper;
