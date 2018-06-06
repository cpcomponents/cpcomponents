import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  /* ---- CSS Variables Section ----- */
  --trans-spd: 420ms;
  --cubic-curve: cubic-bezier(0.57, 0.43, 0, 1.01);
  /* -------------------------------- */
  font-size: 50px;
  padding: 2px 17px;
  background: transparent;
  border: 3px solid #2f77bb;
  position: relative;
  z-index: 2;
  cursor: pointer;
  transition: color var(--trans-spd) var(--cubic-curve);

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
    transition: transform var(--trans-spd) var(--cubic-curve);
  }

  &:hover::before {
    transform: scaleY(1);
  }
`;

const DownButton = () => {
  return <Button>&darr;</Button>;
};

export default DownButton;
