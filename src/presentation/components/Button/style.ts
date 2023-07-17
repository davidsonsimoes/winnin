import styled from 'styled-components';

interface MenuButtonProps {
  isActive: boolean;
 }

export const MenuButton = styled.button<MenuButtonProps>`
  width: 202px;
  height: 48px;
  flex-shrink: 0;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  cursor: pointer;
  border: none;
  font-size: 20px;
  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme }) => theme.font.weights.regular};
  margin: 0 10px;
`;