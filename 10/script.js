// You have array with transport lines ["line n°1", "bus n°24", "tramway n°3", "line n°2", "bus n°20", "tramway n°312", "line n°130", "bus n°28", "tramway n°20", "line n°101"].
// You should order the lines increasingly by their number and display the result in the console of the browser.
// Example : ["line n°1", "line n°101", "line n°130", "line n°2"]

let trasnpLines = ["line n°1", "bus n°24", "tramway n°3", "line n°2", "bus n°20", "tramway n°312", "line n°130", "bus n°28", "tramway n°20", "line n°101"];

let lines = trasnpLines.filter(function(el){
  return el.includes("line");
});
console.log(lines);

// Extra : get lines array sorted as : ["line n°1", "line n°2", "line n°101", "line n°130"]
lines.sort (function (a,b) {
return a.slice(a.indexOf("°") + 1) - b.slice(b.indexOf("°") + 1);
});
console.log(lines);
