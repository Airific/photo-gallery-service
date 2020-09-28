import React from 'react';
import { GridContainer, Col } from './style/slider';

const Slider = (props) => (
  <GridContainer>
    <Col>
      1/10
    </Col>
    <Col className="main">
      <p className="left">leftArrow</p>
      <img src="/img/photo-1505691938895-1758d7feb511.jpeg" alt="sofa" />
      <p className="right">rightArrow</p>
    </Col>
    <Col>
      Description
    </Col>
  </GridContainer>
);

export default Slider;
