let FPS = 0;
let lastFPSUpdateTime = performance.now();

function drawInfo() {
  if (now - lastFPSUpdateTime >= 200) {
    lastFPSUpdateTime = now;
    FPS = (1000 / (now - prevDrawTime)).toFixed(0);
  }

  const table = [
    ['FPS', FPS],
    ['zoomLevel', zoomLevel],
    ['screenWidth', screenWidth],
    ['screenHeight', screenHeight],
    ['viewportWidth', viewportWidth],
    ['viewportHeight', viewportHeight],
    ['viewportOffsetX', viewportOffsetX],
    ['viewportOffsetY', viewportOffsetY],
    ['prevViewportOffsetX', prevViewportOffsetX],
    ['prevViewportOffsetY', prevViewportOffsetY],
    ['centerWorldX', centerWorldX],
    ['centerWorldY', centerWorldY],
    ['centerScreenX', centerScreenX],
    ['centerScreenY', centerScreenY],
    ['leftEdgeWorldX', leftEdgeWorldX],
    ['rightEdgeWorldX', rightEdgeWorldX],
    ['topEdgeWorldY', topEdgeWorldY],
    ['bottomEdgeWorldY', bottomEdgeWorldY],
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
    ['viewportIsMoving', viewportIsMoving],
    ['isPaused', isPaused],
    ['globalAlpha', context.globalAlpha],
    ['buffering', buffering],
  ];

  const right = screenWidth - 75;
  const boxWidth = 270;
  rect(screenWidth - boxWidth, 0, boxWidth, (table.length + 1) * 25, {fill: true, color: COLOR.infoBoxColor});
  rect(screenWidth - boxWidth, 0, boxWidth, (table.length + 1) * 25, {fill: false, color: COLOR.infoTextColor});

  table.forEach((row, index) => {
    let [name, val] = row;

    if (typeof val === 'number') {
      val = val.toFixed(2);
    }

    text(right, (index+1) * 25, `${name}`, {align:'right', color: COLOR.infoTextColor});
    text(right + 10, (index+1) * 25, `${val}`, {align:'left', color: COLOR.infoTextColor});
  })

}