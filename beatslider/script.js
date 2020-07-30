       

function start() {  

    // Disable the btn to prevent exponential measure multiplication
    var disableBtn = document.getElementById("start-btn");
    disableBtn.disabled = "disabled";

    
  
    
    // alert(bps); 
    setInterval("moveBar()", 10);
    moveBar();


    
    // setInterval(createMeasure(k++), 2000);

    

  }

  function setMeasures() {
    
    if ((document.getElementById("set-selector").value) > 0) {
      var sets = document.getElementById("set-selector").value;
      var beats = document.getElementById("beat-selector").value;


      
    } else {
      var sets = 4;
      var beats = 4;
    } 

    moveMeasures();

    for (let i = 0; i < sets; i++) {
      createMeasure(sets);

        if(i == 0) {
          document.getElementById("measure_div").style.borderLeft = "2px solid black";
        }

      for (let j = 0; j < beats - 1; j++) {
        createBeat(beats);
      }
    }

  }
        

var index = 0;
function moveMeasures() {
  if (index == 0) {
    // Don't execute again
    index = 1;
    var elem = document.getElementById("progress-bar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        index = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

var jindex = 0;
function moveBar() {
  if (jindex == 0) {
    // Don't execute again

        if ((document.getElementById("set-selector").value) > 0) {
          
          // Get the values for the formula
          var sets = document.getElementById("set-selector").value;
          var beats = document.getElementById("beat-selector").value;

          // Let's get the value for the bpm as well
          var bpm = document.getElementById('bpm-btn').value;

          
        } else {
          var sets = 4;
          var beats = 4;
          var bpm = 120;
        } 

    

    // Convert to seconds
    var bps = bpm / 60;

    jindex = 1;
    var elem = document.getElementById("bar");

    // Declare width variable
    var width = 0;
    var refreshRate = 10; // Must remain low in order to preserve smoothness

    // Formula for increment
    var increment = bps/(beats*sets);

    var time = 1/bps;


    // Load the bar and play the sound
    var id = setInterval(frame, refreshRate);
    var id2 = setInterval(playSound, time*1000);

    function frame() {
      if (width >= 100) {
        clearInterval(id);
        jindex = 0;
      } else {
        width += increment;
        elem.style.width = width + "%";
      }
    }

    function playSound() {
        if(width >= 100) {
          clearInterval(id2);
          jindex = 0;
        } else {
          var audio = new Audio('beep.wav');
          audio.play();
        }
    }


  }
}


function createMeasure(sets) {  

    // Remove id from previous measure if it exists
    var myEle = document.getElementById("measure_div");
    if(myEle){
        myEle.removeAttribute("id", "measure_div");
    }

    // Create the bar
    var div = document.createElement("div");
    div.setAttribute("id", "measure_div");
    div.style.width = (100/sets) + "%";
    div.style.height = "100px";
    div.style.borderRight = "2px " + "solid " + "black";
    div.style.position = "relative";
    div.style.top = "-40px";
    div.style.display = "flex";
    // var color = "rgb(" + Math.random()*255 + ", " + Math.random()*255 + ", " + Math.random()*255 + ")";
    // div.style.background = color; 
    // div.style.float = "left";

    var progress_bar = document.getElementById("progress-bar");
    progress_bar.appendChild(div);

    // alert("hello");
}

function createBeat(beats) {  
  // Create the bar
  var div = document.createElement("div");
  div.style.width = (100/beats) + "%";
  div.style.height = "40px";
  div.style.borderRight = "2px " + "solid " + "black";
  div.style.position = "relative";
  // div.style.top = "-40px";
  // var color = "rgb(" + Math.random()*255 + ", " + Math.random()*255 + ", " + Math.random()*255 + ")";
  // div.style.background = color; 
  // div.style.float = "left";

  var progress_bar = document.getElementById("measure_div");
  progress_bar.appendChild(div);

  // alert("hello");
}



// for (let i = 0; i < 4; i++) {
//     createMeasure();
// }
