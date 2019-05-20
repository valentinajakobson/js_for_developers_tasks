// You have to animate the red circle with javascript. It has to move from left 0 to the right 300px and then stop.
function myMove() {
  let elem = document.getElementById("animation");
  let pos = 0;
  let id = setInterval(frame, 10);
  
  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }
  }
}
