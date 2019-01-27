const TILE_WATER_BG_COLOR = '#2191FB';

function water(x, y, width, height) {
  rect(x, y, width, height, {fill:true, color:TILE_WATER_BG_COLOR});
}