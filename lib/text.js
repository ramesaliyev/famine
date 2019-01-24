function text(x, y, text, options) {
  const {
    color = COLOR.defaultText,
    size = 14,
    angle = 0,
    align = 'center',
    baseline = 'bottom',
  } = (options || {});

  if (angle) {
    return withAngle(x, y, angle, () =>
      text(0, 0, text, {...options, angle: false})
    );
  }

  context.font = `${size}px sans-serif`;
  context.textBaseline = baseline;
  context.textAlign = align;
  context.fillStyle = color;
  context.fillText(text, x, y);
};