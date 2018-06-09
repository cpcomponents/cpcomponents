import React from 'react';
import styled from 'styled-components';

const ButtonGroupWrapper = styled.div`
  /* ---- CSS Variables Section ----- */
  --brdr-color: ${props => (props.brdrColor ? props.brdrColor : '#5f9ea0')};
  --fill-color: ${props => (props.fillColor ? props.fillColor : '#ffffff')};
  --font-color: var(--brdr-color);
  --border-width: 2px;
  --trans-speed: 250ms;
  /* -------------------------------- */
  background: var(--fill-color);
  border: 2px solid var(--brdr-color);
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  background: var(--fill-color);
  flex: auto;
  font-size: 30px;
  margin: calc(var(--border-width) * -1);
  border: 2px solid var(--brdr-color);
  padding: 10px 30px;
  color: var(--font-color);
  cursor: pointer;
  transition: background-color var(--trans-speed),
    color calc(var(--trans-speed) * 1.2);

  &:hover {
    color: ${props =>
      props.fontHoverColor ? props.fontHoverColor : 'var(--fill-color)'};
    background: var(--brdr-color);
  }
`;

const OutlineButtonGroup = props => {
  return (
    <ButtonGroupWrapper
      brdrColor={props.brdrColor}
      fillColor={props.fillColor}
      fontHoverColor={props.fontHoverColor}
    >
      <Button>Go</Button>
      <Button>For</Button>
      <Button>It</Button>
    </ButtonGroupWrapper>
  );
};

export default OutlineButtonGroup;
