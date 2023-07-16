import React from 'react';
import { ListWrapper } from './style';

interface IProps {
  children: React.ReactNode;
}

const List: React.FC<IProps> = ({ children }) => {
  return <ListWrapper>{children}</ListWrapper>;
};

export default List;