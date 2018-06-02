import React, { Component } from 'react';
import './App.css';

import HalfFullCard from './components/Cards/HalfFullCard';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Copy Paste Components</h2>
        <HalfFullCard />
      </div>
    );
  }
}

export default App;
