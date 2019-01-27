function loop() {
  if (!initialized) {
    setInitials();
  }

  now = performance.now();
  drawTimeDelta = (now - prevDrawTime) / 1000;

  context.fillStyle = COLOR.canvasBackground;
  context.fillRect(0, 0, screenWidth, screenHeight);

  if (!isPaused) {
    edgeScroll();
  }

  viewportIsMoving = (prevViewportOffsetX !== viewportOffsetX || prevViewportOffsetY !== viewportOffsetY);

  context.save();
  context.scale(zoomLevel, zoomLevel);
  drawMap();
  context.restore();

  drawGrid();

  if (!isPaused) {
    drawInfo();
    drawSelectionArea();
  }

  prevDrawTime = now;
  prevViewportOffsetX = viewportOffsetX;
  prevViewportOffsetY = viewportOffsetY;

  if (!isPaused && !gameLoopInProgress) {
    gameLoopInProgress = true;
    window.requestAnimationFrame(() => {
      gameLoopInProgress = false;
      loop();
    });
  }
}

onResize();
center(0, 0);
loop();
