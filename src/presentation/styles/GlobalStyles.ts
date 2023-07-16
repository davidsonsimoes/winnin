import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.font.family};
    font-weight: ${({ theme }) => theme.font.weights.regular};
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export default GlobalStyles;