let FPS = 0;
let lastFPSUpdateTime = performance.now();

function drawInfo() {
  if (now - lastFPSUpdateTime >= 100) {
    lastFPSUpdateTime = now;
    FPS = (1000 / (now - prevDrawTime)).toFixed(0);
  }

  const table = [
    ['FPS', FPS],
    ['screenWidth', screenWidth],
    ['screenHeight', screenHeight],
    ['viewportWidth', viewportWidth],
    ['viewportHeight', viewportHeight],
    ['viewportOffsetX', viewportOffsetX],
    ['viewportOffsetY', viewportOffsetY],
    ['centerWorldX', centerWorldX],
    ['centerWorldY', centerWorldY],
    ['centerScreenX', centerScreenX],
    ['centerScreenY', centerScreenY],
    ['mouseWorldX', mouseWorldX],
    ['mouseWorldY', mouseWorldY],
    ['mouseScreenX', mouseScreenX],
    ['mouseScreenY', mouseScreenY],
    ['mouseDownOriginScreenX', mouseDownOriginScreenX],
    ['mouseDownOriginScreenY', mouseDownOriginScreenY],
    ['mouseDownOriginWorldX', mouseDownOriginWorldX],
    ['mouseDownOriginWorldY', mouseDownOriginWorldY],
    ['isMouseDown', isMouseDown],
    ['isMouseOutOfScreen', isMouseOutOfScreen],
  ];

  const right = screenWidth - 55;
  rect(screenWidth - 235, 0, 235, (table.length + 1) * 25, {fill: true, color: COLOR.infoBoxColor});
  rect(screenWidth - 235, 0, 235, (table.length + 1) * 25, {fill: false, color: COLOR.infoTextColor});

  table.forEach((row, index) => {
    let [name, val] = row;

    if (typeof val === 'number') {
      val = Math.floor(val);
    }

    text(right, (index+1) * 25, `${name}`, {align:'right', color: COLOR.infoTextColor});
    text(right + 10, (index+1) * 25, `${val}`, {align:'left', color: COLOR.infoTextColor});
  })

}