const pixelRatio = window.devicePixelRatio;
const body = document.body;
const canvas = document.createElement('canvas');

const context = canvas.getContext('2d');
context.imageSmoothingQuality = 'high'
context.imageSmoothingEnabled = true;

const BG_COLOR = '#9bca3e';

let unitPx = pixelRatio;
let viewportX = 0;
let viewportY = 0;
let zoomLevel = 0;
let width = 0;
let height = 0;
let originX = 0;
let originY = 0;
let mouseX = 0;
let mouseY = 0;
let mouseMoved = false;
let isMouseDown = false;

let now = performance.now();
let prevDrawTime = now;

function draw() {
  now = performance.now();

  context.fillStyle = BG_COLOR;
  context.fillRect(0, 0, width, height);

  uiWorldMovement();
  drawGrid();
  drawFPS();
  drawSelectionArea();

  prevDrawTime = now;
  window.requestAnimationFrame(draw);
}

function onMouseMove(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
  mouseMoved = true;
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

  canvas.width = width * pixelRatio;
  canvas.height = height * pixelRatio;

  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';

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