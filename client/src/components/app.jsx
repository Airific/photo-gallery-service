import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoad: false,
    };
  }

  render() {
    const { isLoad } = this.state;
    if (isLoad) {
      return (
        <div>checker</div>
      );
    }
    return (
      <div>Loading</div>
    );
  }
}

export default App;
