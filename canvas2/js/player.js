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
  lastState: 0,
  StateRate: 1,
  StateTog: 0,
  fallingRate: 10,

  JumpTime: 10,
  JumpCount: 0,
  StartJumpFlag: 0,
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
      this.y - 18, // target y
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
  isTouchingSolidObject: function() {
    var playerCol = Math.floor((this.x + Camera.x + 16)/map.tsize);
    var playerRow = Math.floor((this.y)/map.tsize);
    var tile = map.getTile(playerCol,playerRow);

    switch(tile) {
      case 155:
        return true;
        break;
      case 156:
        return true;
        break;
      case 65:
        return true;
        break;
      case 144:
        return true;
        break;
      default:
        return false;
    }
  },
  isTouchingSolidWall: function(side) { // send this functin a 1 for right side and 0 for left side
    var playerCol = Math.floor((this.x + Camera.x)/map.tsize);
    var playerRow = Math.floor((this.y + 16 )/map.tsize );
    var tile1 = map.getTile(playerCol ,playerRow);
    var tile2 = map.getTile(playerCol + 1,playerRow);
    //console.log("left " + tile1);
    //console.log("right " + tile2);


    if(side == 0) { var c = tile1; }
    else { var c = tile2; }


    switch(c) {
      case 65:
        return true;
        break;
      default:
        return false;
    }
  },

  jump: function() {
    if(ispressed.space && this.StartJumpFlag != 1 && this.isTouchingSolidObject() == true) {
      this.StartJumpFlag =1;
    }
    if(this.JumpCount < this.JumpTime && this.StartJumpFlag == 1 ) {
      this.JumpCount ++;
      this.y = this.y - 20;
    }
    else {
      if(ispressed.space) {return;}
      if(this.isTouchingSolidObject() != true) {return;}
      this.JumpCount = 0;
      this.StartJumpFlag = 0;
    }

  },
  updateGravity: function() {
    if(this.isTouchingSolidObject()) {return;} // return if the player is touching a solid

    if(this.y > (map.tsize * map.rows)) {return;} // if the player has fallin of the screen
    this.y = this.y + this.fallingRate;
  }
}
