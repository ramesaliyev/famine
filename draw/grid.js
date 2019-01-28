function drawGrid() {
  let gridSize = TILE_SIZE * zoomLevel;
  let x = (viewportOffsetX * zoomLevel) % gridSize;
  let y = (viewportOffsetY * zoomLevel) % gridSize;

  const globalAlphaBackup = context.globalAlpha;

  context.lineWidth = 1;
  context.strokeStyle = COLOR.gridLine;
  context.globalAlpha = 0.2

  context.beginPath();

  while (x < screenWidth) {
    context.moveTo(x, 0);
    context.lineTo(x, screenHeight);
    x += gridSize;
  }

  while (y < screenHeight) {
    context.moveTo(0, y);
    context.lineTo(screenWidth, y);
    y += gridSize;
  }

  context.stroke();
  context.globalAlpha = globalAlphaBackup;

  const {x: axisX, y: axisY} = getScreenXY(0, 0);
  line(0, axisY, screenWidth, axisY, {color:COLOR.gridAxisLine, lineWidth:2});
  line(axisX, 0, axisX, screenHeight, {color:COLOR.gridAxisLine, lineWidth:2});

  line(centerScreenX, centerScreenY - 10, centerScreenX, centerScreenY + 10, {color:COLOR.centerCross});
  line(centerScreenX - 10, centerScreenY, centerScreenX + 10, centerScreenY, {color:COLOR.centerCross});
}