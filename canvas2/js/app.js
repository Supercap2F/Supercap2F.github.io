
//var canvas = document.getElementById("myCanvas").getContext("2d");
var FPS = 30;
var CANVAS_WIDTH = 512;
var CANVAS_HEIGHT = 256;

var cursorX;
var cursorY;

var gameMode = 1; //  0 - Show enter screen
                  //  1 - play normal


function update() {
  switch(gameMode) {
    case 0:
      if(ispressed.enter == true) {
        gameMode = 1;
        player.isDieing = false;
        player.isDead = false;
      }

      break;
    case 1:
      // check if keys are pressed
      if(player.isDieing) {
        player.die();
        if(player.isDead) {
          gameMode = 0;
        }
        else { return; }
      }

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


      break;
    default:
      break;
  }
}

// this is the main drawing function
function draw() {
  switch(gameMode) {
    case 0:
      canvas.clearRect(0, 0, 512, 256);       // clear the canvas
      canvas.fillStyle="#000000";
      canvas.fillRect(0,0,512,256);


      renderMap();

      canvas.fillStyle="#232323";
      canvas.fillRect(50,50,(CANVAS_WIDTH - 100),(CANVAS_HEIGHT - 100));

      canvas.strokeStyle = "#777777";
      canvas.rect(50,50,(CANVAS_WIDTH - 100),(CANVAS_HEIGHT - 100));
      canvas.stroke();

      canvas.fillStyle = "white";
      canvas.font = "20px Bungee Shade";
      canvas.fillText("Canvas Test",60,70);

      canvas.font = "15px Bungee Shade";
      canvas.fillText("Enter the game by pressing enter.",60,90);
      canvas.fillText("The game controls are A, D, and space.",60,110);
      break;
    case 1:
      canvas.clearRect(0, 0, 512, 256);       // clear the canvas
      canvas.fillStyle="#000000";
      canvas.fillRect(0,0,512,256);

      renderMap();

      player.draw();

      break;
    default:
      break;
  }
}



// setup the normal drawing functions
setInterval(function() {
  update();
  draw();
}, 1000/FPS);
