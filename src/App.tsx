import React from 'react';
import { ThemeProvider } from 'styled-components';
import { RedditProvider } from '@context/RedditContext';
import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';
import HomePage from '@pages/HomePage';
import { getRedditPosts } from '@data/repositories/PostRepository';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RedditProvider getRedditPosts={getRedditPosts}>
        <HomePage />
      </RedditProvider>
    </ThemeProvider>
  );
};

export default App;
