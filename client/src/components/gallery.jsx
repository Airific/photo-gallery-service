/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Container, GridContainer, Col,
} from './style/gallery';

const Gallery = (props) => {
  const {
    handleImgClick, handleShowAllClick, imgList, showSlider,
  } = props;

  return (
    <Container showSlider={showSlider}>
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
