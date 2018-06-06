import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  /* ---- CSS Variables Section ----- */
  --btn-color: #5f9ea0;
  --btn-width: 180px;
  /* -------------------------------- */
  font-size: 20px;
  padding: 15px;
  border: 0;
  border-radius: 5px;
  background: var(--btn-color);
  color: white;
  width: var(--btn-width);
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
  transition: all 250ms;

  ${Button}:hover & {
    padding-right: 28px;
  }
`;

const SlideArrowButton = props => {
  return (
    <Button>
      <ButtonText>{props.children}</ButtonText>
    </Button>
  );
};

export default SlideArrowButton;
