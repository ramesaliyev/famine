const dashLen = 10;
const sepLen = 7;

let SELECTION_AREA_ANIMATION_SHIFT = 0;

function drawSelectionArea() {
  if (!isMouseDown) {
    return;
  };

  SELECTION_AREA_ANIMATION_SHIFT += 0.6;
  context.lineWidth = 2;

  const shift = SELECTION_AREA_ANIMATION_SHIFT;

  const hFrom = min(originX, mouseX);
  const hTo = max(originX, mouseX);
  const vFrom = min(originY, mouseY);
  const vTo = max(originY, mouseY);

	hLine(hFrom, hTo, originY, shift);
  hLine(hFrom, hTo, mouseY, shift+10);
  vLine(vFrom, vTo, originX, shift);
  vLine(vFrom, vTo, mouseX, shift+10);
}

function hLine(startX, endX, y, shift) {
  let crsr = startX - (shift % (sepLen + dashLen));

  while (crsr < endX) {
    const start = min(endX, max(startX, crsr));
    const end = min(endX, max(startX, crsr + dashLen));
    line(start, y, end, y);
    crsr += dashLen;
    crsr += sepLen;
  }
}

function vLine(startY, endY, x, shift) {
  let crsr = startY - (shift % (sepLen + dashLen));

  while (crsr < endY) {
    const start = min(endY, max(startY, crsr));
    const end = min(endY, max(startY, crsr + dashLen));
    line(x, start, x, end);
    crsr += dashLen;
    crsr += sepLen;
  }
}