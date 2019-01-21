function line(fromX, fromY, toX, toY, {color, lineWidth} = {}) {
  if (lineWidth) context.lineWidth = lineWidth;
  if (color) context.strokeStyle = color;
  context.beginPath();
  context.moveTo(fromX, fromY);
  context.lineTo(toX, toY);
  context.stroke();
}