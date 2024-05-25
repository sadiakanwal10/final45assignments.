// storing a person name in a variable //

let personName:string = "Sadia kanwal";

// printing a person name in lowercase //

console.log("Lowercase:" ,personName.toLowerCase());

// printing a person name in uppecase //
 
console.log("Uppercase:", personName.toUpperCase());

// printing a person name in titlecase //

let words:string[]= personName.split (" ");
let titlecaseName:string = ""
for (let i = 0; i < words.length; i++) {
    titlecaseName +=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase() + " "}
    console.log(titlecaseName)
    
    
