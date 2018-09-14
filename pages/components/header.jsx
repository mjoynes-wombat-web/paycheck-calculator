import React from 'react';

import colors from '../../consts/colors';

const Header = () => (
  <header>
    <style jsx>
      {`
        header {
          overflow: auto;
          padding: 3rem;

          h1 {
            color: ${colors.vividGreen()};
            margin: 0;
            font-size: 2.5rem;
          }
        }
      `}
    </style>
    <h1>Paycheck Calculator</h1>
  </header>
);

export default Header;
