import React from 'react';
import Gallery from './gallery';
import Modal from './modal';
import Theme from './style/theme';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoad: true,
    };
  }

  render() {
    const { isLoad } = this.state;
    if (isLoad) {
      return (
        <Theme>
          <Gallery />
          <Modal />
        </Theme>
      );
    }
    return (
      <div>Loading</div>
    );
  }
}

export default App;
