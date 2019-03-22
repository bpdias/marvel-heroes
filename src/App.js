import React, { Component } from 'react';
import Aux from './hocs/Aux';
import Heroes from './containers/heroes';

class App extends Component {
  render() {
    return (
      <Aux>
        <Heroes />
      </Aux>
    );
  }
}

export default App;
