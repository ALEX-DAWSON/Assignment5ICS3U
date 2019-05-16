/* -------------------------------------------------
Author: Alex Dawson
Description: Pong game
-------------------------------------------------
For Carrier: PlayerPaddle = LeftPaddley, ComputerPaddle = RightPaddley, BallY = Circley,
BallX = Circlex, PlayerPaddle_step = LeftPaddleStep, ComputerPaddle_step = RightPaddleStep,
 BallX_step = XBallStep, BallY_step = YBallStep, DownKey = keysDown.
-------------------------------------------------- */
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
// --------------------------------------------------Global Variable Initializations
// ----------Sprites
var PlayerPaddle = 225;
var ComputerPaddle = 225;
var BallX = 400;
var BallY = 250;
// ----------Sprite Movement
var PlayerPaddle_step = 0;
var ComputerPaddle_step = 0;
var BallX_step = 5;
var BallY_step = -5;
var DownKey = {};
window.addEventListener("keydown", function(event) {DownKey[event.keyCode] = true;});
window.addEventListener("keyup", function(event) {delete DownKey[event.keyCode];});
// ----------Game Functions
var keepPlaying = true;
function EraseCanvas() {
  var eraseCanvas = document.createElement('canvas');
  eraseCanvas.width = canvasWidth;
  eraseCanvas.height = canvasHeight;
  context.fillStyle = "white";
  context.fillRect(0, 0, canvasWidth, canvasHeight)
}
function DrawGame() {
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
}
function MovePieces() {
  PlayerPaddle += PlayerPaddle_step;
  ComputerPaddle += ComputerPaddle_step;
  BallX += BallX_step;
  BallY += BallY_step;
  for (var Key in DownKey){
    // ----------Number(Key) assigns ascii number with key to Value
    var Value = Number(Key);
    // ----------For down arrow
    if (Value == 38) {
      PlayerPaddle -= 5;
    }
    // ----------For up arrow
    else if (Value == 40) {
      PlayerPaddle += 5;
    }
    // ----------Press Q to quit
    else if (Value == 81 || Value == 113) {
      keepPlaying = false;
    }
    else {}
  }
  //Computer Paddle follows the ball
  if (BallY - 10 < ComputerPaddle + 25) {
    ComputerPaddle_step = 5;
  }
  if (BallY + 10 < ComputerPaddle + 25) {
    ComputerPaddle_step = -5;
  }
  // If Ball hit side of ComputerPaddle, Ball will bounce
   if (BallY-10 < ComputerPaddle+50 && BallY-10 > ComputerPaddle-50 && BallX-10 < ComputerPaddle+25) {
     BallX = 800 - 8;
     BallX =-1*BallX_step;
   }
}
function ManagePieces() {
  if (PlayerPaddle+50>500) {
    PlayerPaddle = 500 - 50;
  }
  if (PlayerPaddle<0) {
    PlayerPaddle = 0;
  }
  if (ComputerPaddle+50>500) {
    ComputerPaddle = 500 - 50;
  }
  if (ComputerPaddle<0) {
    ComputerPaddle = 0;
  }
  if (BallY + 10 + BallY_step > 500) {
    BallY = 500 - 10;
    BallY_step =-1*BallY_step;
  }
  if (BallY - 10 - BallY_step < 0) {
    BallY = 10;
    BallY_step =-1*BallY_step;
  }
}
// --------------------------------------------------

// --------------------------------------------------Animation

function DisplayFrames() {
  setInterval (NextFrame , 60);
}
function NextFrame () {
  EraseCanvas();
  DrawGame();
  ManagePieces();
  MovePieces();
}

// --------------------------------------------------Main Program
DisplayFrames();
