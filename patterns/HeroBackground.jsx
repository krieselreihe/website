import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import aleaRNGFactory from "number-generator/lib/aleaRNGFactory";

const seed = Date.now();
const { uFloat32: random } = aleaRNGFactory(seed);

// @info: In case I ever need to calculate the color again:
// const darkColor = { r: 1, g: 0, b: 11 };
//
// function findColorBetween(left, right, percentage) {
//   const newColor = {};
//   const components = ["r", "g", "b"];
//
//   for (let i = 0; i < components.length; i++) {
//     const c = components[i];
//     newColor[c] = Math.round(
//       left[c] + ((right[c] - left[c]) * percentage) / 100
//     );
//   }
//
//   return newColor;
// }
//
// function normalizeToPercent(val, min, max) {
//   return Number((((val - min) / (max - min)) * 100).toFixed(2));
// }

const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  position: fixed;
`;

const Content = styled.div`
  z-index: 2;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  position: fixed;
  overflow: auto;
`;

const Background = styled.div`
  z-index: 1;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  position: fixed;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  background: rgb(48, 8, 55);
  background: linear-gradient(
    135deg,
    rgba(48, 8, 55, 1) 0%,
    rgba(1, 0, 11, 1) 100%
  );
`;

const booleans = [true, false];
const lightColor = { r: 48, g: 8, b: 55 };

function getRandomElement(arr) {
  return arr[Math.floor(random() * arr.length)];
}

function getRandomNumber(min, max) {
  return Math.trunc(random() * (max - min) + min);
}

function toColorString(color) {
  return `rgba(${color.r}, ${color.g}, ${color.b}, 1)`;
}

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const floating1 = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-200px) rotate(180deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
`;

const floating2 = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(100px) rotate(90deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
`;

const floating3 = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-400px) rotate(360deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
`;

const StyledRect = styled.rect`
  animation: ${fadein} 2s;
`;

function Rect({ colorDef }) {
  const color = toColorString(colorDef);
  const fill = getRandomElement(booleans) ? color : "none";
  const width = getRandomNumber(20, 100);
  const height = getRandomNumber(20, 100);
  const strokeWidth = getRandomNumber(1, 8);

  return (
    <StyledRect
      y="5"
      x="5"
      width={width}
      height={height}
      stroke={color}
      strokeWidth={strokeWidth}
      fill={fill}
    />
  );
}

const StyledCircle = styled.circle`
  animation: ${fadein} 2s;
`;

function Circle({ colorDef }) {
  const color = toColorString(colorDef);
  const fill = getRandomElement(booleans) ? color : "none";
  const r = getRandomNumber(5, 50);
  const cx = getRandomNumber(r + 5, 55);
  const cy = getRandomNumber(r + 5, 55);
  const strokeWidth = getRandomNumber(1, 8);

  return (
    <StyledCircle
      cx={cx}
      cy={cy}
      r={r}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="miter"
      fill={fill}
    />
  );
}

const StyledPolygon = styled.polygon`
  animation: ${fadein} 2s;
`;

function Polygon({ colorDef }) {
  const color = toColorString(colorDef);
  const fill = getRandomElement(booleans) ? color : "none";
  const strokeWidth = getRandomNumber(1, 8);

  const x1 = getRandomNumber(strokeWidth, 100);
  const y1 = getRandomNumber(strokeWidth, 100);
  const x2 = getRandomNumber(strokeWidth, 100);
  const y2 = getRandomNumber(strokeWidth, 100);
  const x3 = getRandomNumber(strokeWidth, 100);
  const y3 = getRandomNumber(strokeWidth, 100);

  return (
    <StyledPolygon
      points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="miter"
      fill={fill}
    />
  );
}

const StyledLine = styled.line`
  animation: ${fadein} 2s;
`;

function Line({ colorDef }) {
  const color = toColorString(colorDef);
  const x1 = getRandomNumber(0, 100);
  const y1 = getRandomNumber(0, 100);
  const x2 = getRandomNumber(0, 100);
  const y2 = getRandomNumber(0, 100);
  const strokeWidth = getRandomNumber(1, 8);

  return (
    <StyledLine
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={color}
      strokeWidth={strokeWidth}
    />
  );
}

const StyledSVG = styled.svg.attrs(({ top, left }) => ({
  style: {
    top: `${top}%`,
    left: `${left}%`,
  },
}))`
  transform-origin: center;
  padding: 20px;
  position: absolute;
  pointer-events: none;

  ${({ animation }) => {
    switch (animation) {
      case 3:
        return css`
          animation: ${floating1} 120s linear infinite;
        `;
      case 2:
        return css`
          animation: ${floating2} 120s linear infinite;
        `;
      case 1:
      default:
        return css`
          animation: ${floating3} 120s linear infinite;
        `;
    }
  }}
`;

function SVG({ children }) {
  const top = getRandomNumber(-50, 200);
  const left = getRandomNumber(-50, 110);
  const animation = getRandomNumber(1, 3);

  // @info: In case I ever need to calculate the color again:
  // const color = findColorBetween(
  //   lightColor,
  //   darkColor,
  //   normalizeToPercent((top + left) / 2, -50, 200)
  // );

  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      width="110"
      height="110"
      viewBox="0 0 110 110"
      top={top}
      left={left}
      animation={animation}
    >
      {children(lightColor)}
    </StyledSVG>
  );
}

const elements = [Rect, Circle, Polygon, Line];

export function HeroBackground({ children }) {
  const [renderClientSide, setRenderClientSide] = useState(false);
  useEffect(() => {
    setRenderClientSide(true);
  });

  return (
    <Container>
      <Content>{children}</Content>
      <Background>
        {renderClientSide &&
          Array(80)
            .fill(0)
            .map((_, index) => {
              const Element = getRandomElement(elements);
              return (
                <SVG key={index}>
                  {(colorDef) => <Element colorDef={colorDef} />}
                </SVG>
              );
            })}
      </Background>
    </Container>
  );
}
