var bullet_sprite = new Image();
bullet_sprite.src = "./img/sprite/bullet_3.png"
var ping_sprite = new Image();
ping_sprite.src = "./img/sprite/ping_1.png"
var BULLET_SPEED = 10;

// this function makes bullets
// it needs to be passed:
// xVelocity
// yVelocity
// x
// y
function Bullet(I) {
  I.active = true;

  I.width = 12;
  I.height = 38;
  I.color = "#00A";

  // returns true if the bullet is in canvas still
  I.inBounds = function() {
    return I.x >= -5 && I.x <= CANVAS_WIDTH &&
      I.y >= -5 && I.y <= CANVAS_HEIGHT;
  };

  // draws the bullet
  I.draw = function() {
    canvas.fillStyle = this.color;
    var xdelta = this.x - this.cursorX;
    var ydelta = this.y - this.cursorY;
    var angle = Math.atan(xdelta/ydelta);
    canvas.save();
    canvas.translate(this.x, this.y);
    canvas.rotate(-angle);
    canvas.drawImage(bullet_sprite,0,0,this.width,this.height);
    canvas.restore();


  };

  // updates the bullet position
  I.update = function() {
    I.x += I.xVelocity;
    I.y += I.yVelocity;

    I.active = I.active && I.inBounds();
  };

  return I;
}

function getAimingAngle() {
    return Math.atan((player.midpoint().x - cursorX)/(player.midpoint().y - cursorY));
}


// this function calculates where the mouse aims the gun and shoots at the mouse
document.getElementById('myCanvas').onclick = function() {
  var xshoot = BULLET_SPEED * Math.sin(getAimingAngle());
  var yshoot = BULLET_SPEED * Math.cos(getAimingAngle());
  if((player.midpoint().y - cursorY) > 0) {
      yshoot = -yshoot;
      xshoot = -xshoot;
  }
  player.shoot(xshoot,yshoot,cursorX,cursorY);
}



// setup the mouse cursor event thingy
document.onmousemove = function(e){
    cursorX = e.pageX - 10;
    cursorY = e.pageY - 10;
}
