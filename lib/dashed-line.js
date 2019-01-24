function dashedLine(startPos, endPos, fixedPos, options) {
  const {
    dashLen = 10,
    sepLen = 7,
    vertical = false,
    color,
    lineWidth,
    shift
  } = (options || {});

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