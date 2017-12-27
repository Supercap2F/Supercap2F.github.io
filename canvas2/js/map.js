<<<<<<< HEAD
var tileAtlas = new Image();
tileAtlas.src = "./img/sprite/tileset_4.png"

var map = {
    cols: 64,
    rows: 8,
    tsize: 32,
    layers: [
      65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  ,         2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 80 , 80 , 80 , 80 ,    80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 ,    224, 224, 224, 12 , 16 ,  6 ,  6 ,  6 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 ,
      65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  ,         155, 156, 2  , 2  , 62 , 63 , 64 , 2  , 2  , 2  , 2  , 2  , 80 , 80 , 80 , 80 ,    80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 ,    224, 224, 224, 224, 12 , 16 ,  6 ,  6 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 ,
      65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  ,         65 , 65 , 2  , 156, 155, 156, 155, 156, 2  , 2  , 2  , 2  , 80 , 80 , 80 , 80 ,    80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 ,    224, 224, 224, 224, 224, 12 , 16 ,  6 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 ,
      65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 155,         65 , 65 , 2  , 65 , 65 , 65 , 65 , 65 , 155, 160, 2  , 2  , 69 , 69 , 69 , 69 ,    69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 ,    224, 224, 224, 224, 224, 224, 12 , 16 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 ,
      65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 155, 2  , 2  , 2  , 2  , 155, 156, 65 ,         65 , 65 , 2  , 2  , 2  , 2  , 2  , 2  , 65 , 156, 155, 156, 155, 156, 155, 156,    69 , 178, 69 , 178, 69 , 178, 69 , 178, 69 , 178, 69 , 178, 69 , 178, 69 , 69 ,    155, 156, 155, 156, 155, 156, 155, 156, 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 ,
      65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 2  , 2  , 155, 156, 65 , 65 , 65 ,         65 , 65 , 2  , 2  , 2  , 2  , 2  , 158, 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 ,    155, 69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 156,    65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 ,
      65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 2  , 2  , 65 , 65 , 65 , 65 , 65 ,         65 , 65 , 2  , 155, 156, 156, 155, 156, 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 ,    65 , 156, 155, 156, 155, 156, 155, 156, 155, 156, 155, 156, 156, 155, 156, 65 ,    65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 ,
      65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 144, 144, 65 , 65 , 65 , 65 , 65 ,         65 , 65 , 144, 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 ,    65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 ,    65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65

      ],
    getTile: function (col, row) {
        return this.layers[row * map.cols + col];
    }
};


function camera(map, width, height) {
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.maxX = map.cols * map.tsize - width;
    this.maxY = map.rows * map.tsize - height;
}
camera.prototype.move = function (dirx, diry) {
    // move camera
    this.x += dirx;
    this.y += diry;
    // clamp values
    this.x = Math.max(0, Math.min(this.x, this.maxX));
    this.y = Math.max(0, Math.min(this.y, this.maxY));
};

var Camera = new camera(map, 512, 256);



function renderMap() {
  var startCol = Math.floor(Camera.x / map.tsize);
  var endCol = startCol + Math.floor(Camera.width / map.tsize);
  var startRow = Math.floor(Camera.y / map.tsize);
  var endRow = startRow + Math.floor(Camera.height / map.tsize);
  var offsetX = -Camera.x + startCol * map.tsize;
  var offsetY = -Camera.y + startRow * map.tsize;


  for (var c = startCol; c <= endCol; c++) {
    for (var r = startRow; r <= endRow; r++) {
      var tile = map.getTile(c, r);
      var x = (c - startCol) * map.tsize + offsetX;
      var y = (r - startRow) * map.tsize + offsetY;
      if (tile !== 0) { // 0 => empty tile
        canvas.drawImage(
          tileAtlas, // image
          (((tile -1) % map.tsize) * map.tsize), // source x
          (Math.floor((tile -1)/map.tsize) * map.tsize), // source y
          map.tsize, // source width
          map.tsize, // source height
          Math.round(x),  // target x
          Math.round(y), // target y
          map.tsize, // target width
          map.tsize // target height
        );
      }
    }
  }

}
=======
var tileAtlas = new Image();
tileAtlas.src = "./img/sprite/tileset_4.png"

