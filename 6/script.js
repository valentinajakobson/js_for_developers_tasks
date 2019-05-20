// The height of the first div #div1 always has to be equal to the width of the second div #div2.
// At window resize, you should display in the console:
// * the width of the second div #div2
// * the height of the first div #div1

window.addEventListener("resize", function () {
  let n = document.getElementById("div2").clientWidth;

  document.getElementById("div1").style.height = n + "px";

  console.log("the width of the second div:" + n + "px");
  console.log("the height of the first div:" + n + "px");

});
