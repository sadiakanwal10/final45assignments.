// BY FOR EACH METHOD //
// define an array of guest list //
let guestList:string[]=["fiza waseem","maira saleem","ayesha kanwal"];

// invite each guests for dinner //
guestList.forEach(guest => {
console.log (`Dear ${guest}, you are cordially invited for dinner`)  
});

// BY MAP METHOD //
// invite each guest for dinner//
let invitation:string[]=guestList.map(guests => `Dear ${guests}, you are invited for dinner`);
console.log(invitation);       // ek new array mai lit print krdega //

// then if we use for each method in map //
invitation.forEach(invitations => {
    console.log(invitations)
    
}); // one by one element ko print krega array mai nahi krega //










