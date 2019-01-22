let SELECTION_AREA_ANIMATION_SHIFT = 0;

function drawSelectionArea() {
  if (!isMouseDown) {
    return;
  };

  const dashLen = 10;
  const sepLen = 7;
  const shift = (SELECTION_AREA_ANIMATION_SHIFT % (sepLen + dashLen));

  context.lineWidth = 2;
  context.strokeStyle = COLORS.black;

  const hFrom = min(originX, mouseX);
  const hTo = max(originX, mouseX);
  const vFrom = min(originY, mouseY);
  const vTo = max(originY, mouseY);

  dashedLine(hFrom, hTo, originY, {shift, dashLen, sepLen});
  dashedLine(hFrom, hTo, mouseY, {shift, dashLen, sepLen});
  dashedLine(vFrom, vTo, originX, {shift, dashLen, sepLen, vertical:true});
  dashedLine(vFrom, vTo, mouseX, {shift, dashLen, sepLen, vertical:true});

  SELECTION_AREA_ANIMATION_SHIFT += 0.6;
}