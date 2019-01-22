const pixelRatio = window.devicePixelRatio;
const body = document.body;
const canvas = document.createElement('canvas');

const context = canvas.getContext('2d');
context.imageSmoothingQuality = 'high'
context.imageSmoothingEnabled = true;

const BG_COLOR = '#9bca3e';

let gameLoopInProgress = false;
let isPaused = true;
let unitPx = pixelRatio;
let viewportX = 0;
let viewportY = 0;
let zoomLevel = 1;
let width = 0;
let height = 0;
let originX = 0;
let originY = 0;
let mouseX = 0;
let mouseY = 0;
let isMouseDown = false;
let isMouseOutOfScreen = true;

let now = performance.now();
let prevDrawTime = now;

function draw() {
  gameLoopInProgress = false;
  now = performance.now();
  context.fillStyle = BG_COLOR;
  context.fillRect(0, 0, width, height);

  uiWorldMovement();
  drawGrid();

  context.save();
  context.scale(zoomLevel, zoomLevel);
  drawUnits();
  context.restore();

  !isPaused && drawFPS();
  drawSelectionArea();

  prevDrawTime = now;

  if (!isPaused && !gameLoopInProgress) {
    gameLoopInProgress = true;
    window.requestAnimationFrame(draw);
  }
}

function zoom(newZoomLevel) {
  zoomLevel = Math.max(Math.min(20, newZoomLevel), 0.2);
}

function onMouseEnter(e) {
  isMouseOutOfScreen = false;
  isPaused = false;
  onMouseMove(e);
  draw();
}

function onMouseLeave(e) {
  isMouseOutOfScreen = true;
  // isPaused = true;
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

  canvas.width = width * pixelRatio;
  canvas.height = height * pixelRatio;

  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';

  context.scale(pixelRatio, pixelRatio);
}

function onScroll(e) {
  const wheelDelta = e.wheelDelta ? e.wheelDelta / 400 : 0;

  if (!isPaused && wheelDelta) {
    zoom(zoomLevel + wheelDelta);
  }
}

document.addEventListener('mousewheel', onScroll);
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseenter', onMouseEnter);
document.addEventListener('mouseleave', onMouseLeave);
document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);
window.addEventListener('resize', onResize);
body.appendChild(canvas);

onResize();
draw();