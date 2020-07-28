       
       
       


function start() {
    // Do everything once the start btn has been clicked
    // Let's get the value for the bpm
    var bpm = document.getElementById('bpm-btn').value;
    var bps = bpm / 60;
    
    alert(bps); 
    move();
}
        

var i = 0;
function move() {
  if (i == 0) {
    // Don't execute again
    i = 1;
    var elem = document.getElementById("progress-bar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

function createMeasure() {
    var div = document.createElement("div");
    var p_bar = document.getElementById("progress-bar");
}


for (let index = 0; index < 4; index++) {
    createMeasure();
}
