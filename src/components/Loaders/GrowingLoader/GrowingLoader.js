import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  /* ---- CSS Variables Section ----- */
  --color: ${props => (props.color ? props.color : '#79bec6')};
  --ani-duration: 1234ms;
  --ani-time-func: ease-in-out;
  /* -------------------------------- */
`;

const grow = keyframes`
  0%, 100% {
    transform: scaleY(1);
  }

  50% {
    transform: scaleY(2);
  }
`;

const Bar = styled.span`
  display: inline-block;
  width: 5px;
  height: 18px;
  background-color: var(--color);
  border-radius: 4px;
  margin: 5px;

  &:nth-child(1) {
    animation: ${grow} var(--ani-duration) var(--ani-time-func) infinite;
  }

  &:nth-child(2) {
    animation: ${grow} var(--ani-duration) var(--ani-time-func) 100ms infinite;
  }

  &:nth-child(3) {
    animation: ${grow} var(--ani-duration) var(--ani-time-func) 200ms infinite;
  }

  &:nth-child(4) {
    animation: ${grow} var(--ani-duration) var(--ani-time-func) 300ms infinite;
  }
`;

const GrowingLoader = props => {
  return (
    <Wrapper color={props.color}>
      <Bar />
      <Bar />
      <Bar />
      <Bar />
    </Wrapper>
  );
};

export default GrowingLoader;
