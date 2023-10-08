import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    cursor: default;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
  }

  body, input, button, textarea, abbr {
    font: normal 400 1rem sans-serif;
    text-decoration: none;
  }
`;

export { GlobalStyle };
