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
 console.log('vpScale - recieved invalid scale type vvv');
 console.log(
 `${minSize}, ${maxSize}, ${minScreen}, ${maxScreen}, '${scaleMode}'`
 );
 }
};

const Wrapper = styled.div`
 position: relative;
 z-index: -2;
 min-height: 100%;
 padding: ${vpScale(50, 300, 320, 2500, 'vw-px')} 0;
 background: #cfdcd3;
 overflow: hidden;
 position: relative;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`;

const Os = styled.div`
 z-index: -1;
 font-size: ${vpScale(280, 2500, 320, 2500, 'vmin-px')};
 font-weight: bold;
 color: #dce7e1;

 &:first-child {
 position: absolute;
 top: 0;
 left: 0;
 transform: translate(-33%, -33%);
 }
 &:last-child {
 position: absolute;
 bottom: 0;
 right: 0;
 transform: translate(33%, 33%);
 }
`;

const CardWrapper = styled.div`
 width: ${vpScale(300, 2200, 320, 2500, 'vw-px')};
 min-height: 100%;
 background: #fff;
 border-radius: 8px;
 box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
 overflow: hidden;
 display: flex;
 @media (max-width: 1210px) {
 flex-direction: column;
 }
`;

const LeftWrap = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
`;
const RightWrap = styled.div`
 width: ${vpScale(600, 1000, 1210, 2500, 'vw-px')};
 @media (max-width: 1210px) {
 width: 100%;
 }
`;

const NavWrapper = styled.div`
 display: flex;
 @media (max-width: 900px) {
 flex-direction: column;
 align-items: center;
 }
`;

const NavItemsWrapper = styled.div`
 color: #fff;
 width: 100%;
 background: #4e7e64;
 padding: 20px 40px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 @media (max-width: 900px) {
 flex-direction: column;
 }
`;

const Logo = styled.h2`
 color: #fff;
 border-bottom: 2px solid #fff;
`;

const NavItems = styled.ul`
 list-style: none;
 display: flex;

 li {
 padding: 20px 0 20px 20px;
 font-size: ${vpScale(18, 32, 320, 2500, 'vw-px')};
 }
`;

const NavSearch = styled.div`
 font-size: ${vpScale(18, 30, 320, 2500, 'vw-px')};
 padding: 20px 40px;
 text-align: bottom;
 width: 100%;
 display: flex;
 justify-content: flex-start;
 align-items: center;

 @media (max-width: 900px) {
 justify-content: center;
 }

 & > span {
 padding-bottom: 4px;
 display: flex;
 justify-content: space-between;
 border-bottom: 1px solid #000;
 }
`;

const MagGlass = styled.span`
 margin-left: ${vpScale(150, 400, 320, 2500, 'vw-px')};
`;

const CardBody = styled.div`
 padding: ${vpScale(20, 60, 320, 2500, 'vw-px')};
 display: flex;
 @media (max-width: 600px) {
 flex-direction: column;
 }
`;

const BodyContentWrapper = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 padding-top: 30px;
 padding-left: ${vpScale(0, 200, 320, 2500, 'vw-px')};
 padding-right: 50px;

 h2 {
 line-height: 0.85;
 font-size: ${vpScale(60, 100, 320, 2500, 'vw-px')};
 color: #4e7e64;
 font-weight: bold;
 }

 p {
 padding: 40px 0;
 color: #aaa;
 /* color: #cecece; */
 font-weight: bold;
 font-size: ${vpScale(16, 24, 320, 2500, 'vw-px')};
 }

 @media (max-width: 600px) {
 p {
 text-align: center;
 }
 }
`;

const ArrowWrapper = styled.div`
 display: flex;
 & > div {
 display: flex;
 justify-content: center;
 align-items: center;
 background: #dddddd;
 width: 50px;
 height: 50px;
 border-radius: 50%;
 color: #fff;
 text-align: center;
 line-height: 50px;

 &:nth-of-type(2) {
 margin-left: 50px;
 }
 }
 @media (max-width: 600px) {
 & {
 align-self: center;
 }
 }
`;

