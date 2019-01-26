function calculate() {
  viewportWidth = screenWidth / zoomLevel;
  viewportHeight = screenHeight / zoomLevel;

  centerScreenX = screenWidth / 2;
  centerScreenY = screenHeight / 2;

  centerWorldX = getWorldX(centerScreenX);
  centerWorldY = getWorldY(centerScreenY);

  mouseWorldX = getWorldX(mouseScreenX);
  mouseWorldY = getWorldX(mouseScreenY);

  mouseDownOriginWorldX = mouseDownOriginScreenX === null ? null : getWorldX(mouseDownOriginScreenX);
  mouseDownOriginWorldY = mouseDownOriginScreenY === null ? null : getWorldY(mouseDownOriginScreenY);
}