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
PlayerX = 0;
PlayerY = 0;
