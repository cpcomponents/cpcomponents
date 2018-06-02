import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* ---- CSS Variables Section ----- */
  --trans-speed: 600ms;
  --cubic-curve: cubic-bezier(0.43, -0.06, 0, 1.07);
  --pri-color: #9dc9f3;
  --brdr-width: 55%;
  --arrow-size: 40px;
  /* -------------------------------- */
  padding: 20px;
  max-width: calc(200px + (320 - 200) * (100vw - 320px) / (750 - 320));
  position: relative;
  z-index: 2;

  &::before {
    border: 6px solid var(--pri-color);
    background: transparent;
    content: '';
    position: absolute;
    width: var(--brdr-width);
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    transition: background-color var(--trans-speed) var(--cubic-curve),
      width var(--trans-speed) var(--cubic-curve);
  }

  &:hover::before {
    background: var(--pri-color);
    width: 100%;
  }
`;

const MainHeading = styled.h2`
  font-size: calc(40px + (53 - 40) * (100vw - 320px) / (750 - 320));
  margin: 15px 0 25px;
`;

const SubHeading = styled.h3`
  font-size: calc(21px + (25 - 21) * (100vw - 320px) / (750 - 320));
  margin: 15px 0;
`;

const Content = styled.p`
  font-size: calc(12px + (14 - 12) * (100vw - 320px) / (750 - 320));
  line-height: 1.6;
  margin-bottom: 15px;
`;

const RightArrow = styled.span`
  display: block;
  margin: 0;
  padding: 0;
  transform: translate(calc(var(--brdr-width) - var(--arrow-size)));
  font-size: var(--arrow-size);
  transition: transform var(--trans-speed) var(--cubic-curve);

  ${Wrapper}:hover & {
    transform: translate(calc(100% - var(--arrow-size)));
  }
`;

const HalfFullCard = props => {
  return (
    <Wrapper>
      <MainHeading>{props.mainHeading}</MainHeading>
      <SubHeading>{props.subHeading}</SubHeading>
      <Content>{props.content}</Content>
      <div>
        <RightArrow>&#x021A0;</RightArrow>
      </div>
    </Wrapper>
  );
};

export default HalfFullCard;
