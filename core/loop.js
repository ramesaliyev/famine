function loop() {
  if (!initialized) {
    setInitials();
  }

  now = performance.now();
  drawTimeDelta = (now - prevDrawTime) / 1000;

  if (!isPaused) {
    edgeScroll();
  }

  viewportIsMoving = (prevViewportOffsetX !== viewportOffsetX || prevViewportOffsetY !== viewportOffsetY);
  viewportIsZooming = prevZoomLevel !== zoomLevel;

  if (
    firstDrawCompleted &&
    !viewportIsMoving &&
    context.globalAlpha === 1
  ) {
    if (!buffering) {
      buffering = true;
      bufferCanvas.context.drawImage(
        canvas,
        0, 0, canvas.width, canvas.height,
        0, 0, canvas.width, canvas.height
      );
    } else {
      context.drawImage(
        bufferCanvas,
        0, 0, canvas.width, canvas.height,
        0, 0, screenWidth, screenHeight
      );
    }
  } else {
    buffering = false;

    context.globalAlpha = globalAlpha;
    context.fillStyle = COLOR.canvasBackground;
    context.fillRect(0, 0, screenWidth, screenHeight);

    motionBlur();

    context.save();
    context.scale(zoomLevel, zoomLevel);
    drawMap();
    context.restore();

    drawGrid();
  }

  if (!isPaused) {
    drawInfo();
    drawSelectionArea();
  }

  prevDrawTime = now;
  prevViewportOffsetX = viewportOffsetX;
  prevViewportOffsetY = viewportOffsetY;
  prevZoomLevel = zoomLevel;

  firstDrawCompleted = true;

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
