const body = document.body;
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

const BG_COLOR = '#9bca3e';

let originX = 0;
let originY = 0;
let mouseX = 0;
let mouseY = 0;
let isMouseDown = false;

function draw() {
  const width = canvas.width;
  const height = canvas.height;

  context.fillStyle = BG_COLOR;
  context.fillRect(0, 0, width, height);

  drawSelectionArea();

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
  canvas.width = body.clientWidth;
  canvas.height = body.clientHeight;
}

document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseenter', onMouseMove);
document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);
window.addEventListener('resize', onResize);
body.appendChild(canvas);

onResize();
draw();