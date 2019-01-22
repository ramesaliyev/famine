let FPS = 0;
let lastFPSUpdateTime = performance.now();

function drawFPS() {
  if (now - lastFPSUpdateTime >= 100) {
    lastFPSUpdateTime = now;
    FPS = (1000 / (now - prevDrawTime)).toFixed(0);
  }

  text(width - 35, 25, `FPS:${FPS}`)
}