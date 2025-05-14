// Arithmetic operators

// Unary operator:
//     These operators require only one operand.
let x:number = 10;
console.log(x++); // first-use then increment
console.log(x);
console.log(++x); // first increment then use

let y: number = 11;
console.log(y--); // first-use then decrement
console.log(y);
console.log(--y) // first increment then use.

let a:number = 13;
let b: number = 12;

console.log("Sum : " + (a+b));
console.log("Sub : " + (a-b));
console.log("Mul : " + (a*b));
console.log("Div : " + (a*b));
console.log("Mod : " + (a%b));