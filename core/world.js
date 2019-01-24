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

function changeZoomLevel(zl = zoomLevel) {
  zoomLevel = Math.max(Math.min(ZOOM_MAX, zl), ZOOM_MIN);
  calculate();
}

function zoom(worldX, worldY, zl) {
  const screenXY = getScreenXY(worldX, worldY);
  changeZoomLevel(zl);

  viewportOffsetX -= (getScreenX(worldX) - screenXY.x) / zoomLevel;
  viewportOffsetY -= (getScreenY(worldY) - screenXY.y) / zoomLevel;
}

function center(worldX, worldY, zl) {
  changeZoomLevel(zl);

  viewportOffsetX = -worldX + (viewportWidth / 2);
  viewportOffsetY = worldY + (viewportHeight / 2);

  calculate();
}

function moveViewport(x = 0, y = 0) {
  viewportOffsetX -= x;
  viewportOffsetY += y;
  calculate();
}