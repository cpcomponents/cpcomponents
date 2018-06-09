import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  /* ---- CSS Variables Section ----- */
  --btn-color: ${props => (props.btnColor ? props.btnColor : '#5f9ea0')};
  --hover-color: ${props => (props.hoverColor ? props.hoverColor : '#538b8d')};
  --font-color: ${props => (props.fontColor ? props.fontColor : '#fff')};
  --border-width: 2px;
  --trans-speed: 250ms;
  /* -------------------------------- */
  border: none;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  flex: auto;
  margin: calc(var(--border-width) * -1);
  border: var(--border-width) solid white;
  padding: 10px 30px;
  font-size: 30px;
  background: var(--btn-color);
  color: var(--font-color);
  cursor: pointer;
  transition: background-color var(--trans-speed);

  &:hover {
    background: var(--hover-color);
  }
`;

const DarkenButtonGroup = props => {
  return (
    <ButtonWrapper
      fontColor={props.fontColor}
      btnColor={props.btnColor}
      hoverColor={props.hoverColor}
    >
      <Button>Laugh</Button>
      <Button>Out</Button>
      <Button>Loud</Button>
    </ButtonWrapper>
  );
};

export default DarkenButtonGroup;
