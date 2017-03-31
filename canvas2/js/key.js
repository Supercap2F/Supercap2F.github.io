var ispressed = {
  w: false,
  a: false,
  s: false,
  d: false,
  space: false,
  enter: false
}

window.addEventListener("keydown",
function(e) {
    if (e.keyCode == "65") {
       ispressed.a = true;
    }
    if (e.keyCode == "87") {
       ispressed.w = true;
    }
    if (e.keyCode == "83") {
       ispressed.s = true;
    }
    if (e.keyCode == "68") {
       ispressed.d = true;
    }
    if (e.keyCode == "32") {
      ispressed.space = true;
    }
    if (e.keyCode == "13") {
      ispressed.enter = true;
    }
}, false);


window.addEventListener("keyup",
function(e) {
    if (e.keyCode == "65") {
        ispressed.a = false;
    }
    if (e.keyCode == "87") {
       ispressed.w = false;
    }
    if (e.keyCode == "83") {
       ispressed.s = false;
    }
    if (e.keyCode == "68") {
       ispressed.d = false;
    }

    if (e.keyCode == "32") {
      ispressed.space = false;
    }
    if (e.keyCode == "13") {
      ispressed.enter = false;
    }
}, false);
