function drawGrid() {
  let gridSize = GRID_SIZE * zoomLevel;
  let x = (viewportOffsetX * zoomLevel) % gridSize;
  let y = (viewportOffsetY * zoomLevel) % gridSize;

  while (x < screenWidth) {
    line(x, 0, x, screenHeight, {color: COLOR.gridLine});
    x += gridSize;
  }

  while (y < screenHeight) {
    line(0, y, screenWidth, y, {color: COLOR.gridLine});
    y += gridSize;
  }

  const {x: axisX, y: axisY} = getScreenXY(0, 0);
  line(0, axisY, screenWidth, axisY, {color:COLOR.gridAxisLine, lineWidth:2});
  line(axisX, 0, axisX, screenHeight, {color:COLOR.gridAxisLine, lineWidth:2});

  line(centerScreenX, centerScreenY - 10, centerScreenX, centerScreenY + 10, {color:COLOR.centerCross});
  line(centerScreenX - 10, centerScreenY, centerScreenX + 10, centerScreenY, {color:COLOR.centerCross});
}