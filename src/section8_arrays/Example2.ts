// Array Method-2

let myArray1 = []; // Creating Empty Array

myArray1.push(10); //  Adding Element To End Of Array
console.log(myArray1);

myArray1.push(20); // Adding Elements To End Of Array
console.log(myArray1);

myArray1.push(30); // Adding Element To End Of Array
console.log(myArray1);

let removedElement =  myArray1.pop();
console.log(removedElement);

// Adding Array Into Another Array
let myArray2 = [-10,-20,-30];
myArray1.push(myArray2);
console.log(myArray1);

removedElement = myArray2.shift();  // Removes First Element From Array
console.log(removedElement);
