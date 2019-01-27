let initialized = false;
let gameLoopInProgress = null;
let isPaused = null;

let zoomLevel = INITIAL_ZOOM_LEVEL;

let screenWidth = 0;
let screenHeight = 0;
let viewportWidth = 0;
let viewportHeight = 0;
let viewportOffsetX = 0;
let viewportOffsetY = 0;
let prevViewportOffsetX = null;
let prevViewportOffsetY = null;
let viewportIsMoving = null;

let centerWorldX = 0;
let centerWorldY = 0;
let centerScreenX = 0;
let centerScreenY = 0;

let mouseWorldX = 0;
let mouseWorldY = 0;
let mouseScreenX = 0;
let mouseScreenY = 0;
let mouseDownOriginScreenX = null;
let mouseDownOriginScreenY = null;
let mouseDownOriginWorldX = null;
let mouseDownOriginWorldY = null;
let isMouseDown = null;
let isMouseOutOfScreen = null;

let now = null;
let prevDrawTime = null;
let drawTimeDelta = 0;