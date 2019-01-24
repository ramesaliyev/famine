function calculate() {
  viewportWidth = screenWidth / zoomLevel;
  viewportHeight = screenHeight / zoomLevel;

  centerScreenX = screenWidth / 2;
  centerScreenY = screenHeight / 2;

  centerWorldX = getWorldX(centerScreenX);
  centerWorldY = getWorldY(centerScreenY);

  mouseWorldX = getWorldX(mouseScreenX);
  mouseWorldY = getWorldX(mouseScreenX);

  mouseDownOriginWorldX = getWorldX(mouseDownOriginScreenX);
  mouseDownOriginWorldY = getWorldY(mouseDownOriginScreenY);
}