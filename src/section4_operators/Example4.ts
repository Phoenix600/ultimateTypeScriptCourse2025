// Demonstrating the typeof operator in TypeScript
// typeof returns a string indicating the type of the operand

// Variables of different types
const numberVar: number = 42;
const stringVar: string = "Hello";
const booleanVar: boolean = true;
const arrayVar: number[] = [1, 2, 3];
const objectVar: object = {name: "John"};

// Using typeof with variables
console.log("Type of numberVar:", typeof numberVar);    // 'number'
console.log("Type of stringVar:", typeof stringVar);    // 'string'
console.log("Type of booleanVar:", typeof booleanVar);  // 'boolean'
console.log("Type of arrayVar:", typeof arrayVar);      // 'object'
console.log("Type of objectVar:", typeof objectVar);    // 'object'

// Using typeof with direct values
console.log("Type of 100:", typeof 100);               // 'number'
console.log("Type of 'TypeScript':", typeof "TypeScript"); // 'string'
console.log("Type of true:", typeof true);             // 'boolean'
console.log("Type of null:", typeof null);             // 'object'
console.log("Type of undefined:", typeof undefined);    // 'undefined'