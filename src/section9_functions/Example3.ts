function getFactorial(num:number):number {
  let fact:number = 1;

  for (let i=1; i<= num; i++){
    fact = fact*i;
  }

  return fact;
}

let factorialResult:number = getFactorial(5);
console.log(factorialResult);