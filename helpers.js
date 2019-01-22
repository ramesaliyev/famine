const withAngle = (x, y, angle, fn) => {
  context.save();
  context.translate(x, y);
  context.rotate(degToRad(angle));

  fn();

  context.restore();
};

const text = (x, y, text, options = {}) => {
  const {
    color = COLORS.black,
    size = 14,
    angle = 0,
    align = 'center',
    baseline = 'bottom',
  } = options;

  if (angle) {
    options.angle = false;

    return withAngle(x, y, angle, () =>
      $drawText(0, 0, text, options)
    );
  }

  context.font = `${size}px sans-serif`;
  context.textBaseline = baseline;
  context.textAlign = align;
  context.fillStyle = color;
  context.fillText(text, x, y);
};

const circle = (x, y, r, {
  color = COLORS.black,
  fill = true,
  startAngle = 0,
  endAngle = twoPI,
  aCW = true,
  lineWidth = 1,
} = {}) => {
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