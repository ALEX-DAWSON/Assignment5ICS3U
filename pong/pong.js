// --------------------------------------------- Canvas setup
 var canvas = document.createElement('canvas');
 canvas.width = 800;
 canvas.height = 500;
 var context = canvas.getContext('2d');
 var mainThing = document.getElementById('main');
 mainThing.appendChild(canvas);
 context.fillStyle="#b7b300";
