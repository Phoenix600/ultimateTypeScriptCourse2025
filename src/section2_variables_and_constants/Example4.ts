// Type Conversion

// Number to String conversion
let num: number = 42;
let strFromNum: string = num.toString();
let strFromNum2: string = String(num);
console.log("Number to String:", strFromNum, typeof strFromNum);

// String to Number conversion
let str: string = "123";
let numFromStr: number = parseInt(str);
let numFromStr2: number = Number(str);
let floatFromStr: number = parseFloat("123.45");
console.log("String to Number:", numFromStr, typeof numFromStr);
console.log("String to Float:", floatFromStr, typeof floatFromStr);

// Boolean conversion
let truthyNum: number = 1;
let boolFromNum: boolean = Boolean(truthyNum);
let strBool: string = "true";
let boolFromStr: boolean = Boolean(strBool);
console.log("Number to Boolean:", boolFromNum, typeof boolFromNum);
console.log("String to Boolean:", boolFromStr, typeof boolFromStr);

// Type assertion (Type Casting)
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
let strLength2: number = (<string>someValue).length;
console.log("String length using type assertion:", strLength);

