import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  // display: ${(props) => (props.showModal ? 'block' : 'none')};
  width: 100%;
  z-index: 999;

  opacity: 0;
  animation-duration: 0.5s;
  transform: translateY(1000px);

  &.slideIn {
    animation-name: slideIn;
    opacity: 1;
    transform: translateY(0);
  }

  &.slideOut {
    animation-name: slideOut;
    opacity: 0;
    transform: translateY(1000px);
  }

  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateY(1000px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideOut {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(1000px);
    }
  }

`;

export const Overlay = styled.div`
  background-color: #333;
  height: 100vh;
  position: fixed;
  opacity: .6;
  width: 100%;
`;

export const GridContainer = styled.div`
  max-width: 60vw;
  width: 100%;
  margin: 15% auto;
  display: grid;
  background-color: #fff;
  border: 1px solid #aaa;
  border-radius: 15px;
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 999;
  @media screen and (min-width: 768px) {
    max-width: 480px;
  }
  @media screen and (min-width: 992px) {
    max-width: 568px;
  }

`;

export const Header = styled.div`
  border-bottom: 1px solid rgb(235, 235, 235);
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 10px;
  span {
    font-family: Roboto;
    font-weight: 390;
    float: left;
    border-radius: 50%;
    cursor: pointer;
    padding: 4px 8px;
    :hover {
      background-color: rgb(240, 240, 240);
    }
  }

  @media screen and (min-width: 768px) {
    padding: 20px;
  }

  @media screen and (min-width: 992px) {
    padding: 24px;
  }
`;

export const ListItemStyle = styled.div`
  border-radius: 15px;
  padding: 5px 15px;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 10px 15px;
  }

  @media screen and (min-width: 992px) {
    padding: 20px;
  }

  :hover {
    background-color: rgb(247, 247, 247);
  }
  img {
    float: left;
    height: 60px;
    width: 60px;
    border-radius: 5px;
  }

  div {
    float: left;
    width: auto;
    padding: 0 15px;

    p {
      margin: 0;
      text-align: left;
      &.top {
        font-size: 12px;
        font-weight: 400;
        line-heightt: 16px;
        margin-bottom: 4px;
        color: rgb(113, 113, 113)
      }

      &.mid {
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        color: rgb(34, 34, 34);
      }

      &.bottom {
        font-size: 14px;
        font-weight: 300;
        line-height: 18px;
        margin-top: 4px;
        color: rgb(34, 34, 34);
      }
    }
  }
`;

export const Form = styled.form`
  input {
    width: 94%;
    border: 1px solid #555;
    border-radius: 10px;
    height: 50px;
    margin: 25px auto;
    outline: none;
    &::placeholder {
      margin-left: 50px;
    }
  }
`;

export const Footer = styled.div`
  border-top: 1px solid rgb(235, 235, 235);
  padding: 15px 20px;
  line-height: 20px;
  text-decoration: underline;
  margin-top: 10px;

  button {
    width: 100%;
    padding: 15px;
    border: 1px;
    border-radius: 15px;
    background-color: #000;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }

  span {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    padding: 18px 22px;
  }
  @media screen and (min-width: 992px) {
    padding: 25px;
  }
`;


