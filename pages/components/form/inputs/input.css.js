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
    width: 50%;

    &.active {
      opacity: 1;
      pointer-events: all;
    }

    &.error {
      input, select {
        border-color: ${colors.errorRed()};
      }

      p.instructions {
        visibility: initial;
        opacity: 1;
      }
    }

    p.instructions {
      visibility: hidden;
      opacity: 0;
      margin: 0;
      margin-top: -1rem;
      color: ${colors.errorRed()};
      text-align: center;
      transition: opacity 0.5s;
    }

    label {
      color: white;
      font-size: 2rem;
      margin: 2rem;
      text-align: center;
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
      transition: transform 0.5s, box-shadow 0.5s, border-color 0.5s;

      :focus, :hover {
        outline: none;
        transform: scale(1.05);
        box-shadow: 0.125rem 0.125rem 0.125rem black;
      }
    }
  }
`;

export default inputCSS;
