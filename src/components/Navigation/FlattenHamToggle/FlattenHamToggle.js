import React, { Component } from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  /* ---- CSS Variables Section ----- */
  --color: ${props => (props.color ? props.color : '#3b3c36')};
  --menu-width: ${props => (props.width ? props.width : '50px')};
  --menu-height: ${props => (props.width ? props.height : '30px')};
  --bar-thickness: ${props => (props.thickness ? props.thickness : '4px')};
  --trans-speed: 150ms;
  /* -------------------------------- */
  width: 100%;
  height: 100%;
  padding: 10px;
  cursor: pointer;
`;

const SubWrapper = styled.div`
  width: var(--menu-width);
  height: var(--menu-height);
  position: relative;
`;

const Menu = styled.div`
  background: var(--color);
  position: absolute;
  width: 100%;
  height: var(--bar-thickness);
  top: 50%;
  transform: translateY(-50%);

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--color);
    transition: top var(--trans-speed) ease-in;
  }

  &::before {
    top: ${props =>
      props.toggleActive
        ? '0'
        : 'calc((var(--menu-height) / 2 - (var(--bar-thickness) / 2)) * -1)'};
  }

  &::after {
    top: ${props =>
      props.toggleActive
        ? '0'
        : 'calc(var(--menu-height) / 2 - (var(--bar-thickness) / 2))'};
  }
`;

class FlattenHamToggle extends Component {
  state = {
    toggleActive: false
  };

  handleToggle = () => {
    this.setState({
      toggleActive: !this.state.toggleActive
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.toggleActive !== this.state.toggleActive) {
      this.setState({
        toggleActive: nextProps.toggleActive
      });
    }
  }

  render() {
    return (
      <MainWrapper
        onClick={this.handleToggle}
        color={this.props.color}
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

export default FlattenHamToggle;
