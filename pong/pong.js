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
    context.fillStyle = "#0000FF";
    context.fillRect(this.left, this.right, this.width, this.height);
  };
// --------------------------------------------------Actual Paddle
// ----------Creation
  function Player() {
    this.paddle = new Paddle(0,0,8,50)
  }

  function Computer() {
    this.paddle = new Paddle(0,0,8,50)
  }
// ----------Rendered
  Player.prototype.render = function() {
    this.paddle.render();
  }

  Computer.prototype.render = function() {
    this.paddle.render();
  }
// --------------------------------------------------Ball setup
  context.arc(400, 250, 10, 0, 2*Math.PI, false);
  var circlex = document.createElement('circlex');
  var circley = document.createElement('circley');
