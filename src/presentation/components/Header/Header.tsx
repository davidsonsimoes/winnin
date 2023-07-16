
import React from 'react';
import { HeaderWrapper } from './style';
import logo from '@assets/logo.svg';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <img src={logo} className="App-logo" alt="logo" />
    </HeaderWrapper>
  );
};

export default Header;