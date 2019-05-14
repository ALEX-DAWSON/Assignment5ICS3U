// --------------------------------------------------Canvas setup
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
// --------------------------------------------------Global Variable Declarations and Initializations
// ----------Sprites
var PlayerPaddle = 225;
var ComputerPaddle = 225;
var BallX = 400;
var BallY = 250;
// ----------Sprite Movement
var PlayerPaddle_step = -2;
var ComputerPaddle_step = 2;
var BallX_step = 5;
var BallY_step = 5;
function MovePieces() {
  PlayerPaddle += PlayerPaddle_step;
  ComputerPaddle += ComputerPaddle_step;
  BallX += BallX_step;
  BallY += BallY_step;
}
function EraseCanvas() {
  var eraseCanvas = document.createElement('canvas');
  eraseCanvas.width = canvasWidth;
  eraseCanvas.height = canvasHeight;
}

// --------------------------------------------------Animation

function DisplayFrames() {
  setInterval (NextFrame , 60);
}
function NextFrame () {
  EraseCanvas();
  context.beginPath();
  context.fillStyle = "black";
  context.fillRect(0,PlayerPaddle, 8, 50);
  context.fillRect(792,ComputerPaddle, 8, 50);
  context.stroke();
  context.beginPath();
  context.arc(BallX,BallY,10,0,2*Math.PI, false);
  context.fill();
  context.lineWidth = 1;
  context.strokeStyle = "green";
  context.stroke();
  MovePieces();
}

// Main Program
DisplayFrames();
