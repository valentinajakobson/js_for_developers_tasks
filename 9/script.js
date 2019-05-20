// Make new object which contains: {“coucou”: “hello”, “comment”: “how”, “va”: “are”, “tu”:” you”}. Create two arrays from this object:
//
// * The 1st one : [“coucou”, “comment”, “va”, “tu”]
//
// * The 2nd one: [“hello”, “how”, “are”, “you”]
//
// You have then to display those two arrays in the console of the browser.


  let myObj = {"coucou": "hello", "comment": "how", "va": "are", "tu": "you"}


  let keysSortArr = Object.keys(myObj);
  console.log(keysSortArr);

  let valuesSortArr = Object.values(myObj);
  console.log(Object.values(valuesSortArr));
