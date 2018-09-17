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
      font-size: 1.25rem;
      visibility: hidden;
      opacity: 0;
      margin: 0;
      margin-top: -1rem;
      color: ${colors.errorRed()};
      text-align: center;
      transition: opacity 0.5s;
      max-width: 35ch;
      margin: 0 auto;
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

    select {
      background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='white'><polygon points='0,0 100,0 50,50'/></svg>") ;
      background-size: 1rem;
      background-position: calc(100% - 2rem) 60%;
      background-repeat: no-repeat;
    }
  }
`;

export default inputCSS;
