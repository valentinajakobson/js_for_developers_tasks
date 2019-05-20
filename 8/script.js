// You have to create a function which replaces all “e” in a string by “o”. This function is executed when clicking the “Transform” button and take the typed string (text input) as an argument. The modified string has then to be displayed in the console of the browser.
 transformStr = () => {
  let str = document.getElementById("myinput").value;
  console.log(typeof str);
  let letters = str.replace(/e/g, "o").replace(/E/g, "O");
  console.log(letters);
}
