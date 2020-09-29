import styled from 'styled-components';

export const GridContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 9;

`;

export const Col = styled.div`
  grid-template-columns: auto;
  background-color: lightblue;

  &.main {
    grid-template-columns: 1fr auto 1fr;
    position: relative;
  }

  img {
    max-width: 929px;
    width: 100%;
    max-height: 609px;
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

`;
