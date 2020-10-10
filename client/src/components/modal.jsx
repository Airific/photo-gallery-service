/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import ListItem from './listItem';
import {
  Container, GridContainer, Header, Footer, Overlay, Form,
} from './style/modal';

const Modal = (props) => {
  const {
    showModal, handleSavedClick, handleSaveToClick, imgList, isModalClicked, handleOverlayClick, createList, handleCreateListClick, savedList, handleCreateClick,
  } = props;

  let fade = '';
  if (showModal && isModalClicked) {
    fade = 'slideIn';
  } else if (!showModal && isModalClicked) {
    fade = 'slideOut';
  }

  if (createList) {
    return (
      <Container className={fade} showModal={showModal}>
        <GridContainer>
          <Header>
            <span className="cancel" onClick={() => { handleSavedClick(); }}>X</span>
            Name this list
          </Header>
          <Form onSubmit={(e) => { handleCreateClick(e); }}>
            <input type='text' name='inputName' placeholder='Name'/>
            <Footer>
              <button type='submit'>Create</button>
            </Footer>
          </Form>
        </GridContainer>
        <Overlay onClick={() => { handleOverlayClick(); }} />
      </Container>
    );

  } else {

    return (
      <Container className={fade} showModal={showModal}>
        <GridContainer>
          <Header>
            <span className="cancel" onClick={() => { handleSavedClick(); }}>X</span>
            Save to a list
          </Header>
          {savedList.map((item) => (
            <ListItem handleSaveToClick={handleSaveToClick} imgList={imgList} savedName={item.name} key={Math.random()}></ListItem>
          ))}
          <Footer onClick={() => { handleCreateListClick(); }}><span>Create a list</span></Footer>
        </GridContainer>
        <Overlay onClick={() => { handleOverlayClick(); }} />
      </Container>
    );
  }
};

export default Modal;
