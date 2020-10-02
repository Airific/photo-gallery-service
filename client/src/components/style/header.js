import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  position: relative;
  margin: 0 auto;

  h1 {
    color: #222222;
    font-size: 24px;
    font-weight: 500;
    line-height: 23px;

  }
`;

export const GridContainer = styled.div`

  .saveBtn,
  .shareBtn {
    border: none;
    background-color: #fff;
    display: inline;
    float: right;
    margin-bottom: 10px;
    padding: 5px 6px;
    cursor: pointer;

    p {
      float: right;
      margin: 0;
      text-decoration: underline;
    }
  }

  .saveBtn:hover,
  .shareBtn:hover {
    background-color: #f2f2f2;
    border-radius: 5px;
  }
`;

export const Col = styled.div`
  .heart {
    display: inline;
    padding: 0 4px 3px 3px;
    width: 15px;
    height: 15px;
  }

  .upload {
    width: 18px;
    height: 18px;
    display: inline;
    padding: 0 4px 3px 3px;
  }

  img {
    width: 15px;
    height: 15px;
  }

  div {
    display: inline-block;
    margin-top: -5px;
    float: right;
  }
`;
