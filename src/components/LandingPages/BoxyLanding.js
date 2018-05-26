import React, { Component } from 'react';
import styled from 'styled-components';

const vpScale = (minSize, maxSize, minScreen, maxScreen, scaleMode) => {
  let minmaxScale = {
    withPx(viewport) {
      return `calc(${minSize}px + (${maxSize} - ${minSize}) * (${viewport} - ${minScreen}px) /
        (${maxScreen} - ${minScreen}));`;
    },
    withVp(viewport) {
      return `calc(
        calc(${minScreen / 100}px * ${minSize}) + (calc(${maxScreen /
        100} * ${maxSize}) - calc(${minScreen /
        100} * ${minSize})) * (${viewport} - ${minScreen}px) /
        (${maxScreen} - ${minScreen})
      )`;
    }
  };

  switch (scaleMode) {
    case 'vw-vp':
      return minmaxScale.withVp('100vw');
    case 'vh-vp':
      return minmaxScale.withVp('100vh');
    case 'vw-px':
      return minmaxScale.withPx('100vw');
    case 'vh-px':
      return minmaxScale.withPx('100vh');
    case 'vmin-vp':
      return minmaxScale.withVp('100vmin');
    case 'vmin-px':
      return minmaxScale.withPx('100vmin');
    default:
      /* for debugging */
      console.log('vpScale - recieved invalid scale type vvv');
      console.log(
        `${minSize}, ${maxSize}, ${minScreen}, ${maxScreen}, '${scaleMode}'`
      );
  }
};

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville');
  min-height: 100vh;
  display: grid;
  grid-template-columns:
    minmax(40px, auto)
    auto
    auto
    minmax(40px, auto);
  grid-template-rows:
    minmax(40px, auto)
    auto
    minmax(40px, auto);

  @media (max-width: 900px) {
    grid-template-columns:
      minmax(5px, auto)
      auto
      minmax(5px, auto);
    grid-template-rows:
      minmax(95px, auto)
      auto
      auto
      minmax(95px, auto);
  }
`;

const TopText = styled.h3`
  grid-column: 2/3;
  grid-row: 2/3;
  justify-self: end;
  transform: translate(50%, -25px);
  margin-bottom: 50px;
  font-weight: bold;
  letter-spacing: 5px;
  color: #565656;

  @media (max-width: 900px) {
    grid-column: 2/3;
    grid-row: 2/3;
    justify-self: start;
    transform: translate(0%, -28px);
    font-size: ${vpScale(10, 25, 320, 900, 'vmin-px')};
  }
`;

const SideText = styled.h3`
  white-space: nowrap;
  font-weight: bold;
  color: #565656;
  font-size: ${vpScale(14, 25, 320, 1400, 'vmin-px')};
  writing-mode: vertical-rl;
  text-orientation: upright;
  grid-column: 1/2;
  grid-row: 2/3;
  justify-self: end;
  align-self: start;
  padding: ${vpScale(8, 5, 320, 1400, 'vmin-px')};

  @media (max-width: 900px) {
    padding: 0;
    grid-column: 2/3;
    grid-row: 3/4;
    align-self: end;
    writing-mode: vertical-lr;
    padding-bottom: 30px;
    padding-right: ${vpScale(20, 40, 320, 900, 'vw-px')};
  }
`;
const transX = vpScale(-12, -20, 320, 900, 'vw-px');
const CircleLogo = styled.div`
  --transX: ${transX};
  grid-column: 3/4;
  grid-row: 2/3;
  justify-self: end;
  transform: translate(-50%, -35px);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #000;
  color: white;
  font-size: 16px;
  line-height: 50px;
  letter-spacing: 8px;
  padding-left: 8px;
  text-align: center;

  @media (max-width: 900px) {
    grid-column: 2/3;
    grid-row: 2/3;
    transform: translate(var(--transX), -35px);
  }
`;

const OutlineBox = styled.div`
  grid-column: 2/4;
  grid-row: 2/3;
  border: 2px solid #d4d4d4;

  @media (max-width: 900px) {
    grid-column: 2/3;
    grid-row: 2/4;
  }
`;

const ImagesSection = styled.section`
  grid-column: 2/3;
  grid-row: 2/3;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr min-content 1fr;

  @media (max-width: 900px) {
    transform: translate(0, 0);
  }
`;

const LargeImgWrapper = styled.div`
  border-color: white;
  border-style: solid;
  border-width: ${vpScale(10, 100, 320, 2500, 'vmin-px')};
  overflow: hidden;
  transform: rotate(-45deg);
  grid-column: 1/2;
  grid-row: 2/3;
  width: ${vpScale(190, 460, 320, 1400, 'vmin-px')};
  height: ${vpScale(190, 460, 320, 1400, 'vmin-px')};
  align-self: center;
  justify-self: center;

  & > img {
    width: 150%;
    height: 150%;
    object-fit: cover;
    transform: rotate(45deg) translate(-25%, -10%);
  }

  @media (max-width: 900px) {
    width: ${vpScale(163, 425, 320, 900, 'vmin-px')};
    height: ${vpScale(163, 425, 320, 900, 'vmin-px')};
  }
