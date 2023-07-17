import React from 'react';
import { MenuButton } from './style';

interface IProps {
  children: React.ReactNode;
  isactive: boolean;
  onMenuClick: () => void;
}

const Button = (props: IProps) => {
  return <MenuButton menuActive={props.isactive} onClick={props.onMenuClick} {...props}>{props.children}</MenuButton>;
};

export default Button;