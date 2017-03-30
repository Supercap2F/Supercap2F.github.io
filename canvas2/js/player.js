// main player object
var player = {
  color: "#0A0",
  x: 256,
  y: 0,
  width: 32,
  height: 32,
  frontTile: 335,
  LsideTile: 336,
  RsideTile: 334,
  JumpTile:  333,
  dieTile: 453,
  lastState: 0,
  StateRate: 1,
  StateTog: 0,
  fallingRate: 10,
  accRate: 0.1,
  accVar: 0,

  JumpTime: 10,
  JumpCount: 0,
  StartJumpFlag: 0,

  isDead: false,
  isDieing: false,
  DieLength: 10,
  DieCount: 0,
  draw: function() {
    canvas.fillStyle = this.color;
    var sprite;
    if(this.lastState < this.StateRate) { this.lastState++; }
    else { this.lastState =0; this.StateTog = ~ this.StateTog; }

    if(ispressed.d) {
      if(this.StateTog) {sprite = this.RsideTile; }
      else {sprite = this.frontTile; }
    }
    else if(ispressed.a) {
      if(this.StateTog) {sprite = this.LsideTile; }
      else {sprite = this.frontTile; }
    }
    else if(this.isDieing) {
      sprite = this.dieTile;
    }
    else {
      sprite = this.frontTile;
    }

    canvas.drawImage(
      tileAtlas, // image
      (((sprite -1) % map.tsize) * map.tsize), // source x
      (Math.floor((sprite -1)/map.tsize) * map.tsize), // source y
      map.tsize, // source width
      map.tsize, // source height
      this.x,  // target x
      this.y + 10, // target y
      this.width, // target width
      this.height // target height
    );
  },
  midpoint: function() {
    return {
      x: this.x + this.width/2,
      y: this.y + this.height/2
    };
  },
  isSpriteSide: function(side) {
    switch(side) {
      case 0: // right side
        var sprite  = isOverSprite((this.x + map.tsize + 1), (this.y + 10))
        var sprite2 = isOverSprite((this.x + map.tsize + 1), (this.y + map.tsize - 10));
        return {a: sprite, b: sprite2};
        break;
      case 1: // bottom
        var sprite  = isOverSprite((this.x + 10), (this.y + map.tsize + 1))
        var sprite2 = isOverSprite((this.x + map.tsize - 10), (this.y + map.tsize + 1));
        return {a: sprite, b: sprite2};
        break;
      case 2: // left
        var sprite  = isOverSprite((this.x - 1), (this.y + 10))
        var sprite2 = isOverSprite((this.x - 1), (this.y + map.tsize - 10));
        return {a: sprite, b: sprite2};
        break;
      case 3: // top
        var sprite  = isOverSprite((this.x + 10), (this.y + 10))
        var sprite2 = isOverSprite((this.x + map.tsize - 10), (this.y + 10));
        return {a: sprite, b: sprite2};
        break;
      default:
        return;
        break;
    }
  },
  isTouchingSolidFloor: function() {
    var sprite  = this.isSpriteSide(1);

    if(sprite.a == 65 || sprite.b == 65) { return true; }
    else if(sprite.a == 144 || sprite.b == 144) {
      this.isDieing = true;
      return true;
    }
    else if(sprite.a == 155 || sprite.b == 155) { return true; }
    else if(sprite.a == 156 || sprite.b == 156) { return true; }
    else { return false; }

  },
  isTouchingSolidCeiling: function() {
    var sprite  = this.isSpriteSide(3);

    if(sprite.a == 65 || sprite.b == 65) { return true; }
    if(sprite.a == 80 || sprite.b == 80) { return true; }
    else { return false; }

  },

  isTouchingSolidWall: function(side) { // send this functin a 1 for right side and 0 for left side
    if( side == 0) { var tile = this.isSpriteSide(2); }
    else  { var tile = this.isSpriteSide(0); }

    if(tile.a == 65 || tile.b == 65) { return true; }
    else if(tile.a == 155 || tile.b == 155) { return true; }
    else if(tile.a == 156 || tile.b == 156) { return true; }
    else if(tile.a == 80  || tile.b == 80 ) { return true; }
    else { return false; }

  },

  jump: function() {
    if(ispressed.space && this.StartJumpFlag != 1 && this.isTouchingSolidFloor() == true) {
      this.StartJumpFlag =1;
    }
    if(this.JumpCount < this.JumpTime && this.StartJumpFlag == 1 ) {
      this.JumpCount ++;
      this.y = this.y - 20;
    }
    if(this.isTouchingSolidCeiling() == true) {
      this.JumpCount = this.JumpTime + 1;
    }
    else {
      if(ispressed.space) {return;}
      if(this.isTouchingSolidFloor() != true) {return;}
      this.JumpCount = 0;
      this.StartJumpFlag = 0;
    }

  },
  die: function() {
    if(this.DieCount < this.DieLength) {
      this.DieCount ++;
      return;
    }

    this.DieCount = 0;
    this.x = 256;
    this.y = 0;
    this.isDead = true;
    Camera.x = 0;
    Camera.y = 0;
  },
  updateGravity: function() {
    if(this.isTouchingSolidFloor()) { // return if the player is touching a solid
      this.accVar = 0;
      return;
    }

    if(this.y > (map.tsize * map.rows)) {return;} // if the player has fallin of the screen

    this.accVar = this.accVar + this.accRate;

    this.y = this.y + this.fallingRate + Math.floor(this.accVar);

    if(this.isTouchingSolidFloor()) {
      this.y = this.y + this.fallingRate + Math.floor(this.accVar);
      this.y = Math.floor(this.y/map.tsize) * map.tsize;
    }
  }
}

function isOverSprite(x,y) {
  var col = Math.floor((x+Camera.x)/map.tsize);
  var row = Math.floor((y+Camera.y)/map.tsize);

  return(map.getTile(col,row));
}
