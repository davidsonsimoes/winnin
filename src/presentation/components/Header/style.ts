import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 91px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  text-align: center;
  color: #fff;

  img {
    width: 160px;
    margin: 0 auto;
  }
`;