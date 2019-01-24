function withAngle(x, y, deg, fn) {
  context.save();
  context.translate(x, y);
  context.rotate(degToRad(deg));

  fn();

  context.restore();
}