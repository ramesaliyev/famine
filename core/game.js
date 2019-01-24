function loop() {
  now = performance.now();
  timePassedSinceLastDraw = now - prevDrawTime;

  context.fillStyle = COLOR.canvasBackground;
  context.fillRect(0, 0, screenWidth, screenHeight);

  edgeScroll();
  drawGrid();

  context.save();
  context.scale(zoomLevel, zoomLevel);
  drawObjects();
  context.restore();

  !isPaused && drawInfo();
  drawSelectionArea();

  prevDrawTime = now;

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
