const EDGE_SCROLL_TRIGGER_SIZE = 100;
const EDGE_SCROLL_WORLD_SIZE_PER_SECOND = 250;

function edgeScroll() {
  if (isMouseOutOfScreen) {
    return;
  };

  const speed = timePassedSinceLastDrawSec * getScreenSize(EDGE_SCROLL_WORLD_SIZE_PER_SECOND);

  if (mouseScreenY < EDGE_SCROLL_TRIGGER_SIZE) {
    moveViewport(0, speed);
  }

  if (screenHeight - mouseScreenY < EDGE_SCROLL_TRIGGER_SIZE) {
    moveViewport(0, -speed);
  }

  if (mouseScreenX < EDGE_SCROLL_TRIGGER_SIZE) {
    moveViewport(-speed, 0);
  }

  if (screenWidth - mouseScreenX < EDGE_SCROLL_TRIGGER_SIZE) {
    moveViewport(speed, 0);
  }
}