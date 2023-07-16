import React from 'react';
import { ThemeProvider } from 'styled-components';
import { RedditProvider } from '@context/RedditContext';
import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RedditProvider>
        <div className="App">
            <p>
              home
            </p>
        </div>
      </RedditProvider>
    </ThemeProvider>
  );
};

export default App;
