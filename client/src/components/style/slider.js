import styled from 'styled-components';

export const Container = styled.div`
  opacity: 0;
  animation-duration: 0.5s;
  transform: translateY(50px);
  position: fixed;
  width: 100%;
  z-index: 99;

  &.fadeIn {
    animation-name: fadeIn;
    opacity: 1;
    transform: translateY(-404px);
    @media screen and (min-width: 768px) {
      transform: translateY(-504px);
    }
    @media screen and (min-width: 992px) {
      transform: translateY(-607px);
    }
  }

  &.fadeOut {
    animation-name: fadeOut;
    opacity: 0;
    transform: translateY(50px);
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(0%);
    }
    100% {
      opacity: 1;
      transform: translateY(-607px);
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
      transform: translateY(-607px);
    }
    100% {
      opacity: 0;
      transform: translateY(50px);
    }
  }
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
  z-index: 99;

  .header {
    margin: 50px;
  }

  .close {
    display: inline;
    float: left;
    cursor: pointer;
    font-size: 14px;
    font-weight: 300;
    line-height: 18px;
    color: rgb(34, 34, 34);
    background-color: rgba(34, 34, 34, 0.1);
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    &:hover {
      background-color: rgba(34, 34, 34, 0.16);
    }
  }

  p {
    display: inline;
    font-weight: 300;
    margin-right: 4%;
  }

  .heart,
  .share {
    display: inline;
    float: right;
    cursor: pointer;
    border-radius: 50%;
    padding: 8px;
    margin: -5px;
    img {
      width: 15px;
      height: 15px;
      &.shareIcon {
        width: 18px;
        height: 18px;
        margin-top: -1px;
        margin-right: 10px;
      }
    }
  }

  .heart:hover {
    background-color: rgb(245, 245, 245);
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
    height: auto;
    max-width: 60%;
    @media screen and (min-width: 992px){
      max-width: 70%;
    }
    @media screen and (min-width: 1280px){
      max-width: 100%;
      height: 70vh;
    }
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
