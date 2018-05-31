import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  /* ---- CSS Variables Section ----- */
  --trans-spd: 130ms;
  /* -------------------------------- */
  font-size: 50px;
  padding: 2px 17px;
  background: transparent;
  border: 3px solid #2f77bb;
  position: relative;
  z-index: 2;
  cursor: pointer;
  transition: color var(--trans-spd) ease-in;

  &:hover {
    color: white;
  }

  &::before {
    content: '';
    background: #2f77bb;
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    z-index: -1;
    transform: scaleY(0);
    transform-origin: 0 100%;
    transition: transform var(--trans-spd) ease-in;
  }

  &:hover::before {
    transform: scaleY(1);
  }
`;

const DownButton = () => {
  return <Button>&darr;</Button>;
};

export default DownButton;
