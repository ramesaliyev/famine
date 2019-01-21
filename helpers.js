function line(fromX, fromY, toX, toY, {color, lineWidth} = {}) {
  if (lineWidth) context.lineWidth = lineWidth;
  if (color) context.strokeStyle = color;
  context.beginPath();
  context.moveTo(fromX, fromY);
  context.lineTo(toX, toY);
  context.stroke();
}

function dashedLine(
  startPos,
  endPos,
  fixedPos,
  {
    dashLen = 10,
    sepLen = 7,
    vertical = false,
    color,
    lineWidth,
    shift
  } = {}
) {
  let pos = shift ? startPos - (shift % (sepLen + dashLen)) : startPos;

  while (pos < endPos) {
    const from = min(endPos, max(startPos, pos));
    const to = min(endPos, max(startPos, pos + dashLen));

    vertical ? line(fixedPos, from, fixedPos, to, {color, lineWidth}) :
      line(from, fixedPos, to, fixedPos, {color, lineWidth});

    pos += dashLen;
    pos += sepLen;
  }
}