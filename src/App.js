import React, { Component } from 'react';
import './App.css';

import PopUpCard from './components/Cards/PopUpCard';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Copy Paste Components</h2>
        <PopUpCard
          src="https://images.unsplash.com/photo-1505773170783-58f82a520465?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e3288093a41bb48f021aac5c157d41af&auto=format&fit=crop&w=2100&q=80"
          alt="PlaceHolder"
          heading="Looky there..."
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          doloribus perspiciatis quidem nesciunt hic libero incidunt vero iusto
          dolor!"
        />
      </div>
    );
  }
}

export default App;
