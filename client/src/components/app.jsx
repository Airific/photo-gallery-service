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
    };
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

  render() {
    const { isLoad } = this.state;
    if (isLoad) {
      return (
        <Theme>
          <Gallery />
          <Slider />
          {/* <Modal /> */}
        </Theme>
      );
    }
    return (
      <div>Loading</div>
    );
  }
}

export default App;
