// Factorial
let fact:number = 1;
let nFactorialFind:number = 5;

for (let i = 1; i <= nFactorialFind; i++)
{
    fact = fact * i;
}

console.log("The Factorial of " + nFactorialFind + " is " + fact + "")