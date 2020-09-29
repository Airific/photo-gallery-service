/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import { Container, GridContainer, Col } from './style/slider';

const Slider = (props) => {
  const {
    imgList,
    handleSavedClick, showSlider, handleShowAllClick, count, decrementCount, incrementCount,
  } = props;
  const imgLink = imgList[count].url;
  const imgDes = imgList[count].description;

  return (
    <Container showSlider={showSlider}>
      <GridContainer>
        <div>
          <div className="header">
            <button className="close" onClick={() => { handleShowAllClick(); }} type="button"> X Close </button>
            <p>{`${count + 1}/${imgList.length}`}</p>
            <img className="heart" src="../img/heart.png" alt="heart" onClick={() => { handleSavedClick(); }} />
          </div>
          <Col className="main">
            <button onClick={() => { decrementCount(); }} className="left" type="button">leftArrow</button>
            <img src={imgLink} alt="interior" />
            <button onClick={() => { incrementCount(); }} className="right" type="button">rightArrow</button>
            <div className="description">{imgDes}</div>
          </Col>
        </div>
      </GridContainer>
    </Container>
  );
};

// Slider.propTypes = {
//   imgList: PropTypes.array.isRequired,
// };

export default Slider;
