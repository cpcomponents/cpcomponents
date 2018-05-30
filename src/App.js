import React, { Component } from 'react';
import './App.css';

import AniColorLink from './components/Links/AniColorLink';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Copy Paste Components</h2>
        <AniColorLink href="http://www.casyjs.com">AniColorLink</AniColorLink>
      </div>
    );
  }
}

export default App;
