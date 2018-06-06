import React, { Component } from 'react';
import FlattenHamToggle from './../Navigation/FlattenHamToggle';

class ArbitraryClassComponent extends Component {
  state = {
    toggle: false
  };

  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    return (
      <div>
        {/* Example ussage of component toggled with external state passed via prop */}
        <FlattenHamToggle
          toggleActive={this.state.toggle}
          width="40px"
          height="23px"
          thickness="3px"
        />
        <button onClick={this.handleToggle}>Toggle</button>
      </div>
    );
  }
}

export default ArbitraryClassComponent;
