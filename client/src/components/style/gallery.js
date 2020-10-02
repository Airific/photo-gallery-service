import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  position: relative;
  margin: 0 auto;

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
  width: 100%;
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

  `;

export const Col = styled.div`
  margin: 0 0 0 3px;
  position: relative;
  flex-basis: ${(props) => (props.size === 6 ? '50%' : '100%')};
  overflow: hidden;

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
