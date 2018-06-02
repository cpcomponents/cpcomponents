import React, { Component } from 'react';
import './App.css';

import PoppingCard from './components/Cards/PoppingCard';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Copy Paste Components</h2>
        <PoppingCard />
      </div>
    );
  }
}

export default App;
