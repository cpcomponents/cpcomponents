import React, { Component } from 'react';
import './App.css';

import PopOutCard from './components/Cards/PopOutCard';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Copy Paste Components</h2>
        <PopOutCard icon="⪘" headingOne="YOU DO" headingTwo="THE MATH" />
      </div>
    );
  }
}

export default App;
