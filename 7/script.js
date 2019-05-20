// When the page loads, a popup has to be displayed with the following question: “Do you know a bit already about Javascript” When clicking on “yes” the popup close itself and the message “:)” has to be displayed in the console of the browser.

window.onload = function(){
  if (confirm("Do you know a bit already about Javascript?")) {
    console.log(":)");
  } else {
    console.log("badbad");
  }
}
