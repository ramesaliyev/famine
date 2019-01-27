function getWorldX(screenX, zl = zoomLevel) {
  return (screenX / zl) - viewportOffsetX;
}

function getWorldY(screenY, zl = zoomLevel) {
  return -((screenY / zl) - viewportOffsetY);
}

function getWorldXY(screenX, screenY, zl = zoomLevel) {
  return {
    x: getWorldX(screenX, zl),
    y: getWorldY(screenY, zl)
  };
}

function getScreenX(worldX, zl = zoomLevel) {
  return (worldX + viewportOffsetX) * zl;
}

function getScreenY(worldY, zl = zoomLevel) {
  return (-worldY + viewportOffsetY) * zl;
}

function getScreenXY(worldX, worldY, zl = zoomLevel) {
  return {
    x: getScreenX(worldX, zl),
    y: getScreenY(worldY, zl)
  };
}

function getWorldSize(screenSize) {
  return screenSize * (screenWidth / viewportWidth);
}

function getScreenSize(worldSize) {
  return worldSize * (viewportWidth / screenWidth);
}

function setZoomLevel(zl = zoomLevel) {
  zoomLevel = Math.max(Math.min(ZOOM_MAX, zl), ZOOM_MIN);
  calculate();
}

function setViewportOffset(x, y) {
  viewportOffsetX = x;
  viewportOffsetY = y;
  calculate();
}

function zoom(worldX, worldY, zl) {
  const screenXY = getScreenXY(worldX, worldY);
  setZoomLevel(zl);

  setViewportOffset(
    viewportOffsetX - ((getScreenX(worldX) - screenXY.x) / zoomLevel),
    viewportOffsetY - ((getScreenY(worldY) - screenXY.y) / zoomLevel)
  );
}

function center(worldX, worldY, zl) {
  setZoomLevel(zl);

  setViewportOffset(
    -worldX + (viewportWidth / 2),
    worldY + (viewportHeight / 2)
  );
}

function moveViewport(x = 0, y = 0) {
  setViewportOffset(
    viewportOffsetX - x,
    viewportOffsetY + y
  );
}