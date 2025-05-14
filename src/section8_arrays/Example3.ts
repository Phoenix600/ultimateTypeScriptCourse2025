// Array-Methods-3
let myArray3:Array<number> = [1,2,3,4,5,6,7,8,9,10];
console.log("Before Reversing The Array Elements : " + myArray3);

myArray3.reverse();
console.log("Reversing Array Elements : " + myArray3);

function comparator(a:number,b:number):number {
  if(a > b) return 1;
  if(a < b) return -1;
  return 0;
}

myArray3.sort(comparator)
console.log("After Sorting In ASC Order Array Elements : " + myArray3);