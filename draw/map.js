const Tiles = {
  grass,
  rock,
  water,
}

function drawMap() {
  GAME_MAP.forEach(tile => {
    const {x, y, width, height} = tile;

    if (isVisible(x, y, width, height)) {
      Tiles[tile.type](getScreenX(x, 1), getScreenY(y, 1), width, height);
    }
  });
}