import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const Slide = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const Hidden = keyframes`
  0%, 100% {
    z-index: 2;
  }
`;

const Wrapper = styled.div`
  /* ---- CSS Variables Section ----- */
  --height: ${props => (props.height ? props.height : '320px')};
  --width: ${props => (props.width ? props.width : '100%')};
  /* -------------------------------- */
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: var(--width);
  height: var(--height);
`;

const Slides = styled.ul`
  position: relative;
  z-index: 4;

  list-style: none;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;

const LargeSlide = styled.li`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: ${props => (props.slide ? '3' : '1')};
  animation: ${props => (props.slide ? `${Slide} 1s 1` : `${Hidden} 1s 1`)};
`;

const Thumbnails = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  line-height: 0;

  /* width of thumbnail img */
  width: 35%;

  li {
    flex: auto;
  }
`;

const ThumbnailImg = styled.img`
  width: 100%;
  /* thumbHeight is the number of slides, used to divide height evenly by overall height */
  height: ${props =>
    props.thumbHeight ? `calc(var(--height) / ${props.thumbHeight})` : null};
  object-fit: cover;
  object-position: top;
`;

class ThumbnailSlider extends Component {
  state = {
    slides: []
  };

  componentDidMount() {
    this.setState({
      slides: this.props.images.map(image => false)
    });
  }

  slideIn = e => {
    const target = Number(e.target.alt);
    this.setState({
      slides: this.state.slides.map((image, i) => (i === target ? true : false))
    });
  };

  render() {
    const { images } = this.props;

    return (
      <Wrapper height={this.props.height} width={this.props.width}>
        <Slides>
          {images &&
            images.map((image, i) => (
              <LargeSlide key={i} slide={this.state.slides[i]}>
                <img src={image} alt={i} />
              </LargeSlide>
            ))}
        </Slides>

        <Thumbnails>
          {images &&
            images.map((image, i) => (
              <li key={i}>
                <ThumbnailImg
                  src={image}
                  alt={i}
                  onClick={this.slideIn}
                  thumbHeight={this.state.slides.length}
                />
              </li>
            ))}
        </Thumbnails>
      </Wrapper>
    );
  }
}

export default ThumbnailSlider;
