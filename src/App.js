import React, { Component } from 'react';
import './App.css';

import FlattenHamToggle from './components/Navigation/FlattenHamToggle';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Copy Paste Components</h2>
        <FlattenHamToggle width="40px" height="23px" thickness="3px" />
      </div>
    );
  }
}

export default App;
