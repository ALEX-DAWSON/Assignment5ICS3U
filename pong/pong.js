// --------------------------------------------- Canvas setup
  var canvas = document.createElement('canvas');
  canvas.width = 800;
  canvas.height = 500;
  var context = canvas.getContext('2d');
  var mainThing = document.getElementById('main');
  mainThing.appendChild(canvas);
  context.fillStyle="#b7b300";
// ----------------------------------------------Paddle setup
  var leftpaddley = document.createElement('leftpaddley');
  leftpaddley.width = 8;
  leftpaddley.height = 50;
  var rightpaddley = document.createElement('rightpaddley');
  rightpaddley.width = 8;
  tightpaddley.height = 50;
  // -------------------------------------------- Ball setup
