var canvas = document.getElementById("myCanvas").getContext("2d");
var FPS = 30;
var CANVAS_WIDTH = 480;
var CANVAS_HEIGHT = 320;

var img=new Image();
img.src = "./img/sprite/skull.png"
var enemyImg = new Image();
enemyImg.src = "./img/sprite/Illuminati.png"
var textX = 50;
var textY = 50;
var playerBullets = []; // holds all active bullets
var playerEnemies = [];

var score = 0;
var updateFrames = true;


var cursorX;
var cursorY;

var playerpos;


// main player object
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
  shoot: function(xV, yV, cX, cY) {
    var bulletPosition = this.midpoint();

    playerBullets.push(Bullet({
      xVelocity: xV,
      yVelocity: yV,
      x: bulletPosition.x,
      y: bulletPosition.y,
      cursorX: cX,
      cursorY: cY
    }));
  },
  hasShot: false
}


// this function makes Enemys
// it needs to be passed:
// xVelocity
// yVelocity
// x
// y
function Enemy(I) {
  I.active = true;

  I.width = 30;
  I.height = 30;
  I.color = "#0A0";

  // returns true if the bullet is in canvas still
  I.inBounds = function() {
    return I.x >= -5 && I.x <= CANVAS_WIDTH &&
      I.y >= -5 && I.y <= CANVAS_HEIGHT;
  };

  // draws the bullet
  I.draw = function() {
    canvas.fillStyle = this.color;
    canvas.drawImage(enemyImg,this.x,this.y,this.width,this.height)
  };

  // updates the bullet position
  I.update = function() {
    I.x += I.xVelocity;
    I.y += I.yVelocity;

    I.active = I.active && I.inBounds();
  };

  return I;
}

function newEnemy(xV, yV, x, y) {
  playerEnemies.push(Enemy({
    xVelocity: xV,
    yVelocity: yV,
    x: x,
    y: y
  }));
}

function MakeRandomEnemies() {
    var random = Math.floor(Math.random() * 15) + 1  ;

    if(parseInt(Math.random()*1.9)) {
      newEnemy(10,0, 0, 20*random);
    }
}

// checks if two objects with x and y values are in contact
function collides(a, b) {
  return a.x < b.x + b.width  &&
         a.x + a.width  > b.x &&
         a.y < b.y + b.height  &&
         a.y + a.height  > b.y;
}

// this function checks if objects collide with things
function handleCollisions() {
  // check if the bullit and enemy collide
  playerBullets.forEach(function(bullet) {
    playerEnemies.forEach(function(enemy) {
      if (collides(bullet, enemy)) {
        bullet.active = false;
        enemy.active = false;
        score+=100;
      }
    });
  });

  // check if the player and enemy collide
  playerEnemies.forEach(function(enemy) {
    if (collides(enemy, player)) {
      enemy.active = false;
      score = 0;
      updateFrames = false;
      canvas.font = "30px Impact";
      canvas.fillText("GAME OVER!",130,100);
    }
  });


}




function fastUpdate() {
  if(updateFrames == false) {return};
  // update the bullets positions and remove inactive bullets
  handleCollisions(); // check and handle any object collisions


  // update the bullets
  playerBullets.forEach(function(bullet) {
    bullet.update();
  });
  playerBullets = playerBullets.filter(function(bullet) {
    return bullet.active;
  });
}


function fastDraw() {
  if(updateFrames == false) {return};
  // draw the bullets
}

function update() {
  if(updateFrames == false) {return};
  // check if keys are pressed
  if (ispressed.d) {player.x += 10;}
  if (ispressed.a) {player.x -= 10;}
  if (ispressed.s) {player.y += 10;}
  if (ispressed.w) {player.y -= 10;}

  // detect if the player moves out of the box
  if(player.x > 465) {player.x=465}
  if(player.x < -10) {player.x= -10}
  if(player.y > 300) {player.y=300}
  if(player.y < -20) {player.y=-20}



  // update the enemy positions and remove any inactives
  playerEnemies.forEach(function(Enemy) {
    Enemy.update();
  });
  playerEnemies = playerEnemies.filter(function(Enemy) {
    return Enemy.active;
  });

}

// this is the main drawing function
function draw() {
  if(updateFrames == false) {return};

  canvas.clearRect(0, 0, 480, 320);       // clear the canvas
  player.draw();                          // draw the player
  canvas.fillText("SCORE " + score,5,10); // draw the current score

  // draw the enemies
  playerEnemies.forEach(function(Enemy) {
    Enemy.draw();
  });

  // draw the bullets
  playerBullets.forEach(function(bullet) {
    bullet.draw();
  });
}

function newGame() {
  if(updateFrames==true) {return;}
  score = 0;
  updateFrames = true;
  player.x = 100;
  player.y = 100;

  playerBullets = playerBullets.filter(function(bullet) {
    return false;
  });

  playerEnemies = playerEnemies.filter(function(Enemy) {
    return false;
  });

}


// setup the fast drawing functions
setInterval(function() {
  fastUpdate();
  fastDraw();
}, 1);

// setup the normal drawing functions
setInterval(function() {
  update();
  draw();
}, 1000/FPS);

// setup the enemie making function
setInterval(function() {
  MakeRandomEnemies();
}, 500);
