function drawGrid() {
  let gridSize = 20 * zoomLevel;
  let x = (viewportX * zoomLevel) % gridSize;
  let y = (viewportY * zoomLevel) % gridSize;

  context.lineWidth = 1;
  context.strokeStyle = '#60992D';

  while (x < width) {
    line(x, 0, x, height);
    x += gridSize;
  }

  while (y < height) {
    line(0, y, width, y);
    y += gridSize;
  }

  context.lineWidth = 2;
  context.strokeStyle = '#333';
  const {x: axisX, y: axisY} = getScreenPosition(0, 0);
  line(0, axisY, width, axisY);
  line(axisX, 0, axisX, height);

  const centerX = width / 2;
  const centerY = height / 2;

  line(centerX, centerY - 10, centerX, centerY + 10, {color: '#f00'});
  line(centerX - 10, centerY, centerX + 10, centerY, {color: '#f00'});
}