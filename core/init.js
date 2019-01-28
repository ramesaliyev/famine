function setInitials() {
  if (gameLoopInProgress === null) {
    gameLoopInProgress = false;
  }

  if (buffering === null) {
    buffering = false;
  }

  if (firstDrawCompleted === null) {
    firstDrawCompleted = false;
  }

  if (prevZoomLevel === null) {
    prevZoomLevel = zoomLevel;
  }

  if (isPaused === null) {
    isPaused = true;
  }

  if (prevViewportOffsetX === null) {
    prevViewportOffsetX = viewportOffsetX;
  }

  if (prevViewportOffsetY === null) {
    prevViewportOffsetY = viewportOffsetY;
  }

  if (viewportIsMoving === null) {
    viewportIsMoving = false;
  }

  if (now === null) {
    now = performance.now();
  }

  if (prevDrawTime === null) {
    prevDrawTime = now;
  }

  if (isMouseDown === null) {
    isMouseDown = false;
  }

  if (isMouseOutOfScreen === null) {
    isMouseOutOfScreen = true;
  }

  initialized = true;
}