let EDGE_SCROLL_SPEED = 0.5;
let EDGE_SCROLL_ACCELERATION = 0;

const MAX_EDGE_SCROLL_SPEED = 10;
const scrollTriggerSize = 100;

function edgeScroll() {
  if (isMouseOutOfScreen) {
    EDGE_SCROLL_SPEED = 1;
    EDGE_SCROLL_ACCELERATION = 0;
    return;
  };

  EDGE_SCROLL_SPEED = Math.min(EDGE_SCROLL_SPEED + EDGE_SCROLL_ACCELERATION, MAX_EDGE_SCROLL_SPEED);
  EDGE_SCROLL_ACCELERATION += 0.01;

  if (mouseScreenY < scrollTriggerSize) {
    return moveViewport(0, EDGE_SCROLL_SPEED);
  }

  if (screenHeight - mouseScreenY < scrollTriggerSize) {
    return moveViewport(0, -EDGE_SCROLL_SPEED);
  }

  if (mouseScreenX < scrollTriggerSize) {
    return moveViewport(-EDGE_SCROLL_SPEED, 0);
  }

  if (screenWidth - mouseScreenX < scrollTriggerSize) {
    return moveViewport(EDGE_SCROLL_SPEED, 0);
  }

  EDGE_SCROLL_SPEED = 1;
  EDGE_SCROLL_ACCELERATION = 0;
}