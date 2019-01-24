let SELECTION_AREA_ANIMATION_SHIFT = 0;

function drawSelectionArea() {
  if (!isMouseDown) {
    return;
  };

  const dashLen = 10;
  const sepLen = 7;
  const shift = (SELECTION_AREA_ANIMATION_SHIFT % (sepLen + dashLen));

  const hFrom = min(mouseDownOriginScreenX, mouseScreenX);
  const hTo = max(mouseDownOriginScreenX, mouseScreenX);
  const vFrom = min(mouseDownOriginScreenY, mouseScreenY);
  const vTo = max(mouseDownOriginScreenY, mouseScreenY);

  const options = {shift, dashLen, sepLen, lineWidth: 2, color: COLOR.selectionAreaBorder};

  dashedLine(hFrom, hTo, mouseDownOriginScreenY, options);
  dashedLine(hFrom, hTo, mouseScreenY, options);
  dashedLine(vFrom, vTo, mouseDownOriginScreenX, {...options, vertical: true});
  dashedLine(vFrom, vTo, mouseScreenX, {...options, vertical: true});

  SELECTION_AREA_ANIMATION_SHIFT += 0.6;
}