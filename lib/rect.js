function rect(x, y, w, h, options) {
  const {
    color = COLOR.defaultRect,
    angle = 0,
    fill = false,
    lineWidth = 1,
  } = (options || {});

  if (angle) {
    return withAngle(x, y, angle, () =>
      $drawRect(0, 0, w, h, {...options, angle: false})
    );
  }

  context.beginPath();
  context.lineWidth = lineWidth,
  context.strokeStyle = color;
  context.fillStyle = color;
  context.rect(x, y, w, h);
  context.closePath();
  fill ? context.fill() : context.stroke();
};