"use strict";
// storing a person name in a variable //
let personName = "Sadia kanwal";
// printing a person name in lowercase //
console.log("Lowercase:", personName.toLowerCase());
// printing a person name in uppecase //
console.log("Uppercase:", personName.toUpperCase());
// printing a person name in titlecase //
let words = personName.split(" ");
let titlecaseName = "";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log(titlecaseName);
