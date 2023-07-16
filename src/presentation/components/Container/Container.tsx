import React from 'react';
import { ContainerWrapper } from './style';

interface IProps {
 children: React.ReactNode;
}

const Container: React.FC<IProps> = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;