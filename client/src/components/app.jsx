/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import Gallery from './gallery';
import Modal from './modal';
import Theme from './style/theme';
import Slider from './slider';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoad: false,
      imgList: [],
      showModal: false,
      showSlider: false,
      count: 0,
    };

    this.handleSavedClick = this.handleSavedClick.bind(this);
    this.handleShowAllClick = this.handleShowAllClick.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  componentDidMount() {
    const pageId = window.location.pathname.split('/')[1];
    axios.get(`/listings/gallery/${pageId}`)
      .then((results) => {
        console.log(results.data);
        this.setState({
          isLoad: true,
          imgList: results.data[0].imgURLs,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSavedClick() {
    this.setState((state) => ({
      showModal: !state.showModal,
    }));
  }

  handleShowAllClick() {
    this.setState((state) => ({
      showSlider: !state.showSlider,
      count: 0,
    }));
  }

  incrementCount() {
    const { count, imgList } = this.state;
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
    const {
      isLoad, imgList, showModal, showSlider, resetSlider, count,
    } = this.state;

    if (isLoad) {
      return (
        <Theme>
          <Gallery
            imgList={imgList}
            handleShowAllClick={this.handleShowAllClick}
            handleSavedClick={this.handleSavedClick}
          />
          <Slider
            showSlider={showSlider}
            imgList={imgList}
            handleSavedClick={this.handleSavedClick}
            handleShowAllClick={this.handleShowAllClick}
            resetSlider={resetSlider}
            count={count}
            incrementCount={this.incrementCount}
            decrementCount={this.decrementCount}
          />
          <Modal showModal={showModal} handleSavedClick={this.handleSavedClick} />
        </Theme>
      );
    }
    return (
      <div>Loading</div>
    );
  }
}

export default App;
