import React, {useState, useEffect} from 'react';
import { ThemeProvider } from 'styled-components';
import { RedditProvider } from '@context/RedditContext';
import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';
import HomePage from '@pages/HomePage';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Recupera o valor do dark mode do localStorage ao carregar a aplicação
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode === 'true';
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
      <GlobalStyles />
      <RedditProvider>
        <HomePage toggleDarkMode={toggleDarkMode} />
      </RedditProvider>
    </ThemeProvider>
  );
};

export default App;
