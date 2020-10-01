import styled from 'styled-components';

export const Container = styled.div`
  .showAll {
    display: ${(props) => (props.showSlider ? 'none' : 'block')};
    margin: 50px;
    cursor: pointer;
    position: absolute;
    right: -5%;
    z-index: 1;
    bottom: -7%;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    border: 1px solid #222;
    border-radius: 8px;
    padding: 5px 12px;
  }
`;

export const GridContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  overflow: hidden;


  &.main {
    height: 300px;
    border-radius: 15px;
    background-color: #fff;
    @media screen and (min-width: 768px) {
      height: 400px;
    }
    @media screen and (min-width: 992px) {
      height: 500px;
    }
  }

  .mainImg {
    margin: 0;
  }

  .mr-5 {
    margin-right: 5px;
  }

  .btnContainer {
    padding-bottom: 10px;
  }

  .saveBtn,
  .shareBtn {
    border: none;
    background-color: #fff;
    display: inline;
    float: right;
    margin: 5px;
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
  margin: 0 0 0 3px;
  position: relative;
  flex-basis: ${(props) => (props.size === 6 ? '50%' : '100%')};
  overflow: hidden;

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
    height: 100%;
    max-height: 500px;
  }

  img:hover {
    opacity: 0.5;
  }

  &.qtrImgContainer {
    height: 50%;
    &:first-child {
      margin-bottom: 7px;
    }
    img {
      height: 100%;
      max-height: 250px;
    }
  }

`;
