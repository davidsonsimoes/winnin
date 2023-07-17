import styled from 'styled-components';

export const HomePageWrapper = styled.div``;

export const ButtonStyle = styled.button`
  width: 100%;
  margin: 20px 0;
  height: 48px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  cursor: pointer;
  border: none;
  font-size: 20px;
  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme }) => theme.font.weights.regular};
`;