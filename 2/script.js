// You have to make the character to run by displaying the images runner1, runner2, runner3 and runner4 with a speed of 60ms.

let i=0;
let timer;

function startRun(){
timer = setInterval(function(){
  if (i < 4){
    i++;
    console.log(i);
  } else {
    i = 1;
  }
document.getElementById("animation").style.backgroundImage = 'url(runner/runner' + i +'.png)';
// document.getElementById("animation").setAttribute('src', 'runner/' + 'runner' + [i] + ' .png');
}, 60);

}

function stopRun() {
  clearInterval(timer);
}
