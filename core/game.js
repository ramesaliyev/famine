function loop() {
  now = performance.now();
  timePassedSinceLastDrawMS = now - prevDrawTime;
  timePassedSinceLastDrawSec = timePassedSinceLastDrawMS / 1000;

  context.fillStyle = COLOR.canvasBackground;
  context.fillRect(0, 0, screenWidth, screenHeight);

  if (!isPaused) {
    edgeScroll();
  }

  drawGrid();

  context.save();
  context.scale(zoomLevel, zoomLevel);
  drawObjects();
  context.restore();

  if (!isPaused) {
    drawInfo();
    drawSelectionArea();
  }

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
