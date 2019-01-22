function drawGrid() {
  let gridSize = 50;
  let x = viewportX % gridSize;
  let y = viewportY % gridSize;

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