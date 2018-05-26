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
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,700');

  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
  min-height: 100vh;
  display: grid;
  grid-template-columns:
    1fr
    [Content-start Img2-start]
    ${vpScale(7, 4, 320, 750, 'vw-vp')}
    [Img1-start]
    ${vpScale(33, 33, 320, 750, 'vw-vp')}
    [Img1-end]
    ${vpScale(13, 26, 320, 750, 'vw-vp')}
    [Img3-start]
    ${vpScale(41, 31, 320, 750, 'vw-vp')}
    [Img2-end Img3-end Content-end]
    1fr;
  grid-template-rows:
    minmax(20px, 1fr)
    [Content-start Logo-start]
    ${vpScale(15, 7, 320, 1300, 'vh-vp')}
    [Logo-end Nav-start]
    ${vpScale(20, 8, 320, 1300, 'vh-vp')}
    [Nav-end Img1-start MainHeading-start]
    ${vpScale(25, 15, 320, 1300, 'vh-vp')}
    [MainHeading-end Img2-start]
    ${vpScale(10, 6, 320, 1300, 'vh-vp')}
    [Img1-end]
    ${vpScale(20, 19, 320, 1300, 'vh-vp')}
    [Img3-start]
    ${vpScale(18, 7, 320, 1300, 'vh-vp')}
    [Img2-end]
    ${vpScale(38, 20, 320, 1300, 'vh-vp')}
    [Img3-end Email-start]
    ${vpScale(20, 7, 320, 1300, 'vh-vp')}
    [Email-end Button-start]
    ${vpScale(20, 7, 320, 1300, 'vh-vp')}
    [Button-end Content-end]
    minmax(20px, 1fr);

  /* ------------------------- @media - Wrapper ------- */
  @media (min-width: 750px) {
    grid-template-columns:
      1fr
      [Content-start Img2-start]
      ${vpScale(4, 9, 750, 1050, 'vw-vp')}
      [Img1-start]
      ${vpScale(33, 25, 750, 1050, 'vw-vp')}
      [Img1-end]
      ${vpScale(26, 22, 750, 1050, 'vw-vp')}
      [Img3-start]
      ${vpScale(31, 25, 750, 1050, 'vw-vp')}
      [Img2-end Img3-end Content-end]
      1fr;
    grid-template-rows:
      minmax(20px, 1fr)
      [Content-start Logo-start]
      ${vpScale(11, 7, 600, 1300, 'vh-vp')}
      [Logo-end Nav-start]
      ${vpScale(15, 9, 600, 1300, 'vh-vp')}
      [Nav-end Img1-start MainHeading-start]
      ${vpScale(25, 15, 600, 1300, 'vh-vp')}
      [MainHeading-end Img2-start]
      ${vpScale(10, 6, 600, 1300, 'vh-vp')}
      [Img1-end]
      ${vpScale(30, 19, 600, 1300, 'vh-vp')}
      [Img3-start]
      ${vpScale(14, 7, 600, 1300, 'vh-vp')}
      [Img2-end]
      ${vpScale(42, 20, 600, 1300, 'vh-vp')}
      [Img3-end Email-start]
      ${vpScale(13, 7, 600, 1300, 'vh-vp')}
      [Email-end Button-start]
      ${vpScale(13, 7, 600, 1300, 'vh-vp')}
      [Button-end Content-end]
      minmax(20px, 1fr);
  }
  /* ------------------------- @media - Wrapper ------- */
  @media (min-width: 1050px) {
    grid-template-columns:
      1fr
      [Content-start]
      ${vpScale(33, 24, 1050, 1920, 'vw-vp')}
      [VertNums-start]
      ${vpScale(8, 6, 1050, 1920, 'vw-vp')}
      [Img2-start]
      ${vpScale(7, 7, 1050, 1920, 'vw-vp')}
      [Img1-start]
      ${vpScale(12, 8, 1050, 1920, 'vw-vp')}
      [Img3-start]
      ${vpScale(22, 18, 1050, 1920, 'vw-vp')}
      [Img1-end]
      ${vpScale(8, 8, 1050, 1920, 'vw-vp')}
      [Content-end]
      1fr;
    grid-template-rows:
      minmax(20px, 1fr)
      [Img1-start]
      ${vpScale(19, 13, 720, 1920, 'vh-vp')}
      [Img2-start]
      ${vpScale(8, 6, 720, 1920, 'vh-vp')}
      [Img1-end]
      ${vpScale(30, 23, 720, 1920, 'vh-vp')}
      [Img3-start]
      ${vpScale(10, 8, 720, 1920, 'vh-vp')}
      [Img2-end]
      ${vpScale(30, 16, 720, 1920, 'vh-vp')}
      [Img3-end]
      minmax(20px, 1fr);
  }
