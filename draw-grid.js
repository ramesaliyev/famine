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
}