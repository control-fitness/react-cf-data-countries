import React, { Component } from 'react';
import countries from '../src';

class App extends Component {
  render() {
    return (
      <div>
        {JSON.stringify(countries)}
      </div>
    );
  }
}

export default App;
