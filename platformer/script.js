/* ----------------------------------------------------------------------------------
Author: Alex Dawson
Description: Platformer
------------------------------------------------------------------------------------*/
// ---------------------------------------------------------------------------------------------------Canvas
var canvas = document.createElement('canvas');
// VV This needs to be read first by the computer so it can make the canvas VV
var canvasWidth = 800;
var canvasHeight = 500;
canvas.width = canvasWidth;
canvas.height = canvasHeight;
var context = canvas.getContext('2d');
window.onload = function() {
  document.body.appendChild(canvas);
};
// ---------------------------------------------------------------------------------------------------Globals
// ----------Ground
var GroundWidth = 800;
var GroundHeight = 20;
// ----------Platforms
var PlatformWidth = 100;
var PlatformHeight = 20;
// ----------Player
var PlayerSize = 20;
var PlayerX = 20;
var PlayerY = 450-GroundHeight;
var Player_step = 0;
var Player_jump = 0;

var DownKey = {};
window.addEventListener("keydown", function(event) {DownKey[event.keyCode] = true;});
window.addEventListener("keyup", function(event) {delete DownKey[event.keyCode];});

// ---------------------------------------------------------------------------------------------------Game Functions

function ViewPlayer() {
  context.beginPath();
  context.fillStyle = "red";
  context.fillRect(PlayerX, PlayerY, PlayerSize, PlayerSize);
  context.stroke();
};

function ViewGround() {
  context.beginPath();
  context.fillStyle = "green";
  context.fillRect(0, 450, GroundWidth, GroundHeight);
  context.stroke();
}

function ViewPlatform() {
  context.beginPath();
  context.fillStyle = "#214682";
  context.fillRect(20, 300, PlatformWidth, PlatformHeight);
  context.fillRect(150, 250, PlatformWidth, PlatformHeight);
  context.fillRect(650, 400, PlatformWidth, PlatformHeight);
  context.stroke();
}

function MovePlayer() {
  PlayerX += Player_step;
  PlayerY += Player_jump;
  for (var Key in DownKey){
    // ----------Number(Key) assigns ascii number with key to KeyValue
    var KeyValue = Number(Key);
    // ----------For down arrow
    if (KeyValue == 38) {
      PlayerY -= 5;
    }
    // ----------For up arrow
    else if (KeyValue == 40) {
      PlayerY += 5;
    }
    // ----------For right arrow
    else if (KeyValue == 39) {
      PlayerX += 5;
    }
    // ----------For left arrow
    else if (KeyValue == 37) {
      PlayerX -= 5;
    }
  }
  // ----------If player goes off sides of screen, they will appear on other side
  if (PlayerX > 800) {
    PlayerX = -20;
  }
  else if (PlayerX < -20) {
    PlayerX = 800;
  }
  // ----------Player can't go through ground
  if (PlayerY > 450-GroundHeight) {
    PlayerY = 450-GroundHeight;
  }
  else if (PlayerY < -20) {
    PlayerY = 500;
  }
}

function EraseCanvas() {
  var eraseCanvas = document.createElement('canvas');
  eraseCanvas.width = canvasWidth;
  eraseCanvas.height = canvasHeight;
  context.fillStyle = "white";
  context.fillRect(0, 0, canvasWidth, canvasHeight)
}

function NextFrame() {
  EraseCanvas();
  ViewGround();
  ViewPlatform();
  ViewPlayer();
  MovePlayer();
}

function DisplayFrames() {
    setInterval (NextFrame , 60);
}
// ---------------------------------------------------------------------------------------------------Main Program
DisplayFrames();