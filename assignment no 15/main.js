"use strict";
// define an array of guestlist //
let guestlist = ["fiza nadeem", "ayesha kanwal", "komal nadeem"];
// print a message to the guests that we found a bigger table //
console.log("Great news! we found a bigger table");
// add one guest to the beginning of an array //
guestlist.unshift("mahnoor shakir");
// add one more guest to the middle of an array //
guestlist.splice(Math.floor(guestlist.length / 2), 0, "sundas burhan");
// add one more guest at the end of an array //
guestlist.push("javeria khan");
console.log(guestlist);
// print a new set of invitation to each guests //
guestlist.forEach(guests => {
    console.log(`Dear ${guests}, you are cordially invited for dinner.`);
});
