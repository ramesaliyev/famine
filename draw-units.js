function drawUnits() {
  const {x, y} = getScreenPosition(0, 0, true);
  circle(x, y, 10, {fill:false});

  const {x:x1, y:y1} = getScreenPosition(20, 20, true);
  circle(x1, y1, 10, {fill:false});

  const {x:x2, y:y2} = getScreenPosition(100, 100, true);
  circle(x2, y2, 20, {fill:false});
}