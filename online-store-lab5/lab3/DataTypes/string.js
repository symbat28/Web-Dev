let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;

//
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // a list of guests, multiple lines



//
let str = `Hello`;

// the first character
console.log( str[0] ); // H
console.log( str.at(0) ); // H

// the last character
console.log( str[str.length - 1] ); // o
console.log( str.at(-1) );


//
let Str = 'Hi';
str = 'h' + str[1]; // replace the string
console.log( Str ); // hi


//
function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}


//We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.
// Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.
function extractCurrencyValue(str) {
  return +str.slice(1);
}