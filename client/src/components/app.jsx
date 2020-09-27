import React from 'react';
import Gallery from './gallery';

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
        <Gallery />
      );
    }
    return (
      <div>Loading</div>
    );
  }
}

export default App;
