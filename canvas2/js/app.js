//var canvas = document.getElementById("myCanvas").getContext("2d");
var FPS = 30;
var CANVAS_WIDTH = 512;
var CANVAS_HEIGHT = 256;

var cursorX;
var cursorY;


function update() {
  // check if keys are pressed
  if (ispressed.d) {
   if(player.isTouchingSolidWall(1) != 1) {
      Camera.move( 10, 0);
    }
  }
  if (ispressed.a) {
    if(player.isTouchingSolidWall(0) != 1) {
      Camera.move(-10, 0);
   }
  }

  player.jump();
  player.updateGravity();

}

// this is the main drawing function
function draw() {
  canvas.clearRect(0, 0, 512, 256);       // clear the canvas
  canvas.fillStyle="#000000";
  canvas.fillRect(0,0,512,256);

  renderMap();

  player.draw();
}



// setup the normal drawing functions
setInterval(function() {
  update();
  draw();
}, 1000/FPS);
