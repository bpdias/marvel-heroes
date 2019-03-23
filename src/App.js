import React, { Component } from 'react';
import Aux from './hocs/Aux';
import Routes from './setupRoutes';

class App extends Component {
  render() {
    return (
      <Aux>
        <Routes />
      </Aux>
    );
  }
}

export default App;
