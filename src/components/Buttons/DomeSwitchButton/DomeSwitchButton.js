import React, { Component } from 'react';
import styled from 'styled-components';

const Toggle = styled.div`
  /* ---- CSS Variables Section ----- */
  --size: ${props => (props.btnSize ? props.btnSize : '100px')};
  /* -------------------------------- */
  /* fz set for em unit used on button blur */
  font-size: 8px;

  overflow: hidden;
  position: relative;
  width: var(--size);
  height: var(--size);
  margin: 4px;
  border-radius: 8px;
  background: #ccd0d4;
  box-shadow: inset 0 0 35px 5px rgba(0, 0, 0, 0.25),
    inset 0 2px 1px 1px rgba(255, 255, 255, 0.9),
    inset 0 -2px 1px 0 rgba(0, 0, 0, 0.25);

  &:before {
    --radius: calc(var(--size) * 0.845);
    --glow: calc(var(--size) * 0.125);

    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: calc(var(--radius) - var(--glow));
    height: calc(var(--radius) - var(--glow));
    margin-left: calc(calc(var(--radius) - var(--glow)) * -0.5);
    margin-top: calc(calc(var(--radius) - var(--glow)) * -0.5);
    border-radius: var(--radius);
    box-shadow: 0 0 var(--glow) calc(var(--glow) / 2) #fff;
    background: #fff;
    opacity: 0.2;
  }
`;

const Button = styled.span`
  --radius: calc(var(--size) * 0.688);
  --inactive-shadow: 0 15px 25px -4px rgba(0, 0, 0, 0.5),
    inset 0 -3px 4px -1px rgba(0, 0, 0, 0.2),
    0 -3px 10px -1px rgba(255, 255, 255, 0.6),
    inset 0 3px 4px -1px rgba(255, 255, 255, 0.2),
    inset 0 0 5px 1px rgba(255, 255, 255, 0.8),
    inset 0 20px 30px 0 rgba(255, 255, 255, 0.2);
  --active-shadow: 0 15px 25px -4px rgba(0, 0, 0, 0.4),
    inset 0 -8px 25px -1px rgba(255, 255, 255, 0.9),
    0 -3px 10px -1px rgba(255, 255, 255, 0.6),
    inset 0 8px 20px 0 rgba(0, 0, 0, 0.2),
    inset 0 0 5px 1px rgba(255, 255, 255, 0.6);

  cursor: pointer;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--radius);
  height: var(--radius);
  margin-left: calc(var(--radius) * -0.5);
  margin-top: calc(var(--radius) * -0.5);
  border-radius: var(--radius);
  background: #ccd0d4;
  box-shadow: ${props =>
    props.toggle ? 'var(--active-shadow)' : 'var(--inactive-shadow)'};
  filter: blur(0.1em);
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
`;

const Label = styled.span`
  cursor: pointer;
  user-select: none;
  display: block;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
  font-size: ${props =>
    props.toggle ? 'calc(var(--size) / 3.2)' : 'calc(var(--size) / 3)'};
  line-height: calc(var(--size) - 1);
  text-shadow: 1px 1px 3px #ccd0d4, 0 0 0 rgba(0, 0, 0, 0.8), 1px 1px 4px #fff;
  color: ${props =>
    props.toggle ? 'rgba(0, 0, 0, 0.45)' : 'rgba(0, 0, 0, 0.4)'};
  opacity: 0.9;
  transition: color 300ms ease-out;
`;

class DomeSwitchButton extends Component {
  state = {
    toggle: false
  };

  handleClick = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    return (
      <Toggle onClick={this.handleClick} btnSize={this.props.btnSize}>
        <Button toggle={this.state.toggle} />
        <Label toggle={this.state.toggle}>
          {this.props.label ? this.props.label : '+'}
        </Label>
      </Toggle>
    );
  }
}

export default DomeSwitchButton;