`;

const Logo = styled.h2`
  grid-column: Content-start / Content-end;
  grid-row: Logo-start / Logo-end;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Poppins', sans-serif;
  font-weight: bold;

  font-size: ${vpScale(28, 46, 320, 750, 'vmin-px')};

  @media (min-width: 750px) {
    font-size: ${vpScale(30, 46, 320, 1050, 'vmin-px')};
  }
  @media (min-width: 1050px) {
    grid-column: Content-start / VertNums-start;
    grid-row: Img1-start / Img2-start;
    justify-content: flex-start;

    font-weight: normal;
    font-size: ${vpScale(30, 60, 320, 1920, 'vmin-px')};
  }
`;

const Nav = styled.ul`
  grid-column: Content-start / Content-end;
  grid-row: Nav-start / Nav-end;
  display: flex;
  justify-content: center;

  list-style: none;
  font-size: ${vpScale(17, 27, 320, 750, 'vmin-px')};

  li {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    padding: 10px;
  }

  @media (min-width: 750px) {
    font-size: ${vpScale(18, 27, 320, 1050, 'vmin-px')};
  }
  @media (min-width: 1050px) {
    grid-column: Content-start / VertNums-start;
    grid-row: Img2-end / Img3-end;
    justify-content: flex-start;
    align-items: center;

    font-size: ${vpScale(15, 23, 320, 1920, 'vmin-px')};
  }
`;

const MainHeading = styled.h2`
  grid-column: Img1-end / Content-end;
  grid-row: MainHeading-start / MainHeading-end;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Josefin Sans', sans-serif;
  font-size: ${vpScale(32, 56, 320, 750, 'vmin-px')};
  font-weight: bold;

  @media (min-width: 750px) {
    font-size: ${vpScale(40, 56, 320, 1050, 'vmin-px')};
  }
  @media (min-width: 1050px) {
    grid-column: Content-start / VertNums-start;
    grid-row: Img2-start / Img2-end;
    justify-content: flex-start;
    align-items: flex-start;

    font-size: ${vpScale(45, 140, 320, 1920, 'vmin-px')};

    position: relative;
    &::after {
      content: '';
      position: absolute;
      background: #000;
      top: ${vpScale(-9, -40, 320, 1920, 'vmin-px')};
      left: ${vpScale(29, 92, 320, 1920, 'vmin-px')};
      width: ${vpScale(48, 130, 320, 1920, 'vmin-px')};
      height: ${vpScale(2, 6, 320, 1920, 'vmin-px')};
    }
  }
`;

const DescText = styled.p`
  grid-column: Content-start / Img3-start;
  grid-row: Img2-end / Img3-end;
  justify-self: center;
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  color: #9e9e9e;
  width: ${vpScale(45, 50, 320, 750, 'vw-vp')};
  font-size: ${vpScale(10, 19, 320, 750, 'vmin-px')};

  @media (min-width: 750px) {
    width: ${vpScale(50, 44, 750, 1050, 'vw-vp')};
    font-size: ${vpScale(19, 22, 320, 1050, 'vmin-px')};
  }
  @media (min-width: 1050px) {
    grid-column: Content-start / VertNums-start;
    grid-row: Img2-start / Img2-end;
    justify-self: start;
    justify-content: flex-start;
    align-items: flex-end;

    text-align: left;

    width: 100%;
    font-size: ${vpScale(12, 30, 320, 1920, 'vmin-px')};
    padding-bottom: 20px;
  }
