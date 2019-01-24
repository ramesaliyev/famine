function line(fromX, fromY, toX, toY, options) {
  const {
    color = COLOR.defaultLine,
    lineWidth = 1,
  } = (options || {});

  context.lineWidth = lineWidth;
  context.strokeStyle = color;
  context.beginPath();
  context.moveTo(fromX, fromY);
  context.lineTo(toX, toY);
  context.stroke();
}