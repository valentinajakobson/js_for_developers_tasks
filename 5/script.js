//When you hit “Enter” on your keyboard, the message “Bravo” has to be displayed in an alert box. If you press some other keys „Try again“ will be displayed on the console.

window.addEventListener("keydown", event => {
  if (event.keyCode === 13) { //key code for Enrer, for all brousers
    alert("BRAVO");
  } else {
    alert("Try again");
  }
});
