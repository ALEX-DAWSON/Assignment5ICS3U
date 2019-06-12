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
var PlayerSize = 20;
var PlayerX = 20;
var PlayerY = 200;
var GroundWidth = 800;
var GroundHeight = 20;

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

function MovePlayer() {
  
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
  ViewPlayer();
  ViewGround();
}

function DisplayFrames() {
    setInterval (NextFrame , 60);
}
// ---------------------------------------------------------------------------------------------------Main Program
DisplayFrames();