const RightArrow = styled.div`
 width: 0;
 height: 0;
 border-top: 10px solid transparent;
 border-bottom: 10px solid transparent;

 border-left: 10px solid white;
`;
const LeftArrow = styled.div`
 width: 0;
 height: 0;
 border-top: 10px solid transparent;
 border-bottom: 10px solid transparent;

 border-right: 10px solid white;
`;

const transX = vpScale(100, 300, 1210, 2500, 'vw-px');
const BodyImgWrapper = styled.div`
 --transX: ${transX};
 flex: 1 1 50%;
 box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
 width: 100%;
 position: relative;
 display: flex;
 justify-content: center;
 align-items: center;
 margin-top: 90px;

 img {
 display: block;
 width: 100%;
 height: 100%;
 object-fit: cover;
 }
 @media (min-width: 1210px) {
 & {
 transform: translateX(var(--transX));
 }
 }
`;

const NumberBox = styled.div`
 position: absolute;
 bottom: 60px;
 left: -40px;
 width: ${vpScale(80, 250, 320, 2500, 'vw-px')};
 height: ${vpScale(80, 250, 320, 2500, 'vw-px')};
 background: #4e7e64;
 box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
 color: #ffffff;
 font-size: ${vpScale(50, 150, 320, 2500, 'vw-px')};
 font-weight: bold;
 display: flex;
 justify-content: center;
 align-items: center;
 @media (max-width: 600px) {
 & {
 top: -25%;
 left: 60%;
 }
 }
`;

const CardFooter = styled.ul`
 list-style: none;
 display: flex;
 margin-left: ${vpScale(0, 200, 320, 2500, 'vw-px')};

 & > * {
 font-weight: bold;
 padding: 20px 20px ${vpScale(20, 60, 320, 2500, 'vw-px')} 20px;
 font-size: ${vpScale(14, 20, 320, 2500, 'vw-px')};
 }

 @media (max-width: 1210px) {
 justify-content: center;
 margin-left: 0;
 }
`;

const CardSide = styled.div`
 padding: 20px;
 text-align: center;
 font-size: ${vpScale(20, 40, 320, 2500, 'vw-px')};
 color: #fff;
 background: #4e7e64;
 height: 100%;

 span {
 padding: 0 30px;
 }
`;

class LifeLanding extends Component {
 render() {
 return (
 <Wrapper>
 <Os>O</Os>
 <CardWrapper>
 <LeftWrap>
 <NavWrapper>
 <NavItemsWrapper>
 <Logo>LIFE</Logo>
 <NavItems>
 <li>Life</li>
 <li>Outdoor</li>
 <li>Prize</li>
 </NavItems>
 </NavItemsWrapper>
 <NavSearch>
 <span>
 Search...<MagGlass>🔍</MagGlass>
 </span>
 </NavSearch>
 </NavWrapper>
 <CardBody>
 <BodyContentWrapper>
 <h2>
 Life<br />
 Is Art.
 </h2>
 <p>Love the life you live. Live the life you love.</p>
 <ArrowWrapper>
 <div>
 <LeftArrow />
 </div>
 <div>
 <RightArrow />
 </div>
 {/* <div>◀</div>
 <div>▶</div> */}
 </ArrowWrapper>
 </BodyContentWrapper>
 <BodyImgWrapper>
 <img
 src="https://images.pexels.com/photos/301614/pexels-photo-301614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
 alt="open water"
 />
 <NumberBox>03</NumberBox>
 </BodyImgWrapper>
 </CardBody>
 <CardFooter>
 <li>Facebook</li>
 <li>Instagram</li>
 <li>Twitter</li>
 </CardFooter>
 </LeftWrap>
 <RightWrap>
 <CardSide>
 Login <span>☰</span>
 </CardSide>
 </RightWrap>
 </CardWrapper>
 <Os>O</Os>
 </Wrapper>
 );
 }
}

export default LifeLanding;
