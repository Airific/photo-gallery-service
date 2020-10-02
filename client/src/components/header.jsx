/* eslint-disable react/prop-types */
import React from 'react';
import { Container, GridContainer, Col } from './style/header';

const Header = (props) => {
  const { isSaved, handleSavedClick, headInfo } = props;
  let host = '';
  if (headInfo[0].superhost) {
    host = ' · Superhost';
  }

  return (
    <Container>
      <h1>Tahoe cabin walk to the lake</h1>
      <GridContainer>
        <Col className="btnContainer" size={12}>
          <img className="star" src="../img/star-icon.png" alt="red-star" />
          <span>
            {`${headInfo[0].reviews}(${headInfo[0].totalReviews}) ${host} · ${headInfo[0].address}`}
          </span>
          <div>
            <button className="saveBtn" type="button" onClick={() => { handleSavedClick(); }}>
              <p>{isSaved ? 'Saved' : 'Save'}</p>
              <img className="heart" src={isSaved ? '../img/like.png' : '../img/heart.png'} alt="heart" />
            </button>
            <button className="shareBtn" type="button">
              <p>Share</p>
              <img className="upload" src="../img/up-arrow.png" alt="upload" />
            </button>
          </div>
        </Col>
      </GridContainer>
    </Container>
  );
};

export default Header;
