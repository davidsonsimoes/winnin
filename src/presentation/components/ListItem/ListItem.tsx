
import React from 'react';
import {ListItemWrapper} from './style';

interface IProps {
  children: React.ReactNode;
}

const ListItem: React.FC<IProps> = ({ children }) => {
  return <ListItemWrapper>{children}</ListItemWrapper>;
};

export default ListItem;