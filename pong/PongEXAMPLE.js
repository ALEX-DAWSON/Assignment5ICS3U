// Pre processing Canvas setup
var canvas = document.createElement('canvas');
var width = 600;
var height = 400;
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');
window.onload = function() {
  document.body.appendChild(canvas);
};
function DisplayFrames(){
setInterval(NextFrame,10);
}

// Global Variables and initializations
var paddleheight;
var paddlewidth;
paddleheight=50;
paddlewidth=10;
var player1x;
var player1y;
var player2x;
var player2y;
player1x=10;
player1y=175;
player2x=580;
player2y=175;
var paddle1speed;
var paddle2speed;
paddle1speed=0;
paddle2speed=0;
var ballx;
var bally;
ballx=300;
bally=200;
radius = 5;
var xspeed;
var yspeed;
xspeed=3;
yspeed=0;
var score1;
var score2;
score1=0;
score2=0;

// Function declarations
function DrawGamePieces()
{
context.beginPath();
context.lineWidth = 1;
context.strokeStyle = "white";
context.fillStyle = "black";
context.fillRect(player1x,player1y,paddlewidth,paddleheight);
context.fillRect(player2x,player2y,paddlewidth,paddleheight);
context.arc(ballx, bally, 2*radius,0,2 * Math.PI, false);
context.fill();
context.stroke(); 
}

// Outline what goes on in each animation frame
function NextFrame(){

//Write this next block into a function analogous to DrawGamePieces()
context.beginPath();
context.fillStyle = "white";
context.fillRect(player1x,player1y,paddlewidth,paddleheight);
context.fillRect(player2x,player2y,paddlewidth,paddleheight);
context.arc(ballx - xspeed, bally - yspeed, 2*radius, 0, 2 * Math.PI, false);
context.fill();
context.lineWidth = 1;
context.strokeStyle = "white";
context.stroke();

DrawGamePieces();           

ballx+=xspeed;
bally+=yspeed;

// Bouncing off top and bottom
if(bally - 5 < 0) 
  { // hitting the bottom wall
    bally = 5;
    yspeed = -yspeed;
  } 
  else if(bally  + 5 > 400) 
  { // hitting the top wall
    bally  = 395;
    yspeed = -yspeed;
  }

// Bouncing off paddles
if (ballx > 300) 
  {
    if(bally - 5 < (player2y+ paddleheight) && 
      bally + 5 > player2y && 
      ballx - 5 < (player2x  + paddlewidth) && 
      ballx + 5 > player2x)
    { // hit the right player's paddle
      yspeed += (paddle1speed / 2);
      xspeed = -3;
      ballx += xspeed;
    }
  } 
}

// Animate the game
DisplayFrames();
