const EDGE_SCROLL_TRIGGER_SIZE = 100;
const EDGE_SCROLL_WORLD_SIZE_PER_SECOND = 350;

function edgeScroll() {
  if (isMouseOutOfScreen) {
    return;
  };

  const speed = drawTimeDelta * getScreenSize(EDGE_SCROLL_WORLD_SIZE_PER_SECOND);

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

const MOTION_BLUR_ORIGINAL_ALPHA = 1;
const MOTION_BLUR_ALPHA_TARGET = 0.6;
const MOTION_BLUR_REDUCE_ALPHA_PER_SECOND = 0.6;
const MOTION_BLUR_INCREASE_ALPHA_PER_SECOND = 1;
const MOTION_BLUR_ZOOM_ALPHA_TARGET = 0.2;
const MOTION_BLUR_ZOOM_REDUCE_ALPHA_PER_SECOND = 2;

function motionBlur() {
  const reduceAlphaPerSecond = viewportIsZooming ? MOTION_BLUR_ZOOM_REDUCE_ALPHA_PER_SECOND : MOTION_BLUR_REDUCE_ALPHA_PER_SECOND;

  if (isPaused || viewportIsZooming || viewportIsMoving) {
    globalAlpha -= drawTimeDelta * reduceAlphaPerSecond;
  } else if (globalAlpha !== 1) {
    globalAlpha += drawTimeDelta * MOTION_BLUR_INCREASE_ALPHA_PER_SECOND;
  } else {
    return
  }

  const targetAlpha = viewportIsZooming ? MOTION_BLUR_ZOOM_ALPHA_TARGET : MOTION_BLUR_ALPHA_TARGET;

  globalAlpha = Math.max(Math.min(MOTION_BLUR_ORIGINAL_ALPHA, globalAlpha), targetAlpha)
}