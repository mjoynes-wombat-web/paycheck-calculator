import React from 'react';
import PropTypes from 'prop-types';

import TabButton from './tabButton';

const Tabs = ({ changeTab, currentTab }) => (
  <div className="tabs">
    <style jsx>
      {`
      .tabs {
        width: 100%;
        display: flex;
      }
      `}
    </style>
    <TabButton changeTab={changeTab} text="Head of Household" id="head_of_household" currentTab={currentTab} />
    <TabButton changeTab={changeTab} text="Married" id="married" currentTab={currentTab} />
    <TabButton changeTab={changeTab} text="Married Filing Separately" id="married_separately" currentTab={currentTab} />
    <TabButton changeTab={changeTab} text="Single" id="single" currentTab={currentTab} />
  </div>
);

Tabs.propTypes = {
  changeTab: PropTypes.func.isRequired,
};

export default Tabs;
