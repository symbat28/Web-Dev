

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  console.log( i );
  i++;
}

// This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy. Usually, the other form is preferred: while(…) {…}.
let b = 0;
do {
  console.log( b );
  b++;
} while (b < 3);


for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  console.log(i);
}



let sum = 0;

while (true) {
  let value = 7;
  if (!value) break; // (*)
  sum += value;

}
console.log( 'Sum: ' + sum );