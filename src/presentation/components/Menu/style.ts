import styled, { css } from 'styled-components';

interface MenuButtonProps {
 isactive: boolean;
}

export const MenuWrapper = styled.nav`
  padding: 20px;
  text-align: center;
`;

export const MenuButton = styled.button.attrs<MenuButtonProps>((props) => ({
    isactive: props.isactive,
  }))<MenuButtonProps>`
  width: 202px;
  height: 48px;
  flex-shrink: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  border: none;
  font-size: 20px;
  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme }) => theme.font.weights.regular};
  margin: 0 10px;
  ${({ isactive }) =>
    isactive &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
    `};
`;