function add(a: number, b: number):number {
  return a + b;
}

function sub(a: number, b: number):number {
  return a - b;
}

function mul(a: number, b: number):number {
  return a * b;
}

function div(a: number, b: number):number {
  return a / b;
}

function mod(a: number, b: number):number {
  return a % b;
}

let nResult:number;
nResult = add(10,12);
console.log("Sum of 10 And 12 : " + nResult);

nResult = sub(10,12);
console.log("Sub of 10 And 12 : " + nResult);

nResult = mul(10,12);
console.log("Multiplication of 10 And 12 : " + nResult);

nResult = div(10,3);
console.log("Division of 10 And 12 : " + nResult);

nResult = mod(10,3);
console.log("Modulus of 10 And 12 : " + nResult);