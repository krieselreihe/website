const booleans = [true, false];
const lightColor = { r: 48, g: 8, b: 55 };
const elementCreator = [createRect, createCircle, createPolygon, createLine];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomNumber(min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
}

function toColorString(color) {
  return `rgba(${color.r}, ${color.g}, ${color.b}, 1)`;
}

function createElement(name, children = [], props = {}) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", name);
  for (const prop in props) {
    element.setAttribute(prop, props[prop]);
  }
  children.forEach((child) => element.appendChild(child));
  return element;
}

function createSVG({ children }) {
  const top = getRandomNumber(-50, 200);
  const left = getRandomNumber(-50, 110);
  const animationType = getRandomNumber(1, 3);

  return createElement("svg", [children(lightColor)], {
    width: "110",
    height: "110",
    viewBox: "0 0 110 110",
    class: `deco deco-animation-${animationType}`,
    style: `top:${top}%;left:${left}%;`,
  });
}

function createLine(colorDef) {
  const color = toColorString(colorDef);
  const x1 = getRandomNumber(0, 100);
  const y1 = getRandomNumber(0, 100);
  const x2 = getRandomNumber(0, 100);
  const y2 = getRandomNumber(0, 100);
  const strokeWidth = getRandomNumber(1, 8);

  return createElement("line", [], {
    x1,
    y1,
    x2,
    y2,
    stroke: color,
    "stroke-width": strokeWidth,
    class: "fade-in",
  });
}

function createPolygon(colorDef) {
  const color = toColorString(colorDef);
  const fill = getRandomElement(booleans) ? color : "none";
  const strokeWidth = getRandomNumber(1, 8);

  const x1 = getRandomNumber(strokeWidth, 100);
  const y1 = getRandomNumber(strokeWidth, 100);
  const x2 = getRandomNumber(strokeWidth, 100);
  const y2 = getRandomNumber(strokeWidth, 100);
  const x3 = getRandomNumber(strokeWidth, 100);
  const y3 = getRandomNumber(strokeWidth, 100);

  return createElement("polygon", [], {
    points: `${x1},${y1} ${x2},${y2} ${x3},${y3}`,
    stroke: color,
    "stroke-width": strokeWidth,
    "stroke-linejoin": "miter",
    fill,
    class: "fade-in",
  });
}

function createCircle(colorDef) {
  const color = toColorString(colorDef);
  const fill = getRandomElement(booleans) ? color : "none";
  const r = getRandomNumber(5, 50);
  const cx = getRandomNumber(r + 5, 55);
  const cy = getRandomNumber(r + 5, 55);
  const strokeWidth = getRandomNumber(1, 8);

  return createElement("circle", [], {
    cx,
    cy,
    r,
    stroke: color,
    "stroke-width": strokeWidth,
    "stroke-linejoin": "miter",
    fill,
    class: "fade-in",
  });
}

function createRect(colorDef) {
  const color = toColorString(colorDef);
  const fill = getRandomElement(booleans) ? color : "none";
  const width = getRandomNumber(20, 100);
  const height = getRandomNumber(20, 100);
  const strokeWidth = getRandomNumber(1, 8);

  return createElement("rect", [], {
    y: "5",
    x: "5",
    width,
    height,
    stroke: color,
    "stroke-width": strokeWidth,
    fill,
    class: "fade-in",
  });
}

function main() {
  const animatedElements = Array(80)
    .fill(0)
    .map(() => {
      const children = getRandomElement(elementCreator);
      return createSVG({ children });
    });
  const frag = document.createDocumentFragment();
  animatedElements.forEach((element) => {
    frag.appendChild(element);
  });
  document.querySelector(".background").appendChild(frag);
}

document.addEventListener("DOMContentLoaded", main);
