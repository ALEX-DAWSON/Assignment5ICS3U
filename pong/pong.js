// --------------------------------------------------Animate
 var animate = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function(callback) { window.setTimeout(callback, 1000/60) };
// --------------------------------------------------Canvas setup
 var canvas = document.createElement('canvas');
 var width = 800;
 var height = 500;
 canvas.width = width;
 canvas.height = height;
 var context = canvas.getContext('2d');
 window.onload = function() {
   document.body.appendChild(canvas);
   animate(step);
 };
 var step = function() {
   update();
   render();
   animate(step);
 };
 var update = function() {};
 var render = function() {
//   context.fillStyle = "#FF00FF";
//   context.fillRect(0, 0, 800, 500);
 };
// --------------------------------------------------Canvas Colour
 context.beginPath();
 context.fillStyle="gray";
 context.fillRect( 5, 5, width, height);
 context.stroke();
// --------------------------------------------------Paddle setup
  function Paddle(left, right, width, height) {
    this.left = left;
    this.right = right;
    this.width = width;
    this.height = height;
    this.left_speed = 0;
    this.right_speed = 0;
  }

  Paddle.prototype.render = function() {
    context.fillStyle = "red";
    context.fillRect(this.left, this.right, this.width, this.height);
  };
// --------------------------------------------------Actual Paddle
// ----------Creation
  function Player() {
    this.paddle = new Paddle(width-100,height-300,8,50)
  }

  function Computer() {
    this.paddle = new Paddle(100,200,8,50)
  }
// ----------Rendered
  Player.prototype.render = function() {
    this.paddle.render();
  }

  Computer.prototype.render = function() {
    this.paddle.render();
  }
// --------------------------------------------------Ball setup
 function Ball(x, y) {
 this.x = x;
 this.y = y;
 this.x_speed = 0;
 this.y_speed = 3;
 this.radius = 5;
}

 Ball.prototype.render = function() {
 context.beginPath();
 context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
 context.fillStyle = "#000000";
 context.fill();
};
// --------------------------------------------------Update Render
 var player = new Player();
 var computer = new Computer();
 var ball = new Ball(200, 300)

 var render = function() {
   context.fillStyle = "gray";
   context.fillRect(0, 0, width, height);
   player.render();
   computer.render();
   ball.render();
 };
