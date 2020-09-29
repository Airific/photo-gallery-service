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
    };

    this.handleSavedClick = this.handleSavedClick.bind(this);
    this.handleShowAllClick = this.handleShowAllClick.bind(this);
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
    }));
  }

  render() {
    const {
      isLoad, imgList, showModal, showSlider,
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
