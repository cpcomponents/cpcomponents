import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* ---- CSS Variables Section ----- */
  --sec-color: #444;
  --pri-color: #c2956e;
  /* -------------------------------- */
  width: calc(230px + (255 - 230) * (100vmin - 320px) / (750 - 320));
  height: calc(230px + (255 - 230) * (100vmin - 320px) / (750 - 320));
  padding: 30px 20px 70px;
  background: #efefef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 900ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: scale(1.06);
  }
`;

const Icon = styled.i`
  color: var(--pri-color);
  font-size: calc(50px + (60 - 50) * (100vmin - 320px) / (750 - 320));
  margin: 15px;
`;

const HeadingOne = styled.h3`
  color: var(--pri-color);
  font-size: calc(25px + (28 - 25) * (100vmin - 320px) / (750 - 320));
  font-weight: normal;
  margin: 15px;
  padding-bottom: 20px;
  border-bottom: 2px solid #cfcfcf;
`;

const HeadingTwo = styled.h2`
  letter-spacing: 4px;
  margin: 12px;
  font-weight: bold;
  font-size: calc(20px + (22 - 20) * (100vmin - 320px) / (750 - 320));
  color: var(--pri-color);
  white-space: nowrap;
`;

const MirroredHeading = HeadingTwo.extend`
  color: var(--sec-color);
  margin-top: -28px;
  font-weight: bold;
  letter-spacing: 6px;
`;

const PopOutCard = props => {
  return (
    <Wrapper>
      <Icon>{props.icon}</Icon>
      <HeadingOne>{props.headingOne}</HeadingOne>
      <HeadingTwo>{props.headingTwo}</HeadingTwo>
      <MirroredHeading>{props.headingTwo}</MirroredHeading>
    </Wrapper>
  );
};

export default PopOutCard;
