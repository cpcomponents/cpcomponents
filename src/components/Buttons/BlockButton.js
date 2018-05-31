import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  /* ---- CSS Variables Section ----- */
  --btn-color: #5f9ea0;
  --hover-color: #538b8d;
  --font-color: #fff;
  --trans-speed: 250ms;
  /* -------------------------------- */
  display: block;
  width: 100%;
  font-size: 30px;
  padding: 10px 30px;
  border: 0;
  border-radius: 5px;
  background: var(--btn-color);
  color: var(--font-color);
  cursor: pointer;
  transition: background-color var(--trans-speed);

  &:hover {
    background: var(--hover-color);
  }
`;

const BlockButton = props => {
  return <Button>{props.children}</Button>;
};

export default BlockButton;
