import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  /* ---- CSS Variables Section ----- */
  --btn-color: ${props => (props.btnColor ? props.btnColor : '#5f9ea0')};
  --hover-color: ${props => (props.hoverColor ? props.hoverColor : '#538b8d')};
  --font-color: ${props => (props.fontColor ? props.fontColor : '#fff')};
  --trans-speed: 250ms;
  /* -------------------------------- */
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

const DarkenButton = props => {
  return (
    <Button
      fontColor={props.fontColor}
      btnColor={props.btnColor}
      hoverColor={props.hoverColor}
    >
      {props.children}
    </Button>
  );
};

export default DarkenButton;
