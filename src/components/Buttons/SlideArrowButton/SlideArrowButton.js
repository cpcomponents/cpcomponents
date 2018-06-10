import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  /* ---- CSS Variables Section ----- */
  --btn-color: ${props => (props.btnColor ? props.btnColor : '#5f9ea0')};
  --font-color: ${props => (props.fontColor ? props.fontColor : '#fff')};
  --btn-width: 180px;
  /* -------------------------------- */
  font-size: 20px;
  padding: 15px;
  border: 0;
  border-radius: 5px;
  background: var(--btn-color);
  color: var(--font-color);
  width: var(--btn-width);
  cursor: pointer;
  position: relative;

  &::after {
    content: '⇾';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    transition: all 250ms;
  }

  &:hover::after {
    right: 18px;
    opacity: 1;
  }
`;

const ButtonText = styled.span`
  color: var(--font-color);
  transition: all 250ms;

  ${Button}:hover & {
    padding-right: 28px;
  }
`;

const SlideArrowButton = props => {
  return (
    <Button btnColor={props.btnColor} fontColor={props.fontColor}>
      <ButtonText>{props.children}</ButtonText>
    </Button>
  );
};

export default SlideArrowButton;
