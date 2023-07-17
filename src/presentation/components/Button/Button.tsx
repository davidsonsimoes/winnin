import React from 'react';
import { MenuButton } from './style';

interface IProps {
  children: React.ReactNode;
  isActive: boolean;
  onMenuClick: () => void;
}

const Button = (props: IProps) => {
  return <MenuButton onClick={props.onMenuClick} isActive={props.isActive}>{props.children}</MenuButton>;
};

export default Button;