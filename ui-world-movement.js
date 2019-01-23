let UI_WORLD_MOVEMENT_AC = 1;

function uiWorldMovement() {
  if (isMouseOutOfScreen) return;

  const accleration = UI_WORLD_MOVEMENT_AC;
  const scrollTriggerSize = 100;
  const scrollBy = unitPx;// * accleration * Math.min(zoomLevel, 1);
  let inProgress = false;

  if (mouseY < scrollTriggerSize) {
    viewportY += scrollBy;
    inProgress = true;
  }

  if (height - mouseY < scrollTriggerSize) {
    viewportY -= scrollBy;
    inProgress = true;
  }

  if (mouseX < scrollTriggerSize) {
    viewportX += scrollBy;
    inProgress = true;
  }

  if (width - mouseX < scrollTriggerSize) {
    viewportX -= scrollBy;
    inProgress = true;
  }

  calculateViewport();

  UI_WORLD_MOVEMENT_AC = inProgress ? Math.min(UI_WORLD_MOVEMENT_AC + 0.05, 3.5) : 1;
}