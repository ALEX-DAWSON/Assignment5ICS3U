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
var PlayerX = 10;
var PlayerY = 10;
var GroundWidth = 800;
var GroundHeight = 10;

// ---------------------------------------------------------------------------------------------------Game Functions
function EraseCanvas() {
  var eraseCanvas = document.createElement('canvas');
  eraseCanvas.width = canvasWidth;
  eraseCanvas.height = canvasHeight;
  context.fillStyle = "white";
  context.fillRect(0, 0, canvasWidth, canvasHeight)
}

function NextFrame() {
  EraseCanvas();
}

function DisplayFrames() {
    setInterval (NextFrame , 60);
}
// ---------------------------------------------------------------------------------------------------Main Program
DisplayFrames();
