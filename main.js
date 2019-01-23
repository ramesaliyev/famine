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

let zoomLevel = 1;
let width = 0;
let height = 0;
let viewportX = 0;
let viewportY = 0;
let centerX = 0;
let centerY = 0;
let viewportWidth = 0;
let viewportHeight = 0;

let originX = 0;
let originY = 0;
let mouseX = 0;
let mouseY = 0;
let isMouseDown = false;
let isMouseOutOfScreen = true;

let now = performance.now();
let prevDrawTime = now;

function draw() {
  now = performance.now();
  context.fillStyle = BG_COLOR;
  context.fillRect(0, 0, width, height);

  uiWorldMovement();
  drawGrid();

  context.save();
  context.scale(zoomLevel, zoomLevel);
  drawUnits();
  context.restore();

  !isPaused && drawInfo();
  drawSelectionArea();

  prevDrawTime = now;

  if (!isPaused && !gameLoopInProgress) {
    gameLoopInProgress = true;
    window.requestAnimationFrame(() => {
      gameLoopInProgress = false;
      draw();
    });
  }
}

function calculateViewport() {
  viewportWidth = width / zoomLevel;
  viewportHeight = height / zoomLevel;
  centerX = -(viewportX - (viewportWidth / 2));
  centerY = (viewportY - (viewportHeight / 2));
}

function getWorldPosition(x, y) {
  return {
    x: (x / zoomLevel) - viewportX,
    y: -((y / zoomLevel) - viewportY)
  }
}

function getScreenPosition(x, y, ignoreZoomLevel = false) {
  const theZoomLevel = ignoreZoomLevel ? 1 : zoomLevel;
  return {
    x: (x + viewportX) * theZoomLevel,
    y: (-y + viewportY) * theZoomLevel
  }
}

function go(x, y, zoomIn, screenPosition = false) {
  if (screenPosition) {
    ({x, y} = getWorldPosition(x, y));
  }

  if (zoomIn) {
    zoom(zoomIn);
  }

  viewportX = -x + (viewportWidth / 2);
  viewportY = (y + (viewportHeight / 2));
  calculateViewport();
}

function goByScreenCoordinate(_x, _y) {
  const {x, y} = getWorldPosition(_x, _y);
  go(x,y);
}

function zoom(newZoomLevel) {
  const MAX_ZOOM = 20;
  const MIN_ZOOM = 0.2;

  zoomLevel = Math.max(Math.min(MAX_ZOOM, newZoomLevel), MIN_ZOOM);
  calculateViewport();
}

function zoomIn(x, y, newZoomLevel, screenPosition) {
  const screenX = screenPosition ? x : getScreenPosition(x, y).x;
  const screenY = screenPosition ? y : getScreenPosition(x, y).y;

  const worldX = screenPosition ? getWorldPosition(x, y).x : x;
  const worldY = screenPosition ? getWorldPosition(x, y).y : y;

  zoom(newZoomLevel);

  const {x: newScreenX, y:newScreenY} = getScreenPosition(worldX, worldY);
  const screenXDiff = newScreenX - screenX;
  const screenYDiff = newScreenY - screenY;

  viewportX -= screenXDiff/zoomLevel;
  viewportY -= screenYDiff/zoomLevel;
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

  calculateViewport();
}

function onScroll(e) {
  const wheelDelta = e.wheelDelta ? e.wheelDelta / 400 : 0;

  if (!isPaused && wheelDelta) {
    zoomIn(mouseX, mouseY, zoomLevel + wheelDelta, true);
  }
}

function onClick(e) {
  // zoomIn(mouseX, mouseY, zoomLevel + 0.1, true);
}

document.addEventListener('click', onClick);
document.addEventListener('mousewheel', onScroll);
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseenter', onMouseEnter);
document.addEventListener('mouseleave', onMouseLeave);
document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);
window.addEventListener('resize', onResize);
body.appendChild(canvas);

onResize();
go(0, 0);
draw();