import styled from 'styled-components';

export const ListItemWrapper = styled.article`
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 12px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: normal;
`;

export const ContentImage = styled.picture`
  border-radius: 8px;
  width: 77px;
  height: 77px;
  overflow: hidden;
  position: relative;
  margin-right: 20px;

  img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 100%;
    }
`

export const ContentDetails = styled.div`
  width: 100%;
  max-width: 1090px;

  h1 {
    font-family: ${({ theme }) => theme.font.family};
    font-weight: ${({ theme }) => theme.font.weights.bold};
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.titleList};
    font-size: 20px;
    line-height: normal;
  }
  p {
    margin: 0 0 10px 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.textColorSubtitle};
    
    strong {
      color: ${({ theme }) => theme.colors.primary };
      font-weight: ${({ theme }) => theme.font.weights.regular};
    }
  }
  span {
    font-family: ${({ theme }) => theme.font.family};
    font-weight: ${({ theme }) => theme.font.weights.bold};
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.textColorDomain};
    font-size: 16px;
    line-height: normal;
  }
`
