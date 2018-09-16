import css from 'styled-jsx/css';

const fieldsCSS = css`
  li {
    margin: 0.25rem;
    font-size: 1.5rem;
    min-width: 33%;
    display: flex;
    flex-direction: column;

    a:link, a:visited {
      padding: 0.5rem;
      text-decoration: none;
      text-align: center;
      transition: transform 0.5s;

      span {
        display: block;
        flex: 0;
        color: white;
      }

      span.label {
        font-size: 1.125rem;
        margin-bottom: 0.25rem;
      }

      :hover, :focus {
        outline: none;
        transform: scale(1.1);
      }
    }
  }
`;

export default fieldsCSS;
