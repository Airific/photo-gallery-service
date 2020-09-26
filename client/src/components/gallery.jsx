import React from 'react';
import {
  GridContainer, Col,
} from './style/gallery';

const Gallery = (props) => (
  <GridContainer className="main">
    <Col className="mainImg" size={6}>
      <img src="/img/photo-1505691938895-1758d7feb511.jpeg" alt="sofa" />
    </Col>
    <Col size={6}>
      <Col className="qtrImgContainer" size={6}>
        <GridContainer>
          <Col className="mr-5" size={6}><img src="/img/photo-1505691938895-1758d7feb511.jpeg" alt="sofa" /></Col>
          <Col size={6}><img src="/img/photo-1505691938895-1758d7feb511.jpeg" alt="sofa" /></Col>
        </GridContainer>
      </Col>

      <Col className="qtrImgContainer" size={6}>
        <GridContainer>
          <Col className="mr-5" size={6}><img src="/img/photo-1505691938895-1758d7feb511.jpeg" alt="sofa" /></Col>
          <Col size={6}><img src="/img/photo-1505691938895-1758d7feb511.jpeg" alt="sofa" /></Col>
        </GridContainer>
      </Col>
    </Col>
  </GridContainer>

);

export default Gallery;
