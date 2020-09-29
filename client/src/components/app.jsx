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
      isSaved: false,
    };

    this.handleSavedClick = this.handleSavedClick.bind(this);
    this.handleShowAllClick = this.handleShowAllClick.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    this.handleImgClick = this.handleImgClick.bind(this);
    this.handleSaveToClick = this.handleSaveToClick.bind(this);
  }

  componentDidMount() {
    const pageId = window.location.pathname.split('/')[1];
    axios.get(`/listings/gallery/${pageId}`)
      .then((results) => {
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
    const { isSaved } = this.state;
    if (isSaved) {
      this.setState((state) => ({
        isSaved: !state.isSaved,
      }));
    } else {
      this.setState((state) => ({
        showModal: !state.showModal,
      }));
    }
  }

  handleSaveToClick() {
    this.setState((state) => ({
      isSaved: !state.isSaved,
      showModal: !state.showModal,
    }));
  }

  handleShowAllClick() {
    this.setState((state) => ({
      showSlider: !state.showSlider,
      count: 0,
    }));
  }

  handleImgClick(e, list) {
    const imgTag = e.target;
    const urlClicked = imgTag.getAttribute('src');
    let indexOfImg = 0;
    list.forEach((img, idx) => {
      if (img.url === urlClicked) {
        indexOfImg = idx;
      }
    });
    this.setState((state) => ({
      showSlider: !state.showSlider,
      count: indexOfImg,
    }));
  }

  incrementCount() {
    const { count, imgList } = this.state;
    if (count === imgList.length - 1) {
      this.setState({
        count: 0,
      });
    } else {
      this.setState((state) => ({ count: state.count + 1 }));
    }
  }

  decrementCount() {
    const { count } = this.state;
    const { imgList } = this.props;
    if (count === 0) {
      this.setState({
        count: imgList.length - 1,
      });
    } else {
      this.setState((state) => ({ count: state.count - 1 }));
    }
  }

  render() {
    const {
      isLoad, imgList, showModal, showSlider, resetSlider, count, isSaved,
    } = this.state;

    if (isLoad) {
      return (
        <Theme>
          <Gallery
            imgList={imgList}
            isSaved={isSaved}
            handleShowAllClick={this.handleShowAllClick}
            handleSavedClick={this.handleSavedClick}
            handleImgClick={this.handleImgClick}
          />
          <Slider
            showSlider={showSlider}
            imgList={imgList}
            isSaved={isSaved}
            handleSavedClick={this.handleSavedClick}
            handleShowAllClick={this.handleShowAllClick}
            resetSlider={resetSlider}
            count={count}
            incrementCount={this.incrementCount}
            decrementCount={this.decrementCount}
          />
          <Modal
            showModal={showModal}
            handleSavedClick={this.handleSavedClick}
            handleSaveToClick={this.handleSaveToClick}
          />
        </Theme>
      );
    }
    return (
      <div>Loading</div>
    );
  }
}

export default App;
