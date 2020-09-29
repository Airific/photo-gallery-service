import styled from 'styled-components';

export const GridContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: lightblue;
  display: grid;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 9;

  .header {
    margin: 50px;
  }

  .close {
    display: inline;
    float: left;
  }

  p {
    display: inline;
  }

  .heart {
    display: inline;
    float: right;
    width: 15px;
    height: 15px;
  }

`;

export const Col = styled.div`
  width: 80%;
  margin: 0 auto;

  &.main {
    grid-template-columns: auto 1fr;
    position: relative;
  }

  img {
    width: 100%;
    height: 100%;
  }

  button {
    position: absolute;
    display: inline;
    &.left {
      top: 40%;
      left: 0;
    }
    &.right {
      top: 40%;
      right: 0;
    }
  }

  .description {
    margin-top: 40px;
  }

`;
