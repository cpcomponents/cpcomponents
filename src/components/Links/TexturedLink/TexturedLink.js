import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: calc(10px + (60 - 10) * (100vmin - 320px) / (1500 - 320));
`;

const A = styled.a`
  text-decoration: none;

  padding: 1em;
  text-align: center;
  font-family: Futura, 'Trebuchet MS', Calibri, 'Helvetica Neue', Arial,
    sans-serif;
  font-size: 1em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-shadow: -0.05em 0.05em rgba(0, 0, 0, 0.2);
  color: white;
  background-color: #222;
  background-image: repeating-linear-gradient(
      45deg,
      transparent 0.15em,
      hsla(197, 62%, 11%, 0.5) 0.15em,
      hsla(197, 62%, 11%, 0.5) 0.2em,
      hsla(5, 53%, 63%, 0) 0.2em,
      hsla(5, 53%, 63%, 0) 0.35em,
      hsla(5, 53%, 63%, 0.5) 0.35em,
      hsla(5, 53%, 63%, 0.5) 0.4em,
      hsla(197, 62%, 11%, 0.5) 0.4em,
      hsla(197, 62%, 11%, 0.5) 0.5em,
      hsla(197, 62%, 11%, 0) 0.5em,
      hsla(197, 62%, 11%, 0) 0.6em,
      hsla(5, 53%, 63%, 0.5) 0.6em,
      hsla(5, 53%, 63%, 0.5) 0.7em,
      hsla(35, 91%, 65%, 0.5) 0.7em,
      hsla(35, 91%, 65%, 0.5) 0.8em,
      hsla(35, 91%, 65%, 0) 0.8em,
      hsla(35, 91%, 65%, 0) 0.85em,
      hsla(5, 53%, 63%, 0.5) 0.85em,
      hsla(5, 53%, 63%, 0.5) 0.9em,
      hsla(5, 53%, 63%, 0) 0.9em,
      hsla(5, 53%, 63%, 0) 0.95em,
      hsla(197, 62%, 11%, 0.5) 0.95em,
      hsla(197, 62%, 11%, 0.5) 1em
    ),
    repeating-linear-gradient(
      135deg,
      transparent 0.15em,
      hsla(197, 62%, 11%, 0.5) 0.15em,
      hsla(197, 62%, 11%, 0.5) 0.2em,
      hsla(5, 53%, 63%, 0) 0.2em,
      hsla(5, 53%, 63%, 0) 0.35em,
      hsla(5, 53%, 63%, 0.5) 0.35em,
      hsla(5, 53%, 63%, 0.5) 0.4em,
      hsla(197, 62%, 11%, 0.5) 0.4em,
      hsla(197, 62%, 11%, 0.5) 0.5em,
      hsla(197, 62%, 11%, 0) 0.5em,
      hsla(197, 62%, 11%, 0) 0.6em,
      hsla(5, 53%, 63%, 0.5) 0.6em,
      hsla(5, 53%, 63%, 0.5) 0.7em,
      hsla(35, 91%, 65%, 0.5) 0.7em,
      hsla(35, 91%, 65%, 0.5) 0.8em,
      hsla(35, 91%, 65%, 0) 0.8em,
      hsla(35, 91%, 65%, 0) 0.85em,
      hsla(5, 53%, 63%, 0.5) 0.85em,
      hsla(5, 53%, 63%, 0.5) 0.9em,
      hsla(5, 53%, 63%, 0) 0.9em,
      hsla(5, 53%, 63%, 0) 1em,
      hsla(197, 62%, 11%, 0.5) 1em,
      hsla(197, 62%, 11%, 0.5) 1.1em
    );
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0.15);
`;

const TexturedLink = props => {
  return (
    <div>
      <Wrapper>
        <A href={props.href} target="_blank">
          {props.children}
        </A>
      </Wrapper>
    </div>
  );
};

export default TexturedLink;
