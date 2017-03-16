var c = document.getElementById("myCanvas");
var canvas = c.getContext("2d");
var FPS = 30;
var img=new Image();
img.src = "./img/sprite/skull.png"

var textX = 50;
var textY = 50;

var CANVAS_WIDTH = 480;
var CANVAS_HEIGHT = 320;
var playerBullets = []; // holds all active bullets


var player = {
  color: "#0A0",
  x: 220,
  y: 270,
  width: 32,
  height: 32,
  draw: function() {
    canvas.fillStyle = this.color;
    canvas.drawImage(img,this.x,this.y,this.width,this.height)
  },
  midpoint: function() {
    return {
      x: this.x + this.width/2,
      y: this.y + this.height/2
    };
  },
  shoot: function(xV, yV) {
    var bulletPosition = this.midpoint();

    playerBullets.push(Bullet({
      xVelocity: xV,
      yVelocity: yV,
      x: bulletPosition.x,
      y: bulletPosition.y
    }));
  },
  hasShot: false
}

var playerpos = player.midpoint();

document.getElementById('myCanvas').onclick = function() {
  playerpos = player.midpoint();
  playerpos.x = playerpos.x - cursorX;
  playerpos.y = playerpos.y - cursorY;
  playerpos.angle = Math.atan(playerpos.x/playerpos.y);
  playerpos.xshoot = 6.36 * Math.sin(playerpos.angle);
  playerpos.yshoot = 6.36 * Math.cos(playerpos.angle);
  if(playerpos.y > 0) {
    playerpos.yshoot = -playerpos.yshoot;
    playerpos.xshoot = -playerpos.xshoot;
  }



  player.shoot(playerpos.xshoot,playerpos.yshoot);
}

function fastUpdate() {
  // update the bullets positions
  playerBullets.forEach(function(bullet) {
    bullet.update();
  });
  // re move non active bullets
  playerBullets = playerBullets.filter(function(bullet) {
    return bullet.active;
  });
}


function fastDraw() {
  playerBullets.forEach(function(bullet) {
    bullet.draw();
  });
}

function update() {
  if (ispressed.d) {
    player.x += 10;
  }

  if (ispressed.a) {
    player.x -= 10;
  }
  if (ispressed.s) {
    player.y += 10;
  }

  if (ispressed.w) {
    player.y -= 10;
  }



  if(player.x > 465) {player.x=465}
  if(player.x < -10) {player.x= -10}

  if(player.y > 300) {player.y=300}
  if(player.y < -20) {player.y=-20}


}

function draw() {
  canvas.clearRect(0, 0, 480, 320);
  player.draw();

  // draw the bullets

}

// this function makes bullets
// it needs to be passed:
// xVelocity
// yVelocity
// x
// y
function Bullet(I) {
  I.active = true;

  I.width = 3;
  I.height = 3;
  I.color = "#000";

  // returns true if the bullet is in canvas still
  I.inBounds = function() {
    return I.x >= 0 && I.x <= CANVAS_WIDTH &&
      I.y >= 0 && I.y <= CANVAS_HEIGHT;
  };

  // draws the bullet
  I.draw = function() {
    canvas.fillStyle = this.color;
    canvas.fillRect(this.x, this.y, this.width, this.height);
  };

  // updates the bullet position
  I.update = function() {
    I.x += I.xVelocity;
    I.y += I.yVelocity;

    I.active = I.active && I.inBounds();
  };

  return I;
}

var cursorX;
var cursorY;
document.onmousemove = function(e){
    cursorX = e.pageX;
    cursorY = e.pageY;
}



setInterval(function() {
  fastUpdate();
  fastDraw();
}, 1);


setInterval(function() {
  update();
  draw();
}, 1000/FPS);
