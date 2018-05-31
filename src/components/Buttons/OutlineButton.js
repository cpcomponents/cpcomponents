import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  /* ---- CSS Variables Section ----- */
  --pri-color: #5f9ea0;
  --sec-color: #ffffff;
  --font-color: var(--pri-color);
  --trans-speed: 250ms;
  /* -------------------------------- */
  font-size: 30px;
  padding: 8px 24px;
  border-radius: 5px;
  border: 2px solid var(--pri-color);
  color: var(--font-color);
  background: var(--sec-color);
  cursor: pointer;
  transition: background-color var(--trans-speed),
    color calc(var(--trans-speed) * 1.2);

  &:hover {
    color: var(--sec-color);
    background: var(--pri-color);
  }
`;

const OutlineButton = props => {
  return <Button>{props.children}</Button>;
};

export default OutlineButton;
