import React, { Component } from 'react';
import styled, { keyframes, css } from 'styled-components';

const Slider = styled.div`
  /* ---- CSS Variables Section ----- */
  --speed: ${props => (props.speed ? props.speed : '500ms')};
  --width: ${props => (props.size ? props.size : '70vw')};
  --height: calc(var(--width) / 2);
  /* -------------------------------- */
  overflow: hidden;
  border: 1px solid black;
  width: var(--width);
  height: var(--height);
  position: relative;
`;

const PrevNextStyles = css`
  font-size: calc(var(--width) / 30);
  position: absolute;
  top: 50%;
  padding: 10px;
  z-index: 999;
  background: black;
  color: white;
  opacity: 0.5;
  transition: opacity var(--speed);

  &:hover {
    opacity: 0.7;
  }
`;

const PrevButton = styled.button`
  ${PrevNextStyles};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  left: 0;

  &::before {
    content: '← ';
  }
`;

const NextButton = styled.button`
  ${PrevNextStyles};
  right: 0;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  &::after {
    content: ' →';
  }
`;

const CenterCircle = styled.div`
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, -50%);
  z-index: 999;
  border-radius: 50%;
  background: ${props => (props.color ? props.color : '#dee1b6')};
  width: calc(var(--width) / 3);
  height: calc(var(--width) / 3);
`;

const Wrap = styled.div`
  overflow: hidden;
  position: absolute;
  top: -60%;
  left: -25%;
  width: calc(var(--width) * 1.5);
  height: calc(var(--width) * 1.5);
  border-radius: 50%;
  transition: transform var(--speed) ease-in-out;

  transform: ${props => (props.rotate ? `rotate(${props.rotate}deg)` : null)};

  display: flex;
  flex-wrap: wrap;
`;

const Box = css`
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: calc(var(--width) / 15);
    padding-top: calc(var(--width) / 2.2);
    font-weight: bold;
    opacity: 0;
    color: white;
  }
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const FadeOut = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const BoxOne = styled.div`
  order: 1;
  ${Box};
  background: ${props => (props.color ? props.color : '#73c8a9')};
  span {
    animation: ${props =>
      props.count === 1
        ? `calc(var(--speed) / 2) calc(var(--speed) / 2) 1 forwards ${FadeIn}`
        : props.noFadeOut
          ? null
          : `calc(var(--speed) / 2) 1 forwards ${FadeOut}`};

    transform: rotate(-45deg);
  }
`;
const BoxTwo = styled.div`
  order: 2;
  ${Box};
  background: ${props => (props.color ? props.color : '#bd5532')};
  span {
    animation: ${props =>
      props.count === 0
        ? `calc(var(--speed) / 2) calc(var(--speed) / 2) 1 forwards ${FadeIn}`
        : props.noFadeOut
          ? null
          : `calc(var(--speed) / 2) 1 forwards ${FadeOut}`};

    transform: rotate(45deg);
  }
`;
const BoxThree = styled.div`
  order: 4;
  ${Box};
  background: ${props => (props.color ? props.color : '#e1b866')};
  span {
    animation: ${props =>
      props.count === 1
        ? `calc(var(--speed) / 2) calc(var(--speed) / 2) 1 forwards ${FadeIn}`
        : props.noFadeOut
          ? null
          : `calc(var(--speed) / 2) 1 forwards ${FadeOut}`};

    transform: rotate(135deg);
  }
`;
const BoxFour = styled.div`
  order: 3;
  ${Box};
  background: ${props => (props.color ? props.color : '#373b44')};
  span {
    animation: ${props =>
      props.count === 0
        ? `calc(var(--speed) / 2) calc(var(--speed) / 2) 1 forwards ${FadeIn}`
        : props.noFadeOut
          ? null
          : `calc(var(--speed) / 2) 1 forwards ${FadeOut}`};

    transform: rotate(-135deg);
  }
`;

class CircleSlider extends Component {
  state = {
    // Does not allow fadeOut animation on mount
    noFadeOut: true,
    // Controls rotation
    rotate: 45,
    // Toggles FadeIn === 1 and FadeOut === 0
    count: 1
  };

  nextRotate = () => {
    const rotate = this.state.rotate - 90;
    this.setState({
      count: this.state.count + 1,
      noFadeOut: false,
      rotate
    });
  };

  prevRotate = () => {
    const rotate = this.state.rotate + 90;
    this.setState({
      count: this.state.count - 1,
      noFadeOut: false,
      rotate
    });
  };

  render() {
    return (
      <Slider size={this.props.size} speed={this.props.speed}>
        <nav>
          <PrevButton type="button" onClick={this.prevRotate} />
          <NextButton type="button" onClick={this.nextRotate} />
        </nav>

        <CenterCircle color={this.props.centerCircleColor} />
        <Wrap rotate={this.state.rotate}>
          <BoxOne
            color={this.props.color1}
            noFadeOut={this.state.noFadeOut}
            count={Math.abs(this.state.count % 2)}
          >
            <span>{this.props.heading1}</span>
          </BoxOne>
          <BoxTwo
            color={this.props.color2}
            noFadeOut={this.state.noFadeOut}
            count={Math.abs(this.state.count % 2)}
          >
            <span>{this.props.heading2}</span>
          </BoxTwo>
          <BoxThree
            color={this.props.color3}
            noFadeOut={this.state.noFadeOut}
            count={Math.abs(this.state.count % 2)}
          >
            <span>{this.props.heading3}</span>
          </BoxThree>
          <BoxFour
            color={this.props.color4}
            noFadeOut={this.state.noFadeOut}
            count={Math.abs(this.state.count % 2)}
          >
            <span>{this.props.heading4}</span>
          </BoxFour>
        </Wrap>
      </Slider>
    );
  }
}

export default CircleSlider;
