/* eslint-disable */
import styled from 'styled-components';

export const Container = styled.div`
  .close {
    float: right;
    margin: 50px;
  }
`;

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

  .btnContainer {
    padding-bottom: 10px;
  }

  .saveBtn {
    border: none;
    background-color: #fff;
    display: inline;
    float: right;
    margin: 5px;
    padding: 5px 6px;
    cursor: pointer;
  }

  .saveBtn:hover {
    background-color: #f2f2f2;
    border-radius: 5px;
  }

  .save {
    float: right;
    margin: 0;
    text-decoration: underline;
  }

  `;

export const Col = styled.div`
  .heart {
    display: inline;
    float: right;
    padding: 0 4px 3px 3px;
    width: 15px;
    height: 15px;
  }

  .heart:hover {
    opacity: 1;
  }

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
