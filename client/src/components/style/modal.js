import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: ${(props) => (props.showModal ? 'block' : 'none')};
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
  border-bottom: 1px solid rgb(235, 235, 235);
  padding: 24px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 10px;
  span {
    font-family: Roboto;
    font-weight: 370;
    float: left;
    cursor: pointer;
  }
`;

export const ListItem = styled.div`
  padding: 20px;
  margin-left: 13px;
  cursor: pointer;
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

export const Footer = styled.div`
  border-top: 1px solid rgb(235, 235, 235);
  padding: 27px;
  line-height: 20px;
  text-decoration: underline;
  margin-top: 10px;
`;
