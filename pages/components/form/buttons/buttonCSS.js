import css from 'styled-jsx/css';

import colors from '../../../../consts/colors';

const buttonCSS = css`
  button {
    background-color: ${colors.vividGreen()};
    border: none;
    color: ${colors.midnightNavy()};
    transition: transform 0.5s, background-color 0.5s;
    font-family: Raleway, sans-serif;
    font-size: 1.75rem;
    padding: 0.75rem;
    width: 50%;
    border-radius: 0.5rem;
    align-self: center;
    margin: 3rem;

    &:focus, &:hover {
      transform: scale(1.1);
      outline: none;
    }

    &:disabled {
      background-color: ${colors.errorRed()};
      cursor: not-allowed;
    }
  }
`;

export default buttonCSS;
