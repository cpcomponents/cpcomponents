import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const arrowAni = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  5% {
    transform: translateX(-0.1rem);
  }
  100% {
    transform: translateX(1rem);
    opacity: 0;
  }
`;

const arrowFixedAni = keyframes`
  5% {
    opacity: 0;
  }
  20% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const Transition = css`
  transition: all 750ms var(--ease);
`;

const Wrapper = styled.div`
  --ease: cubic-bezier(0.2, 1, 0.3, 1);
`;

const G = styled.g`
  transform: ${props => (props.left ? 'rotate(180deg)' : null)};
  transform-origin: 50% 50%;
`;

const Arrow = styled.polygon`
  ${Transition};
`;
const ArrowFixed = styled.polygon`
  ${Transition};
`;
const Path = styled.path`
  ${Transition};
`;

const SVG = styled.svg`
  width: ${props => (props.size ? props.size : '80px')};
  height: auto;
  margin: 0 2rem;
  cursor: pointer;
  overflow: visible;

  &:hover ${Arrow}, &:hover ${ArrowFixed}, &:hover ${Path} {
    fill: ${props => (props.color ? props.color : '#79bec6')};
  }

  &:hover ${Arrow} {
    animation: ${arrowAni} 2500ms var(--ease) infinite;
  }
  &:hover ${ArrowFixed} {
    animation: ${arrowFixedAni} 2500ms var(--ease) infinite;
  }
`;

const NextButton = props => {
  return (
    <Wrapper>
      <SVG
        size={props.size}
        color={props.color}
        viewBox="0 0 18 17"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
      >
        <G left={props.left}>
          <Arrow points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596" />
          <ArrowFixed points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596" />
          <Path d="M-1.48029737e-15,0.56157424 L-1.48029737e-15,16.1929159 L9.708,8.33860465 L-2.66453526e-15,0.56157424 L-1.48029737e-15,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z" />
        </G>
      </SVG>
    </Wrapper>
  );
};

export default NextButton;