`;

const VerticalNums = styled.ul`
  display: none;
  list-style: none;

  @media (min-width: 1050px) {
    display: block;
    grid-column: VertNums-start / Img2-start;
    grid-row: Img1-end / Img3-start;

    line-height: 2;
    font-size: ${vpScale(16, 40, 320, 1920, 'vmin-px')};

    li:nth-of-type(2) {
      text-decoration: underline;
    }
  }
`;

const Img1 = styled.img`
  grid-column: Img1-start / Img1-end;
  grid-row: Img1-start / Img1-end;

  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 1;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);
`;

const Img2 = styled.img`
  grid-column: Img2-start / Img2-end;
  grid-row: Img2-start / Img2-end;

  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 1px 5px 20px rgba(0, 0, 0, 0.3);

  @media (min-width: 1050px) {
    grid-column: Img2-start / Content-end;
  }
`;

const Img3 = styled.img`
  grid-column: Img3-start / Img3-end;
  grid-row: Img3-start / Img3-end;

  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(90%) invert(10%) sepia(80%) brightness(50%);
  box-shadow: 3px 7px 25px rgba(0, 0, 0, 0.2);

  @media (min-width: 1050px) {
    grid-column: Img3-start / Content-end;
  }
`;

const Email = styled.h6`
  grid-column: Content-start / Content-end;
  grid-row: Email-start / Email-end;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #9e9e9e;
  font-size: ${vpScale(14, 27, 320, 750, 'vmin-px')};
  font-weight: bold;

  @media (min-width: 750px) {
    font-size: ${vpScale(17, 27, 320, 1050, 'vmin-px')};
  }
  @media (min-width: 1050px) {
    grid-column: VertNums-start / Img3-start;
    grid-row: Img2-end / Img3-end;
    align-items: center;

    font-size: ${vpScale(14, 20, 320, 1920, 'vmin-px')};
  }
`;

const CTAButton = styled.button`
  grid-column: Content-start / Content-end;
  grid-row: Button-start / Button-end;
  justify-self: center;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid #000;
  background: #fff;
  padding: 10px;
  font-size: ${vpScale(14, 22, 320, 750, 'vmin-px')};
  font-weight: bold;
  transition: 250ms;

  &:hover {
    background: #000;
    color: white;
  }

  @media (min-width: 750px) {
    font-size: ${vpScale(16, 22, 320, 1050, 'vmin-px')};
  }
  @media (min-width: 1050px) {
    grid-column: Content-start / VertNums-start;
    grid-row: Img2-end / Img3-end;
    justify-self: start;
    align-self: start;
    justify-content: flex-start;
    align-items: flex-start;

    font-size: ${vpScale(13, 28, 320, 1920, 'vmin-px')};
  }
`;

class APlayground extends Component {
  render() {
    return (
      <Wrapper>
        <Logo>Play Time</Logo>
        <Nav>
          <li>here</li>
          <li>comes</li>
          <li>the</li>
          <li>funCooker</li>
        </Nav>
        <MainHeading>
          Ayo<br />River
        </MainHeading>
        <DescText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore in
          blanditiis illum architecto eius! Nemo, sapiente! Perspiciatis id aut
          velit labore molestias minima natus necessitatibus.
        </DescText>
        <VerticalNums>
          <li>01</li>
          <li>02</li>
          <li>03</li>
        </VerticalNums>
        <Img1
          src="https://images.pexels.com/photos/127567/pexels-photo-127567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="fun"
        />
        <Img2
          src="https://images.pexels.com/photos/267858/pexels-photo-267858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="fun"
        />
        <Img3
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLpL8c3Mi1DjbjGLNxYvn7c_wpUq-mjUzmGbtSjlbdbASkvpZ64w"
          alt="fun"
        />
        <Email>mraaroncasanova@gmail.com</Email>
        <CTAButton>get more</CTAButton>
      </Wrapper>
    );
  }
}

export default APlayground;
