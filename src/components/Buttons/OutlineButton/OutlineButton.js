import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  /* ---- CSS Variables Section ----- */
  --brdr-color: ${props => (props.brdrColor ? props.brdrColor : '#5f9ea0')};
  --fill-color: ${props => (props.fillColor ? props.fillColor : '#ffffff')};
  --font-color: var(--brdr-color);
  --trans-speed: 250ms;
  /* -------------------------------- */
  font-size: 30px;
  padding: 8px 24px;
  border-radius: 5px;
  border: 2px solid var(--brdr-color);
  color: var(--font-color);
  background: var(--fill-color);
  cursor: pointer;
  transition: background-color var(--trans-speed),
    color calc(var(--trans-speed) * 1.2);

  &:hover {
    color: ${props =>
      props.fontHoverColor ? props.fontHoverColor : 'var(--fill-color)'};
    background: var(--brdr-color);
  }
`;

const OutlineButton = props => {
  return (
    <Button
      brdrColor={props.brdrColor}
      fillColor={props.fillColor}
      fontHoverColor={props.fontHoverColor}
    >
      {props.children}
    </Button>
  );
};

export default OutlineButton;
