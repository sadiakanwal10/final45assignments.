"use strict";
// make an array of guestlist //
let guestList = ["fiza waseem", "maira saleem", "ayesha kanwal"];
// print the name who can't invite for dinner //
let unableToAttend = guestList.splice(1, 1)[0];
console.log(`${unableToAttend} not invited for dinner`);
// add new name in an array //
guestList.push("komal nadeem");
console.log(guestList);
// print a message to each guest //
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited`);
});
