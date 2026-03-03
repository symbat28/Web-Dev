
let billion = 1000000000;
//We also can use underscore _ as the separator:
let Billion = 1_000_000_000;

// we can shorten a number by appending the letter "e" to it and specifying the zeroes count:
let bIllion = 1e9; 


//
let num = 1.23456;
console.log( Math.round(num * 100) / 100 );


//
let sum = 0.1 + 0.2;
console.log( sum.toFixed(2) );

//
console.log( Number.isNaN(NaN) ); // true
console.log( Number.isNaN("str" / 2) ); // true

// Note the difference:
console.log( Number.isNaN("str") ); // false, because "str" belongs to the string type, not the number type
console.log( isNaN("str") ); // true, because isNaN converts string "str" into a number and gets NaN as a result of this conversion