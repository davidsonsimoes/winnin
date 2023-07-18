
import React, { useState } from 'react';
import { HeaderWrapper } from './style';
import logo from '@assets/logo.svg';
import Toggle from '@components/ToggleButton';

type HeaderType = {
  toggleDarkMode: () => void
}
const Header = ({toggleDarkMode}: HeaderType) => {
  const [isDarkMode, ] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode === 'true';
  });

  
  return (
    <HeaderWrapper>
      <img src={logo} className="App-logo" alt="logo" />
      <Toggle
        label="Dark Mode"
        toggled={isDarkMode}
        onClick={toggleDarkMode}
      />
    </HeaderWrapper>
  );
};

export default Header;