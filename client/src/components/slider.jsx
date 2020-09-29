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
    const { imgList } = this.props;
    const { count } = this.state;
    const imgLink = imgList[count].url;
    const imgDes = imgList[count].description;
    return (
      <GridContainer>
        <Col>
          {`${count + 1}/${imgList.length}`}
        </Col>
        <Col className="main">
          <button onClick={() => { this.decrementCount(); }} className="left" type="button">leftArrow</button>
          <img src={imgLink} alt="sofa" />
          <button onClick={() => { this.incrementCount(); }} className="right" type="button">rightArrow</button>
        </Col>
        <Col>
          {imgDes}
        </Col>
      </GridContainer>
    );
  }
}

// Slider.propTypes = {
//   imgList: PropTypes.arrayOf(PropTypes.objects),
// };

export default Slider;
