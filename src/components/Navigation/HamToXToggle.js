import React, { Component } from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  /* ---- CSS Variables Section ----- */
  --menu-width: ${props => (props.width ? props.width : '50px')};
  --menu-height: ${props => (props.width ? props.height : '30px')};
  --bar-thickness: ${props => (props.thickness ? props.thickness : '4px')};
  --trans-speed: 450ms;
  /* -------------------------------- */
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const SubWrapper = styled.div`
  width: var(--menu-width);
  height: var(--menu-height);
  position: relative;
`;

const Menu = styled.div`
  --rotate: ${props => (props.toggleActive ? '135deg' : '0deg')};
  background: black;
  position: absolute;
  width: 100%;
  height: var(--bar-thickness);
  top: 50%;
  transform: translateY(-50%) rotate(var(--rotate));
  transition: top var(--trans-speed) ease-in, transform var(--trans-speed);

  &::before,
  &::after {
    --rotate: ${props => (props.toggleActive ? '90deg' : '0deg')};
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    transform: rotate(var(--rotate));
    transition: top calc(var(--trans-speed) - 200ms) ease-in,
      transform calc(var(--trans-speed) + 300ms);
  }

  &::before {
    top: ${props =>
      props.toggleActive
        ? '0'
        : `calc((var(--menu-height) / 2 - (var(--bar-thickness) / 2)) * -1)`};
  }

  &::after {
    top: ${props =>
      props.toggleActive
        ? '0'
        : `calc(var(--menu-height) / 2 - (var(--bar-thickness) / 2))`};
  }
`;

class HamToXToggle extends Component {
  state = {
    toggleActive: false
  };

  handleToggle = () => {
    this.setState({
      toggleActive: !this.state.toggleActive
    });
  };

  componentWillReceiveProps(nextProps) {
    let toggleActive = nextProps.toggleActive;
    this.setState({
      toggleActive
    });
  }

  render() {
    return (
      <MainWrapper
        onClick={this.handleToggle}
        width={this.props.width}
        height={this.props.height}
        thickness={this.props.thickness}
      >
        <SubWrapper>
          <Menu toggleActive={this.state.toggleActive} />
        </SubWrapper>
      </MainWrapper>
    );
  }
}

export default HamToXToggle;
