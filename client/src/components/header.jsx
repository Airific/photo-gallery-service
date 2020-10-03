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
      <h1>{headInfo[0].title}</h1>
      <GridContainer>
        <Col className="btnContainer" size={12}>
          <img className="star" src="https://airific-gallery-photos.s3-us-west-1.amazonaws.com/icons/star-icon.png" alt="red-star" />
          <span className="reviewNum">{headInfo[0].reviews}</span>
          <span className="reviews">{` (${headInfo[0].totalReviews}) ${host} · `}</span>
          <span className="address">{headInfo[0].address}</span>
          <div>
            <button className="saveBtn" type="button" onClick={() => { handleSavedClick(); }}>
              <p>{isSaved ? 'Saved' : 'Save'}</p>
              <img className="heart" src={isSaved ? 'https://airific-gallery-photos.s3-us-west-1.amazonaws.com/icons/like.png' : 'https://airific-gallery-photos.s3-us-west-1.amazonaws.com/icons/heart.png'} alt="heart" />
            </button>
            <button className="shareBtn" type="button">
              <p>Share</p>
              <img className="upload" src="https://airific-gallery-photos.s3-us-west-1.amazonaws.com/icons/up-arrow.png" alt="upload" />
            </button>
          </div>
        </Col>
      </GridContainer>
    </Container>
  );
};

export default Header;
