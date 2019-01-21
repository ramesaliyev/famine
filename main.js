const pixelRatio = window.devicePixelRatio;
const body = document.body;
const canvas = document.createElement('canvas');

const context = canvas.getContext('2d');
context.imageSmoothingQuality = 'high'
context.imageSmoothingEnabled = true;

const BG_COLOR = '#9bca3e';

let width = 0;
let height = 0;
let originX = 0;
let originY = 0;
let mouseX = 0;
let mouseY = 0;
let isMouseDown = false;

let now = performance.now();
let prevDrawTime = now;

function draw() {
  now = performance.now();

  context.fillStyle = BG_COLOR;
  context.fillRect(0, 0, width, height);

  drawFPS();
  drawSelectionArea();

  prevDrawTime = now;
  window.requestAnimationFrame(draw);
}

function onMouseMove(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
}

function onMouseDown(e) {
  if (!isMouseDown) {
    originX = mouseX;
    originY = mouseY;
  }

  isMouseDown = true;
}

function onMouseUp(e) {
  isMouseDown = false;
}

function onResize() {
  width = body.clientWidth;
  height = body.clientHeight;

  // set the 'real' canvas size to the higher width/height
  canvas.width = width * pixelRatio;
  canvas.height = height * pixelRatio;

  // ...then scale it back down with CSS
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';

  // scale the drawing context so everything will work at the higher ratio
  context.scale(pixelRatio, pixelRatio);
}

document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseenter', onMouseMove);
document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);
window.addEventListener('resize', onResize);
body.appendChild(canvas);

onResize();
draw();