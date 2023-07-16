import React from 'react';
import { ThemeProvider } from 'styled-components';
import { RedditProvider } from '@context/RedditContext';
import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';
import HomePage from '@pages/HomePage';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RedditProvider>
        <HomePage />
      </RedditProvider>
    </ThemeProvider>
  );
};

export default App;
