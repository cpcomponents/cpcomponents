import React, { Component } from 'react';
import styles from './App.css';
import LifeLanding from './components/LandingPages/LifeLanding/LifeLanding';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Copy Paste Components</h2>
        <LifeLanding />
      </div>
    );
  }
}

export default App;
