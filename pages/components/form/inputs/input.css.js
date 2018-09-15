import css from 'styled-jsx/css';

import colors from '../../../../consts/colors';

const inputCSS = css`
  .input-wrapper {
    opacity: 0;
    position: absolute;
    transition: opacity 1s;
    display: flex;
    flex-direction: column;
    pointer-events: none;

    &.active {
      opacity: 1;
      pointer-events: all;
    }

    label {
      color: white;
      font-size: 2rem;
      margin: 2rem;
    }

    input, select {
      margin: 2rem;
      background-color: transparent;
      border: 0.125rem solid ${colors.vividGreen()};
      border-radius: 0.5rem;
      padding: 1rem;
      color: white;
      font-size: 2rem;
      appearance: none;
    }
  }
`;

export default inputCSS;
