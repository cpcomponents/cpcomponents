import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

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
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
  overflow: hidden;
  background: #f6f6f6;
  padding: 30px;
  height: ${vpScale(100, 100, 320, 1300, 'vh-vp')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const slideIn = keyframes`
  0% {
    transform: translate(-100vw, 5vh) scale(1.5);
  }
  100% {
    transform: translate(-50%, -50%)  scale(1);
  }
`;

const slideOut = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(15vw, -40vh)  scale(.2);
    opacity: 0;
  }
`;

const Bottle = styled.img`
  width: ${vpScale(200, 600, 320, 1000, 'vmin-px')};
  height: ${vpScale(200, 600, 320, 1000, 'vmin-px')};
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-100vw, -50%);
  animation: ${props =>
    props.whiskeyAni
      ? `1500ms cubic-bezier(0, 0, 0.37, 0.98) 500ms forwards ${slideIn}`
      : `1500ms cubic-bezier(0, 0, 0.37, 0.98) forwards ${slideOut}`};
`;

const Glass = Bottle.extend`
  width: ${vpScale(150, 500, 320, 1000, 'vmin-px')};
  height: ${vpScale(150, 500, 320, 1000, 'vmin-px')};
`;

const Title = styled.h2`
  position: relative;
  z-index: 1;
  align-self: ${props => props.align};
  font-size: ${vpScale(33, 85, 320, 960, 'vmin-px')};
  color: #2c2828;
  font-family: 'Playfair Display', serif;
`;

class WhiskeyLanding extends Component {
  state = {
    whiskeyAni: false
  };

  whiskeyAni = () => {
    let whiskeyAni = !this.state.whiskeyAni;
    this.setState({
      whiskeyAni
    });
  };

  componentWillMount() {
    this.swapProduct = setInterval(() => {
      let whiskeyAni = !this.state.whiskeyAni;
      this.setState({
        whiskeyAni
      });
    }, 2900);
  }

  componentWillUnmount() {
    clearInterval(this.swapProduct);
  }

  render() {
    return (
      <Wrapper>
        <Title align={'flex-start'}>Whiskey...</Title>
        <Bottle
          whiskeyAni={this.state.whiskeyAni}
          src="https://png.pngtree.com/element_origin_min_pic/16/08/19/1957b6ee8468341.jpg"
          alt="whiskey bottle"
        />
        <Glass
          whiskeyAni={!this.state.whiskeyAni}
          src="https://png.pngtree.com/element_origin_min_pic/17/07/19/ef06fd4633838842b5634cfbde4b43a4.jpg"
          alt="whiskey glass"
        />
        <Title align={'flex-end'}>...for all</Title>
      </Wrapper>
    );
  }
}

export default WhiskeyLanding;