var map = {
    cols: 64,
    rows: 8,
    tsize: 32,
    layers: [
      65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  ,         2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 80 , 80 , 80 , 80 ,    80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 ,    224, 224, 224, 12 , 16 ,  6 ,  6 ,  6 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 ,
      65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  ,         155, 156, 2  , 2  , 62 , 63 , 64 , 2  , 2  , 2  , 2  , 2  , 80 , 80 , 80 , 80 ,    80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 ,    224, 224, 224, 224, 12 , 16 ,  6 ,  6 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 ,
      65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  ,         65 , 65 , 2  , 156, 155, 156, 155, 156, 2  , 2  , 2  , 2  , 80 , 80 , 80 , 80 ,    80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 ,    224, 224, 224, 224, 224, 12 , 16 ,  6 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 ,
      65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 155,         65 , 65 , 2  , 65 , 65 , 65 , 65 , 65 , 155, 160, 2  , 2  , 69 , 69 , 69 , 69 ,    69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 ,    224, 224, 224, 224, 224, 224, 12 , 16 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 ,
      65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 155, 2  , 2  , 2  , 2  , 155, 156, 65 ,         65 , 65 , 2  , 2  , 2  , 2  , 2  , 2  , 65 , 156, 155, 156, 155, 156, 155, 156,    69 , 178, 69 , 178, 69 , 178, 69 , 178, 69 , 178, 69 , 178, 69 , 178, 69 , 69 ,    155, 156, 155, 156, 155, 156, 155, 156, 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 ,
      65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 2  , 2  , 155, 156, 65 , 65 , 65 ,         65 , 65 , 2  , 2  , 2  , 2  , 2  , 158, 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 ,    155, 69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 156,    65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 ,
      65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 2  , 2  , 65 , 65 , 65 , 65 , 65 ,         65 , 65 , 2  , 155, 156, 156, 155, 156, 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 ,    65 , 156, 155, 156, 155, 156, 155, 156, 155, 156, 155, 156, 156, 155, 156, 65 ,    65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 ,
      65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 144, 144, 65 , 65 , 65 , 65 , 65 ,         65 , 65 , 144, 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 ,    65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 ,    65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65

      ],
    getTile: function (col, row) {
        return this.layers[row * map.cols + col];
    }
};


function camera(map, width, height) {
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.maxX = map.cols * map.tsize - width;
    this.maxY = map.rows * map.tsize - height;
}
camera.prototype.move = function (dirx, diry) {
    // move camera
    this.x += dirx;
    this.y += diry;
    // clamp values
    this.x = Math.max(0, Math.min(this.x, this.maxX));
    this.y = Math.max(0, Math.min(this.y, this.maxY));
};

var Camera = new camera(map, 512, 256);



function renderMap() {
  var startCol = Math.floor(Camera.x / map.tsize);
  var endCol = startCol + Math.floor(Camera.width / map.tsize);
  var startRow = Math.floor(Camera.y / map.tsize);
  var endRow = startRow + Math.floor(Camera.height / map.tsize);
  var offsetX = -Camera.x + startCol * map.tsize;
  var offsetY = -Camera.y + startRow * map.tsize;


  for (var c = startCol; c <= endCol; c++) {
    for (var r = startRow; r <= endRow; r++) {
      var tile = map.getTile(c, r);
      var x = (c - startCol) * map.tsize + offsetX;
      var y = (r - startRow) * map.tsize + offsetY;
      if (tile !== 0) { // 0 => empty tile
        canvas.drawImage(
          tileAtlas, // image
          (((tile -1) % map.tsize) * map.tsize), // source x
          (Math.floor((tile -1)/map.tsize) * map.tsize), // source y
          map.tsize, // source width
          map.tsize, // source height
          Math.round(x),  // target x
          Math.round(y), // target y
          map.tsize, // target width
          map.tsize // target height
        );
      }
    }
  }

}
>>>>>>> origin/master
