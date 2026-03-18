// string 
let message ="hello";
message ="hello";
let phrase = `can embed another ${message}`;
console.log(phrase);

// number
let n=123;

//infinity 
console.log(1/0);

console.log( NaN + 1 ); // NaN
console.log( 3 * NaN ); // NaN
console.log( "not a number" / 2 - 1 ); // NaN

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992


//Boolean
let isGreater = 4 > 1;
console.log( isGreater ); //true

//undefind
let age;
console.log(age); // shows "undefined"

//The typeof operator
console.log(typeof undefined) // "undefined"
console.log(typeof 0 )// "number"
console.log(typeof 10n) // "bigint"
console.log(typeof true) // "boolean"
console.log(typeof "foo") // "string"
console.log(typeof Symbol("id")) // "symbol"
console.log(typeof Math) // "object"  (1)
console.log(typeof null )// "object"  (2)
console.log(typeof alert )// "function"  (3)