import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  /* ---- CSS Variables Section ----- */
  --btn-color: #5f9ea0;
  --hover-color: #538b8d;
  --border-width: 2px;
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
  color: white;
  cursor: pointer;

  &:hover {
    background: var(--hover-color);
  }
`;

const DarkenButtonGroup = () => {
  return (
    <ButtonWrapper>
      <Button>Laugh</Button>
      <Button>Out</Button>
      <Button>Loud</Button>
    </ButtonWrapper>
  );
};

export default DarkenButtonGroup;
