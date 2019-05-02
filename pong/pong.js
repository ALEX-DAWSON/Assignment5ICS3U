// --------------------------------------------------Canvas setup
 var canvas = document.createElement('canvas');
 canvas.width = 800;
 canvas.height = 500;
 var context = canvas.getContext('2d');
//  --------------------------------------------------Canvas Colour
 context.beginPath();
 context.fillStyle="#b7b300";
 context.fillRect(0,0,800,500);
 context.stroke();
 context.beginPath();
 context.fillStyle="black";
 context.fillRect(5,5,795-5,495-5);
 context.stroke();
// ----------------------------------------------Paddle setup
  var leftpaddley = document.createElement('leftpaddley');
  leftpaddley.width = 8;
  leftpaddley.height = 50;
  var rightpaddley = document.createElement('rightpaddley');
  rightpaddley.width = 8;
  rightpaddley.height = 50;
// -------------------------------------------- Ball setup
  context.arc(400, 250, 10, 0, 2*Math.PI, false);
  var circlex = document.createElement('circlex');
  var circley = document.createElement('circley');
