const body = document.body;

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

context.imageSmoothingQuality = 'high'
context.imageSmoothingEnabled = true;

function onMouseEnter(e) {
  isMouseOutOfScreen = false;
  isPaused = false;

  onMouseMove(e);
  loop();
}

function onMouseLeave(e) {
  isMouseOutOfScreen = true;
}

function onMouseMove(e) {
  mouseScreenX = e.clientX;
  mouseScreenY = e.clientY;
  calculate();
}

function onMouseDown(e) {
  if (!isMouseDown) {
    mouseDownOriginScreenX = mouseScreenX;
    mouseDownOriginScreenY = mouseScreenY;
    calculate();
  }

  isMouseDown = true;
}

function onMouseUp(e) {
  isMouseDown = false;

  if (mouseScreenX === mouseDownOriginScreenX && mouseScreenY === mouseDownOriginScreenY) {
    onMouseClick(e);
  }
}

function onMouseClick(e) {
  console.log('mouseClick');
}

function onResize() {
  screenWidth = body.clientWidth;
  screenHeight = body.clientHeight;

  canvas.width = screenWidth * DEVICE_PIXEL_RATIO;
  canvas.height = screenHeight * DEVICE_PIXEL_RATIO;

  canvas.style.width = screenWidth + 'px';
  canvas.style.height = screenHeight + 'px';

  context.scale(DEVICE_PIXEL_RATIO, DEVICE_PIXEL_RATIO);

  calculate();
}

function onScroll(e) {
  const wheelDelta = e.wheelDelta ? e.wheelDelta / 400 : 0;

  if (!isPaused && wheelDelta) {
    zoom(
      getWorldX(mouseScreenX),
      getWorldY(mouseScreenY),
      zoomLevel + wheelDelta
    );
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