import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    cursor: default;
    margin: 0;
    padding: 0;
  }

  input, button {
    background-color: ${(props) => props.theme.white};
    border-radius: 0.25rem;
    border: 1px solid ${(props) => props.theme['gray-200']};
    outline: none;
    width: 100%;
    transition: border-color ${(props) => props.theme['transition-duration']};
    &:hover {
      border-color: ${(props) => props.theme['gray-400']};
    }
    &:focus {
      border-color: ${(props) => props.theme['gray-600']};
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme['gray-900']};
  }

  p {
    line-height: 135%;
    color: ${(props) => props.theme['gray-800']};
  }

  body, input, button, textarea, abbr {
    font: normal 400 1rem ${(props) => props.theme['font-sans']};
    text-decoration: none;
  }
`;

export { GlobalStyle };
