import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* ---- CSS Variables Section ----- */
  --brdr-color: #c8c8c8;
  --brdr-width: 1px;
  --brdr-radius: 5px;
  --shadow-opacity: 0.15;
  --trans-speed: 500ms;
  --cubic-curve: cubic-bezier(0.27, 0.9, 0.52, 0.99);
  --pop-distance: 12px;
  /* -------------------------------- */
  overflow: hidden;
  width: calc(225px + (312 - 225) * (100vw - 320px) / (750 - 320));
  height: 370px;
  border: var(--brdr-width) solid var(--brdr-color);
  border-radius: var(--brdr-radius);
  transition: all var(--trans-speed);
  transition: all var(--trans-speed) var(--cubic-curve);

  &:hover {
    transform: translateY(calc(var(--pop-distance) * -1));
    box-shadow: 0 var(--pop-distance) 28px rgba(0, 0, 0, var(--shadow-opacity));
  }
`;

const ImageHalf = styled.div`
  border-bottom: var(--brdr-width) solid var(--brdr-color);
  width: 100%;
  height: 50%;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
`;

const TextHalf = styled.div`
  width: 100%;
  height: 50%;

  & > * {
    margin: 15px;
  }
`;

const Heading = styled.h2`
  font-size: calc(28px + (30 - 28) * (100vw - 320px) / (750 - 320));
`;

const Paragraph = styled.p`
  font-size: calc(13px + (13 - 13) * (100vw - 320px) / (750 - 320));
`;

const PopUpCard = props => {
  return (
    <Wrapper>
      <ImageHalf>
        <img src={props.src} alt={props.alt} />
      </ImageHalf>
      <TextHalf>
        <Heading>{props.heading}</Heading>
        <Paragraph>{props.paragraph}</Paragraph>
      </TextHalf>
    </Wrapper>
  );
};

export default PopUpCard;
