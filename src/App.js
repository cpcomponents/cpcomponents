import React, { Component } from 'react';
import './App.css';

import SlideArrowButton from './components/Buttons/SlideArrowButton';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Copy Paste Components</h2>
        <SlideArrowButton>Move Aside</SlideArrowButton>
      </div>
    );
  }
}

export default App;
