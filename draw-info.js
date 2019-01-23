let FPS = 0;
let lastFPSUpdateTime = performance.now();

function drawInfo() {
  if (now - lastFPSUpdateTime >= 100) {
    lastFPSUpdateTime = now;
    FPS = (1000 / (now - prevDrawTime)).toFixed(0);
  }

  const options = {align: 'right', color: COLORS.white};
  const right = width - 20;
  const mouseR = getWorldPosition(mouseX, mouseY);

  rect(width - 230, 0, 230, 175, {fill: true, color: '#60992D'});

  text(right, 25, `FPS:${FPS}`, options);
  text(right, 50, `center x:${parseInt(centerX, 10)} y:${parseInt(centerY, 10)}`, options);
  text(right, 75, `mouse x:${parseInt(mouseX, 10)} y:${parseInt(mouseY, 10)}`, options);
  text(right, 100, `mouseR x:${parseInt(mouseR.x, 10)} y:${parseInt(mouseR.y, 10)}`, options);
  text(right, 125, `viewport x:${parseInt(viewportX, 10)} y:${parseInt(viewportY, 10)}`, options);
  text(right, 150, `viewport width:${parseInt(viewportWidth, 10)} height:${parseInt(viewportHeight, 10)}`, options);
}