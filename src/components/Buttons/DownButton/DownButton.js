import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  /* ---- CSS Variables Section ----- */
  --trans-spd: 420ms;
  --cubic-curve: cubic-bezier(0.57, 0.43, 0, 1.01);
  --btn-color: ${props => (props.btnColor ? props.btnColor : '#2f77bb')};
  --arrow-color: ${props => (props.arrowColor ? props.arrowColor : '#3b3c36')};
  --arrow-hover: ${props => (props.arrowHover ? props.arrowHover : '#fff')};
  /* -------------------------------- */
  font-size: 50px;
  padding: 2px 17px;
  background: transparent;
  border: 3px solid var(--btn-color);
  color: var(--arrow-color);
  position: relative;
  z-index: 2;
  cursor: pointer;
  transition: color var(--trans-spd) var(--cubic-curve);

  &:hover {
    color: var(--arrow-hover);
  }

  &::before {
    content: '';
    background: var(--btn-color);
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    z-index: -1;
    transform: scaleY(0);
    transform-origin: 0 100%;
    transition: transform var(--trans-spd) var(--cubic-curve);
  }

  &:hover::before {
    transform: scaleY(1);
  }
`;

const DownButton = props => {
  return (
    <Button
      btnColor={props.btnColor}
      arrowColor={props.arrowColor}
      arrowHover={props.arrowHover}
    >
      &darr;
    </Button>
  );
};

export default DownButton;
