const GAME_MAP = [];

const HALF_TILE_COUNT = MAP_SIZE_WIDTH / TILE_SIZE / 2;

for (let x = -HALF_TILE_COUNT; x < HALF_TILE_COUNT; x++) {
  for (let y = -HALF_TILE_COUNT + 1; y < HALF_TILE_COUNT + 1; y++) {
    type = 'grass';

    if (Math.random() < 0.2) {
      type = 'rock';
    }

    if (Math.random() < 0.1) {
      type = 'water';
    }

    GAME_MAP.push({
      type,
      x: x * TILE_SIZE,
      y: y * TILE_SIZE,
      width: TILE_SIZE,
      height: TILE_SIZE
    });
  }
}