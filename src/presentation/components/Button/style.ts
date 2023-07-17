import styled, {css} from 'styled-components';

interface MenuButtonProps {
  menuActive: boolean;
 }


export const MenuButton = styled.button.attrs<MenuButtonProps>((props) => ({
  menuActive: props.menuActive,
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
${({ menuActive }) =>
  menuActive &&
  css`
    background-color: ${({ theme }) => theme.colors.primary};
  `};
`;