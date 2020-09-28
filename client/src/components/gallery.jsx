import React from 'react';
import {
  GridContainer, Col,
} from './style/gallery';

const Gallery = (props) => (
  <>
    <GridContainer>
      <Col className="btnContainer" size={12}>
        <button className="saveBtn" type="button">
          <p className="save">Save</p>
          <img className="heart" src="../img/heart.png" alt="heart" />
        </button>
      </Col>
    </GridContainer>
    <GridContainer className="main">
      <Col className="mainImg" size={6}>
        <img src="/img/photo-1505691938895-1758d7feb511.jpeg" alt="sofa" />
      </Col>
      <Col size={6}>
        <Col className="qtrImgContainer" size={6}>
          <GridContainer>
            <Col className="mr-5" size={6}><img src="/img/photo-1505692433770-36f19f51681d.jpeg" alt="sofa" /></Col>
            <Col size={6}><img src="/img/photo-1505692952047-1a78307da8f2.jpeg" alt="sofa" /></Col>
          </GridContainer>
        </Col>

        <Col className="qtrImgContainer" size={6}>
          <GridContainer>
            <Col className="mr-5" size={6}><img src="/img/photo-1505693196193-bfd859ae01d9.jpeg" alt="sofa" /></Col>
            <Col size={6}><img src="/img/photo-1505693416388-ac5ce068fe85.jpeg" alt="sofa" /></Col>
          </GridContainer>
        </Col>
      </Col>
    </GridContainer>
  </>
);

export default Gallery;
