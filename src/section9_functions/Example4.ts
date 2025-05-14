function countDigits(lnNumber:number):number
{
  let count:number = 0;

  while (lnNumber != 0) {
    count++;
    lnNumber = lnNumber / 10;
  }

  return count;
}

let countResult:number = countDigits(123456);
console.log(countResult);