`;

const SmallImgWrapper = styled.div`
  background: white;
  border-top-style: solid;
  border-top-color: white;
  border-top-width: ${vpScale(10, 100, 320, 2500, 'vmin-px')};
  border-left-style: solid;
  border-left-color: white;
  border-left-width: ${vpScale(10, 100, 320, 2500, 'vmin-px')};
  width: 50%;
  height: 50%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;

  &::after {
    content: '';
    position: absolute;
    background: #dada00;
    top: -5%;
    left: -5%;
    right: -5%;
    bottom: -5%;
    z-index: 1;
  }

  & > img {
    position: relative;
    z-index: 2;
    transform: rotate(45deg) translate(-24%, -7%);
    width: 150%;
    height: 150%;
    object-fit: cover;
  }
`;

const ContentBox = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  align-self: end;
  justify-self: center;
  z-index: 1;
  white-space: nowrap;
  background: white;
  text-align: center;
  padding: 10px 20px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  transform: translateY(50%);
  font-size: ${vpScale(12, 30, 320, 1400, 'vmin-px')};

  @media (max-width: 900px) {
    transform: translateY(50%);
    grid-column: 1/2;
    grid-row: 2/3;
    align-self: end;
    font-size: ${vpScale(12, 50, 320, 2500, 'vmin-px')};
  }
`;

const textTransX = vpScale(50, 50, 320, 1400, 'vmin-px');
const ContentSection = styled.section`
  --textTransX: ${textTransX};
  grid-column: 3/4;
  grid-row: 2/3;
  display: grid;
  grid-template-rows: 1fr auto auto auto 1fr;
  grid-template-columns: auto;
  text-align: right;
  padding: 30px 30px 30px 0;

  p,
  h2,
  h6 {
    justify-self: end;
    align-content: center;
    padding: ${vpScale(8, 60, 320, 1400, 'vmin-px')} 0;
    background: white;
    transform: translateX(var(--textTransX));
    background: white;
  }

  p {
    grid-row: 2/3;
    font-weight: bold;
    color: slategrey;
    font-size: ${vpScale(16, 25, 320, 1400, 'vmin-px')};
  }
  h2 {
    grid-row: 3/4;
    font-family: 'Libre Baskerville', serif;
    letter-spacing: ${vpScale(15, 1, 320, 1400, 'vmin-px')};
    font-size: ${vpScale(40, 45, 320, 1400, 'vmin-px')};
    font-weight: bold;
  }
  h6 {
    grid-row: 4/5;
    font-size: ${vpScale(10, 15, 320, 1400, 'vmin-px')};
    color: #888888;
    width: ${vpScale(300, 400, 901, 1400, 'vw-px')};
  }

  @media (max-width: 900px) {
    grid-column: 2/3;
    grid-row: 3/4;
    grid-template-rows:
      ${vpScale(50, 40, 320, 1400, 'vmin-px')}
      auto auto auto 1fr;
    grid-template-columns: auto;
    text-align: left;
    padding: 0;

    p,
    h2,
    h6 {
      justify-self: start;
      align-content: start;
      padding: 0;
      background: transparent;
      transform: translateX(0);
    }

    p {
      grid-row: 2/3;
      text-align: right;
      justify-self: right;
      padding: 0 20px 20px 20px;
      font-size: ${vpScale(12, 20, 320, 900, 'vmin-px')};
      margin-right: ${vpScale(0, 40, 320, 900, 'vmin-px')};
    }
    h2 {
      grid-row: 3/4;
      margin-left: ${vpScale(0, 20, 320, 900, 'vmin-px')};
      font-size: ${vpScale(25, 60, 320, 900, 'vmin-px')};
      padding: 0 20px 40px 20px;
      letter-spacing: -1px;
    }
    h6 {
      grid-row: 4/5;
      font-size: ${vpScale(12, 20, 320, 900, 'vmin-px')};
      margin-left: ${vpScale(0, 40, 320, 900, 'vmin-px')};
      width: ${vpScale(170, 400, 320, 900, 'vmin-px')};
      padding: 0 20px 60px 20px;
    }
  }
`;

class BoxyLanding extends Component {
  render() {
    return (
      <Wrapper>
        <TopText>We're Lost</TopText>
        <SideText>
          aaron<br />casanova
        </SideText>
        <CircleLogo>LA</CircleLogo>
        <OutlineBox />
        <ImagesSection>
          <LargeImgWrapper>
            <img
              src="https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=92b82a18bf4bfbdfe1bd7eed8cd4ba49&auto=format&fit=crop&w=675&q=80"
              alt="dog"
            />
            <SmallImgWrapper>
              <img
                src="https://images.unsplash.com/photo-1517213849290-bbbfffdc6da3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=943dfad4aa75252116f83032204a5608&auto=format&fit=crop&w=800&q=80"
                alt="cat"
              />
            </SmallImgWrapper>
          </LargeImgWrapper>
          <ContentBox>CREATE A SHARED RITUAL</ContentBox>
        </ImagesSection>
        <ContentSection>
          <p>
            Friday 20 April<br />AM
          </p>
          <h2>
            To Build<br />Relationships
          </h2>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            voluptatibus ut eveniet soluta ipsum quam enim libero obcaecati cum
            architecto nisi
          </h6>
        </ContentSection>
      </Wrapper>
    );
  }
}

export default BoxyLanding;
