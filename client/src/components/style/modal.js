import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;

`;

export const Overlay = styled.div`
  background-color: #333;
  height: 100vh;
  opacity: .6;
  width: 100%;
`;

export const GridContainer = styled.div`
  max-width: 568px;
  width: 100%;
  margin: auto;
  display: grid;
  background-color: #fff;
  border: 1px solid #aaa;
  border-radius: 15px;
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 1;
`;

export const Header = styled.div`
border-bottom: 1px solid #aaa;
  padding: 15px;
  span {
    float: left;
  }
`;

export const ListItem = styled.div`
  padding: 20px;

  img {
    float: left;
  }

  div {
    float: left;
    background-color: pink;
    width: auto;
    padding: 0 20px;
    p {
      margin: 0;
    }
  }
`;

export const Footer = styled.div`
  border-top: 1px solid #aaa;
  padding: 15px;
`;
