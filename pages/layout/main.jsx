import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'normalize-css';

import Header from '../components/header';
import colors from '../../consts/colors';


const MainTemplate = ({ pageTitle, children }) => (
  <main>
    <Head>
      <title>{pageTitle}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans|Raleway" rel="stylesheet" />
    </Head>
    <style global jsx>
      {`
      html {
        font-size: 0.625em;

        @media screen and (min-width: 700px) {
          font-size: 0.75em;
        }

        @media screen and (min-width: 1000px) {
          font-size: 0.875em;
        }

        @media screen and (min-width: 1400px) {
          font-size: 1em;
        }

        @media screen and (min-width: 1800px) {
          font-size: 1.125em;
        }
      }
      body {
        font-family: 'Open Sans', sans-serif;
        background-color: ${colors.midnightNavy()};
      }

      h1, h2, h3, h4, h5, h6 {
        font-family: Raleway, sans-serif;
        font-weight: normal;
      }
      `}
    </style>
    <Header />
    {children}
  </main>
);

MainTemplate.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.element.isRequired,
};

MainTemplate.defaultProps = {
  pageTitle: 'Paycheck Calculator',
};

export default MainTemplate;
