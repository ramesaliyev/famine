let gameLoopInProgress = false;
let isPaused = true;

let zoomLevel = 1;

let screenWidth = 0;
let screenHeight = 0;
let viewportWidth = 0;
let viewportHeight = 0;
let viewportOffsetX = 0;
let viewportOffsetY = 0;

let centerWorldX = 0;
let centerWorldY = 0;
let centerScreenX = 0;
let centerScreenY = 0;

let mouseWorldX = 0;
let mouseWorldY = 0;
let mouseScreenX = 0;
let mouseScreenY = 0;
let mouseDownOriginScreenX = 0;
let mouseDownOriginScreenY = 0;
let mouseDownOriginWorldX = 0;
let mouseDownOriginWorldY = 0;
let isMouseDown = false;
let isMouseOutOfScreen = true;

let now = performance.now();
let prevDrawTime = now;
let timePassedSinceLastDraw = 0;