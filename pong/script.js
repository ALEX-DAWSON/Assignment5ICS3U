/* -------------------------------------------------
Author: Alex Dawson
Description: Pong game
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
var PlayerPaddleY = 225;
var PlayerPaddleX = 0;
var ComputerPaddleY = 225;
var ComputerPaddleX = 792;
var BallX = 400;
var BallY = 250;
// ----------Sprite Movement
var PlayerPaddle_step = 0;
var ComputerPaddle_step = 0;
var BallX_step;
var BallY_step;
var RandomY = Math.floor((Math.random()*10)+1);//Randomly chooses between 1 and 10
var RandomX = Math.floor((Math.random()*10)+1)
if (RandomY >= 5){
  BallY_step = Math.floor((Math.random()*-10)-1);
}
else if (RandomY < 5){
  BallY_step = Math.floor((Math.random()*10)+1);
}
if (RandomX >= 5){
  BallX_step = 5;
}
else if (RandomX < 5){
  BallX_step = -5;
}
var DownKey = {};
window.addEventListener("keydown", function(event) {DownKey[event.keyCode] = true;});
window.addEventListener("keyup", function(event) {delete DownKey[event.keyCode];});
// ----------Widths and Heights
var PaddleWidth = 8;
var PaddleHeight = 50;
// ----------Scores
var PlayerScore = 0;
var ComputerScore = 0;
// --------------------------------------------------Game Functions
var KeepPlaying = 1;
//var Interval = setInterval(EraseCanvas, 10)
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
  context.fillRect(PlayerPaddleX,PlayerPaddleY, PaddleWidth, PaddleHeight);
  context.fillRect(ComputerPaddleX,ComputerPaddleY, PaddleWidth, PaddleHeight);
  context.stroke();
  context.beginPath();
  context.arc(BallX,BallY,10,0,2*Math.PI, false);
  context.fill();
  context.lineWidth = 1;
  context.strokeStyle = "#b7b300";
  context.stroke();
}
function MovePieces() {
  PlayerPaddleY += PlayerPaddle_step;
  ComputerPaddleY += ComputerPaddle_step;
  BallX += BallX_step;
  BallY += BallY_step;
  for (var Key in DownKey){
    // ----------Number(Key) assigns ascii number with key to KeyValue
    var KeyValue = Number(Key);
    // ----------For down arrow
    if (KeyValue == 38) {
      PlayerPaddleY -= 5;
    }
    // ----------For up arrow
    else if (KeyValue == 40) {
      PlayerPaddleY += 5;
    }
    // ----------Press Q to reset
    else if (KeyValue == 81 || KeyValue == 113) {
      if (KeepPlaying = 1) {
        console.log("Stop");
        Stop();
        KeepPlaying = 0;
      }
      else if (KeepPlaying == 0) {
        console.log("Play");
        Reset();
        KeepPlaying = 1;
      }
    }
    else {}
  }
  //Computer Paddle follows the ball
  if (BallY - 10 < ComputerPaddleY + 25) {
    ComputerPaddle_step = 5;
  }
  if (BallY + 10 < ComputerPaddleY + 25) {
    ComputerPaddle_step = -5;
  }
  // If Ball hit side of ComputerPaddleY, Ball will bounce
  if (BallX > 400) {
    console.log("power level over 400");
    if (BallY-5 < (ComputerPaddleY+PaddleHeight) &&
        BallY+5 > ComputerPaddleY &&
        BallX-5 <  (ComputerPaddleX+PaddleWidth) &&
        BallX+5 > ComputerPaddleX) {
      console.log("HIT!");
      BallX_step = -3;
      BallX += BallX_step;
    }
  }
  else if (BallX < 400) {
    console.log("power level under 400")
    if (BallY-5 < (PlayerPaddleY+PaddleHeight) &&
        BallY+5 > PlayerPaddleY &&
        BallX-5 < (PlayerPaddleX+PaddleWidth) &&
        BallX+5 > PlayerPaddleX) {
      console.log("HIT!");
      BallX_step = 3;
      BallX += BallX_step;
    }
  }

}
function ManagePieces() {
  if (KeepPlaying = 1) {
    if (PlayerPaddleY+50>500) {
      PlayerPaddleY = 500 - 50;
    }
    if (PlayerPaddleY<0) {
      PlayerPaddleY = 0;
    }
    if (ComputerPaddleY+50>500) {
      ComputerPaddleY = 500 - 50;
    }
    if (ComputerPaddleY<0) {
      ComputerPaddleY = 0;
    }
    if (BallY + 10 + BallY_step > 500) {
      BallY = 500 - 10;
      BallY_step =-1*BallY_step;
    }
    if (BallY - 10 - BallY_step < 0) {
      BallY = 10;
      BallY_step =-1*BallY_step;
    }
    // ----------Scoring System
    if (BallX > 800) {
      PlayerScore++;
      console.log("Oops. Computer missed.")
      console.log("Player = "+PlayerScore)
      Reset();
    }
    else if (BallX < 0) {
      ComputerScore++;
      console.log("Oops. You missed.")
      console.log("Computer = "+ComputerScore)
      Reset();
    }
  }
  else if (KeepPlaying = 0) {
    Stop();
  }
}
function DisplayScore() {
    context.font = "16px Arial";
    context.fillStyle = "#b7b300";
    context.fillText("Player: "+PlayerScore, 15, 20);
    context.fillText("Computer: "+ComputerScore,690,20);
}
// ----------Reset
function Reset() {
  PlayerPaddleY = 225;
  PlayerPaddleX = 0;
  ComputerPaddleY = 225;
  ComputerPaddleX = 792;
  BallX = 400;
  BallY = 250;
  PlayerPaddle_step = 0;
  ComputerPaddle_step = 0;
  RandomY = Math.floor((Math.random()*10)+1);
  RandomX = Math.floor((Math.random()*10)+1)
  if (RandomX >= 5){
    BallX_step = 5;
  }
  else if (RandomX < 5){
    BallX_step = -5;
  }
  if (RandomY >= 5){
    BallY_step = Math.floor((Math.random()*-10)-1);
  }
  else if (RandomY < 5){
    BallY_step = Math.floor((Math.random()*10)+1);
  }
}
function Stop() {
  KeepPlaying = 0;
  PlayerPaddleY = 225;
  PlayerPaddleX = 0;
  ComputerPaddleY = 225;
  ComputerPaddleX = 792;
  BallX = 400;
  BallY = 250;
  PlayerPaddle_step = 0;
  ComputerPaddle_step = 0;
  BallX_step = 0;
  BallY_step = 0;
  EraseCanvas();
  // document.location.reload();
  //clearInterval(Interval);
  context.font = "16px Arial";
  context.fillStyle = "green";
  context.fillText("Game Over",300,250);
  context.fillText("KeepPlaying = "+KeepPlaying,375, 20);
}
// --------------------------------------------------

// --------------------------------------------------Animation
function Play() {
    EraseCanvas();
    DrawGame();
    DisplayScore();
    ManagePieces();
    MovePieces();
}

function DisplayFrames() {
    setInterval (NextFrame , 60);
}

function NextFrame () {
  if (KeepPlaying = 1){
    Play();
  }
  else if (KeepPlaying = 0) {
    Stop();
  }
}

// --------------------------------------------------Main Program
DisplayFrames();
