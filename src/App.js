import React, { Component } from 'react';
import './App.css';

import HamToXToggle from './components/Navigation/HamToXToggle';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Copy Paste Components</h2>
        <HamToXToggle width="40px" height="23px" thickness="3px" />
      </div>
    );
  }
}

export default App;
