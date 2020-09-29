/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import { GridContainer, Col } from './style/slider';

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount() {
    const { count } = this.state;
    const { imgList } = this.props;
    if (count === imgList.length - 1) {
      console.log('reached max');
      this.setState({
        count: 0,
      });
    } else {
      this.setState((state) => ({ count: state.count + 1 }));
      console.log(count);
    }
  }

  decrementCount() {
    const { count } = this.state;
    const { imgList } = this.props;
    if (count === 0) {
      console.log('reached zero');
      this.setState({
        count: imgList.length - 1,
      });
    } else {
      this.setState((state) => ({ count: state.count - 1 }));
      console.log(count);
    }
  }

  render() {
    const { imgList, handleSavedClick } = this.props;
    const { count } = this.state;
    const imgLink = imgList[count].url;
    const imgDes = imgList[count].description;
    return (
      <GridContainer>
        <div>
          <div className="header">
            <button className="close" type="button"> X Close </button>
            <p>{`${count + 1}/${imgList.length}`}</p>
            <img className="heart" src="../img/heart.png" alt="heart" onClick={() => { handleSavedClick(); }} />
          </div>
          <Col className="main">
            <button onClick={() => { this.decrementCount(); }} className="left" type="button">leftArrow</button>
            <img src={imgLink} alt="interior" />
            <button onClick={() => { this.incrementCount(); }} className="right" type="button">rightArrow</button>
            <div className="description">{imgDes}</div>
          </Col>
        </div>
      </GridContainer>
    );
  }
}

// Slider.propTypes = {
//   imgList: PropTypes.array.isRequired,
// };

export default Slider;
