/* eslint-disable */
import styled from 'styled-components';

export const GridContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  overflow: hidden;


  &.main {
    height: 500px;
    border-radius: 15px;
    background-color: #fff;
  }

  .mainImg {
    margin: 0;
  }

  .mr-5 {
    margin-right: 3px;
  }

  `;

export const Col = styled.div`


  margin: 0 0 0 2px;
  flex-basis: ${props => props.size === 1 ? '16.66%' : props.size === 2 ? '8.33%' : props.size === 3 ? '25%' : props.size === 4 ? '33.33%' : props.size === 5 ? '41.66%' : props.size === 6 ? '50%' : '100%' };
  overflow: hidden;

  img {
    height: 100%;
    max-height: 500px;
  }

  img:hover {
    opacity: 0.5;
  }

  &.qtrImgContainer {
    height: 250px;
    &:first-child {
      margin-bottom: 5px;
    }
    img {
      height: 100%;
      max-height: 250px;
    }
  }

`;
