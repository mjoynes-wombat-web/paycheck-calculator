import React from 'react';
import PropTypes from 'prop-types';

import colors from '../../../../consts/colors';

const TabButton = ({
  changeTab, text, id, currentTab,
}) => (
  <button type="button" onClick={e => changeTab(id, e)} className={currentTab === id ? 'active' : ''}>
    <style jsx>
      {`
      button {
        background-color: transparent;
        border: 0.125rem solid ${colors.vividGreen()};
        font-family: Raleway, sans-serif;
        font-size: 1.5rem;
        padding: 1.25rem;
        flex: 1;
        border-top-right-radius: 0.5rem;
        border-top-left-radius: 0.5rem;
        box-sizing: border-box;
        background-color: ${colors.vividGreen(0.1)};
        color: white;
        transition: background-color 0.5s;

        &.active {
          border-bottom: none;
          background-color: transparent;
        }

        span {
          display: block;
          transition: transform 0.5s;
        }

        :hover, :focus {
          background-color: transparent;
          outline: none;

          span.text {
            transform: scale(1.1);
          }
        }
      }
      `}
    </style>
    <span className="text">{text}</span>
  </button>
);

TabButton.propTypes = {
  changeTab: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  currentTab: PropTypes.string.isRequired,
};

export default TabButton;
