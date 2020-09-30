import styled from 'styled-components';

export const Container = styled.div`
  display: ${(props) => (props.showSlider ? 'block' : 'none')};
`;

export const GridContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  display: grid;
  width: 100%;
  height: 100vh;
  text-align: center;
  z-index: 9;

  .header {
    margin: 50px;
  }

  .close {
    display: inline;
    float: left;
    cursor: pointer;
  }

  p {
    display: inline;
    margin-right: 4%;
  }

  .heart {
    display: inline;
    float: right;
    width: 15px;
    height: 15px;
    cursor: pointer;
  }

`;

export const Col = styled.div`
  width: 100%;
  margin: 0 auto;

  &.main {
    grid-template-columns: auto 1fr;
    position: relative;
  }

  img {
    display: block;
    margin: 0 auto;
    height: 70vh;
  }

  button {
    border-radius: 50%;
    border: 1px solid rgb(176, 176, 176);
    background-color: transparent;
    width: 48px;
    height: 48px;
    position: absolute;
    display: inline;
    cursor: pointer;
    top: 45%;

    :hover {
      background-color: rgb(245, 245, 245);
    }

    &.left {
      left: 4%;
      // transform: translate(-150px);
    }
    &.right {
      right: 4%;
      // transform: translate(150px);
    }

    .leftArrow {
      width: 10px;
      height: 10px;
    }

    .rightArrow {
      width: 10px;
      height: 10px;
    }

  }

  .description {
    margin-top: 40px;
  }

`;
