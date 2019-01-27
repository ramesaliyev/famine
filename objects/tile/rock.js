const TILE_ROCK_BG_COLOR = '#823200';

function rock(x, y, width, height) {
  rect(x, y, width, height, {fill:true, color:TILE_ROCK_BG_COLOR});
}