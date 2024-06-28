// make an array of guestlist //
let guestList:string[]=["mahnoor shakir","fiza nadeem","sundas burhan","ayesha kanwal","komal nadeem","javeria khan"];

//print a message //
console.log("Unfortunately!,the new bigger dinner table would not arrange so we can able to invite only 2 guests");

// remove guests from the list and print message to them //
while (guestList.length > 2) {
    let removedGuest:string | undefined = guestList.pop();
    if (removedGuest !== undefined) {
        console.log(`Sorry ${removedGuest}, you cant invite for dinner`);
        
}}

// print a message to the remaining guests that you are still invited//
guestList.forEach(guests => {
    console.log(`Dear ${guests}, you both are invited for dinner`);
})
    // remove remaining 2 guests from the list and show an empty list //
    guestList.splice(0, guestList.length);
    console.log(guestList)
    
