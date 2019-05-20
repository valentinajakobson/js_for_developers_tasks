// When you scroll to 200px, and beyond, the popup #popup has to be displayed. If you scroll back under 200px, the popup has to be hidden.


window.onscroll = function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("popup").style.display = "block";
  } else {
    document.getElementById("popup").style.display = "none";
  }
}
