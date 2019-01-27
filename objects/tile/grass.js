const TILE_GRASS_BG_COLOR = '#9bca3e';

function grass(x, y, width, height) {
  rect(x, y, width, height, {fill:true, color:TILE_GRASS_BG_COLOR});
}