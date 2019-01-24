function circle(x, y, r, options) {
  const {
    color = COLOR.defaultCircle,
    fill = true,
    startAngle = 0,
    endAngle = TWO_PI,
    aCW = true,
    lineWidth = 1,
  } = (options || {});

  context.lineWidth = lineWidth;
  context.strokeStyle = color;
  context.fillStyle = color;
  context.moveTo(x, y);
  context.beginPath();

  fill && context.moveTo(x, y);

  context.arc(x, y, r, startAngle, endAngle, aCW);

  fill && context.closePath();
  fill ? context.fill() : context.stroke();
};