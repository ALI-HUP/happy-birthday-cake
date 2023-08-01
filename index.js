alert("Click on the cake to count (10 seconds)")



var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 100);
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


var timeleft = 9;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Now make a wish";
    document.getElementById("bodybody").style.backgroundColor = "#e0dbd1";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " remaining";
  }
  timeleft -= 1;
}, 1000);

}

