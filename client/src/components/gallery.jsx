/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Container, GridContainer, Col,
} from './style/gallery';

const Gallery = (props) => {
  const {
    handleImgClick, handleSavedClick, handleShowAllClick, imgList, isSaved, showSlider,
  } = props;

  return (
    <Container showSlider={showSlider}>
      <GridContainer>
        <Col className="btnContainer" size={12}>
          <button className="saveBtn" type="button" onClick={() => { handleSavedClick(); }}>
            <p>{isSaved ? 'Saved' : 'Save'}</p>
            <img className="heart" src={isSaved ? '../img/like.png' : '../img/heart.png'} alt="heart" />
          </button>
          <button className="shareBtn" type="button">
            <p>Share</p>
            <img className="upload" src="../img/up-arrow.png" alt="upload" />
          </button>
        </Col>
      </GridContainer>
      <GridContainer className="main">
        <Col className="mainImg" size={6}>
          <img onClick={(e) => { handleImgClick(e, imgList); }} src={imgList[0].url} alt="sofa" />
        </Col>
        <Col size={6}>
          <Col className="qtrImgContainer" size={6}>
            <GridContainer>
              <Col className="mr-5" size={6}><img src={imgList[1].url} alt="sofa" onClick={(e) => { handleImgClick(e, imgList); }} /></Col>
              <Col size={6}><img src={imgList[2].url} alt="sofa" onClick={(e) => { handleImgClick(e, imgList); }} /></Col>
            </GridContainer>
          </Col>
          <Col className="qtrImgContainer" size={6}>
            <GridContainer>
              <Col className="mr-5" size={6}><img src={imgList[3].url} alt="sofa" onClick={(e) => { handleImgClick(e, imgList); }} /></Col>
              <Col size={6}><img src={imgList[4].url} alt="sofa" onClick={(e) => { handleImgClick(e, imgList); }} /></Col>
            </GridContainer>
            <button onClick={() => { handleShowAllClick(); }} className="showAll" type="button">Show all photos</button>
          </Col>
        </Col>
      </GridContainer>
    </Container>
  );
};

export default Gallery;
