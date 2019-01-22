let UI_WORLD_MOVEMENT_AC = 1;

function uiWorldMovement() {
  if (!mouseMoved) return;

  const accleration = UI_WORLD_MOVEMENT_AC;
  const scrollTriggerSize = 100;
  let inProgress = false;

  if (mouseY < scrollTriggerSize) {
    viewportY += unitPx * accleration;
    inProgress = true;
  }

  if (height - mouseY < scrollTriggerSize) {
    viewportY -= unitPx * accleration;
    inProgress = true;
  }

  if (mouseX < scrollTriggerSize) {
    viewportX += unitPx * accleration;
    inProgress = true;
  }

  if (width - mouseX < scrollTriggerSize) {
    viewportX -= unitPx * accleration;
    inProgress = true;
  }

  UI_WORLD_MOVEMENT_AC = inProgress ? Math.min(UI_WORLD_MOVEMENT_AC + 0.05, 3.5) : 1;
}