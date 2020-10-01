/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Container, GridContainer, Header, ListItem, Footer, Overlay,
} from './style/modal';

const Modal = (props) => {
  const {
    showModal, handleSavedClick, handleSaveToClick, imgList, isModalClicked, handleOverlayClick,
  } = props;

  let fade = '';
  if (showModal && isModalClicked) {
    fade = 'slideIn';
  } else if (!showModal && isModalClicked) {
    fade = 'slideOut';
  }

  return (
    <Container className={fade} showModal={showModal}>
      <GridContainer>
        <Header>
          <span className="cancel" onClick={() => { handleSavedClick(); }}>X</span>
          Save to a list
        </Header>
        <ListItem onClick={() => { handleSaveToClick(); }}>
          <img src={imgList[1].url} alt="pic" />
          <div>
            <p className="top">Any time</p>
            <p className="mid">Vacation Places</p>
            <p className="bottom">2 Stays</p>
          </div>
        </ListItem>
        <ListItem onClick={() => { handleSaveToClick(); }}>
          <img src={imgList[1].url} alt="pic" />
          <div>
            <p className="top">Any time</p>
            <p className="mid">Dream Homes</p>
            <p className="bottom">Nothing saved yet</p>
          </div>
        </ListItem>
        <ListItem onClick={() => { handleSaveToClick(); }}>
          <img src={imgList[1].url} alt="pic" />
          <div>
            <p className="top">Any time</p>
            <p className="mid">Tahoe</p>
            <p className="bottom">Nothing saved yet</p>
          </div>
        </ListItem>
        <Footer>Create a list</Footer>
      </GridContainer>
      <Overlay onClick={() => { handleOverlayClick(); }} />
    </Container>
  );
};

export default Modal;
