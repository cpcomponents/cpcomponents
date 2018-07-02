import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* ---- CSS Variables Section ----- */
  --color: ${props => (props.color ? props.color : '#ffab9d')};
  --size: ${props => (props.size ? props.size : '50px')};
  /* -------------------------------- */
  font-family: Avenir, sans-serif;
  color: #111;
`;

const A = styled.a`
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
  position: relative;

  padding: calc(var(--size) / 8) calc(var(--size) / 3.5);
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border-radius: calc(var(--size) / 2);
    background: var(--color);
    opacity: 0.6;
    width: var(--size);
    height: var(--size);
    transition: all 0.3s ease;
  }

  &:hover::before {
    width: 100%;
    opacity: 1;
  }

  /* &:active {
    transform: scale(0.96);
  } */
`;

const Text = styled.span`
  white-space: nowrap;
  display: inline-block;
  position: relative;
  font-size: calc(var(--size) / 3.2);
  font-weight: 900;
  letter-spacing: calc(var(--size) / 12.5);
  text-transform: uppercase;
`;

const Arrow = styled.span`
  font-size: calc(var(--size) / 2);
  display: inline-block;
  margin-left: calc(var(--size) / 3.5);
  transform: translate(-5px, -10%);
  transition: transform 0.3s ease;

  ${A}:hover & {
    transform: translate(0, -10%);
  }
`;

const CircleSlideLink = props => {
  return (
    <Wrapper color={props.priColor} size={props.size}>
      <A href={props.href} target="_blank">
        <Text>{props.children}</Text>
        <Arrow role="img" aria-label="Arrow">
          ↠
        </Arrow>
      </A>
    </Wrapper>
  );
};

export default CircleSlideLink;
