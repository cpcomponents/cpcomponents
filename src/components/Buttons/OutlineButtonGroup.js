import React from 'react';
import styled from 'styled-components';

const ButtonGroupWrapper = styled.div`
  /* ---- CSS Variables Section ----- */
  --pri-color: #5f9ea0;
  --sec-color: #ffffff;
  --font-color: var(--pri-color);
  --border-width: 2px;
  --trans-speed: 250ms;
  /* -------------------------------- */
  border: 2px solid var(--pri-color);
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  flex: auto;
  font-size: 30px;
  margin: calc(var(--border-width) * -1);
  border: 2px solid var(--pri-color);
  padding: 10px 30px;
  color: var(--font-color);
  cursor: pointer;
  transition: background-color var(--trans-speed),
    color calc(var(--trans-speed) * 1.2);

  &:hover {
    color: var(--sec-color);
    background: var(--pri-color);
  }
`;

const OutlineButtonGroup = () => {
  return (
    <ButtonGroupWrapper>
      <Button>Go</Button>
      <Button>For</Button>
      <Button>It</Button>
    </ButtonGroupWrapper>
  );
};

export default OutlineButtonGroup;
