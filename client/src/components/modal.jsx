import React from 'react';
import {
  Container, GridContainer, Header, ListItem, Footer, Overlay,
} from './style/modal';

const Modal = (props) => (
  <Container>
    <GridContainer>
      <Header>
        <span>X</span>
        Save to a List
      </Header>
      <ListItem>
        <img alt="pic" />
        <div>
          <p>Any time</p>
          <p>Vacation Places</p>
          <p>2 Stays</p>
        </div>
      </ListItem>
      <ListItem>
        <img alt="pic" />
        <div>
          <p>Any time</p>
          <p>Dream Homes</p>
          <p>Nothing saved yet</p>
        </div>
      </ListItem>
      <ListItem>
        <img alt="pic" />
        <div>
          <p>Any time</p>
          <p>Tahoe</p>
          <p>Nothing saved yet</p>
        </div>
      </ListItem>
      <Footer>Create a list</Footer>
    </GridContainer>
    <Overlay />
  </Container>
);

export default Modal;
