let FPS = 0;
let lastFPSUpdateTime = performance.now();

function drawInfo() {
  if (now - lastFPSUpdateTime >= 100) {
    lastFPSUpdateTime = now;
    FPS = (1000 / (now - prevDrawTime)).toFixed(0);
  }

  const options = {align: 'right', color: COLOR.infoTextColor};
  const right = screenWidth - 20;

  rect(screenWidth - 230, 0, 230, 175, {fill: true, color: COLOR.infoBoxColor});

  text(right, 25, `FPS:${FPS}`, options);
}