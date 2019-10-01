//string-split.js

let containerElt = document.querySelector("#container");

let userInput = prompt("Enter a sentence");

let words = userInput.split(" ");

for(w of words) {
  let newP = document.createElement("p");
  newP.innerHTML = w;
  containerElt.appendChild(newP);
}
