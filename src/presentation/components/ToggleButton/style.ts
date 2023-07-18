import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 120px;
  top: 30px;

  label {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #2c3e50;
    transition: 0.3s;
    border-radius: 30px;
  }

  strong {
    position: absolute;
    left: 100%;
    width: max-content;
    height: 100%;
    line-height: 30px;
    margin-left: 10px;
    cursor: pointer;
  }

  span:before {
    position: absolute;
    content: "";
    height: 25px;
    width: 25px;
    left: 3px;
    bottom: 2.6px;
    background-color: #fff;
    border-radius: 50%;
    transition: 0.3s;
  }

  input:checked + span {
    background-color: #00c853;
  }

  input:checked + span:before {
    transform: translateX(29px);
  }

`;
