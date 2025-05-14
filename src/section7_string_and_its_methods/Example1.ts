/****************************************************************************************
 * 📘 TypeScript String Operations - Manageable Examples for Learning
 *
 * This monolithic example demonstrates commonly used string methods in TypeScript
 * with clean structure, real examples, and detailed output to aid debugging and concept clarity.
 ****************************************************************************************/

// 1️⃣ Character Access and ASCII Code
let sData1:string = "Getting Started with Strings";

// charAt(index): Returns the character at the specified index.
let sChar1:string =  sData1.charAt(0);
console.log("Char At Position 0 : " + sChar1);

let sChar2:string =  sData1.charAt(3);
console.log("Char At Position 3 : " + sChar2);

// length: Returns the number of characters in the string.
let totalLength:number = sData1.length;
console.log("Total Length : " + totalLength);

// charCodeAt(index): Returns the UTF-16 code of the character at the specified index.
let asciiCode:number =   sData1.charCodeAt(1);
console.log("ASCII Code at position 1 : " + asciiCode);

// 2️⃣ String Concatenation
let sData2:string = "My Name Is ";
let sData3:string = "Lakkhan";

// concat(): Combines two or more strings.
let sData4:string = sData2.concat(sData3);
console.log("Joining String With *.concat() method: " + sData4);

// + operator: Also combines strings.
let sData5:string = sData2 + sData3;
console.log("Joining String With (+) Operator: " + sData5);

// 3️⃣ Case Conversion
sData1 = "ABCEFGH";
// toLowerCase(): Converts the string to lowercase.
let sData1LowerCase  = sData1.toLowerCase();
console.log("Lower Case String : " + sData1LowerCase);

sData1 = "abcdefg";
// toUpperCase(): Converts the string to uppercase.
let sData1UpperCase  = sData1.toUpperCase();
console.log("Upper Case String : " + sData1UpperCase);

// 4️⃣ Trimming Whitespaces
sData1 = "      I Still See Your Shadows In My Room       ";
console.log("UnTrimmed String : " + sData1);
// trim(): Removes leading and trailing whitespaces.
let sData1Trimmed  = sData1.trim();
console.log("Trimmed String : " + sData1Trimmed);

// 5️⃣ Searching Methods In String Class
let sData6:string = "Learning TypeScript Is Child's Play";
// indexOf(): Finds the first occurrence of a specified value.
let index:number = sData6.indexOf('e');
console.log("Index of e From Left To Right : " + index);

// lastIndexOf(): Finds the last occurrence of a specified value.
index = sData6.lastIndexOf('e');
console.log("Index of e From Right To Left : " + index);

// 6️⃣ Splitting String
let sData7:string = "Rekha Jaya Susha Sabki Pasand Nrima";
// split(' '): Splits string into an array using space as delimiter.
let sArray:string[] = sData7.split(' ');
console.log("Splitting String : " + sArray);

let sData8:string = "Rekha#Jaya#Susha#Sabki#Pasand#Nrima";
// split('#'): Splits string using '#' as a delimiter.
let sArray2:string[] = sData8.split("#");
console.log("Splitting String With #: " + sArray2);

let sData9:string = "Pranay,23,TypeScript,Ferrai Italia 458";
// split(','): Splits CSV style string.
let sArray3:string[] = sData9.split(",");
console.log("Splitting String With ,: " + sArray3);

// 7️⃣ Joining Array Elements
let names:Array<String> = ["Rajesh S","Rohan S","Gandhar P","Sumit P","Pranay R"];
// join(','): Joins array into a string separated by commas.
let sDevelopers = names.join(",");
console.log("Names Before Joining : " +  names);
console.log("Names After Joining : " + sDevelopers);

// 8️⃣ Starts With / Ends With
let sData10:string = "Code Like You Mean It";
// startsWith(): Checks if string starts with specified substring.
let isStarts = sData10.startsWith("Cod");
console.log("String Data : " + sData10);
console.log("String Starts With 'Cod' : " + isStarts);

// endsWith(): Checks if string ends with specified substring.
let isEnds = sData10.endsWith("It");
console.log("String Ends With 'Cod' : " + isEnds);

// 9️⃣ Replace Characters
let sData11:string = "Hard Work Is The Key To Success";
// replace(): Replaces first match of specified value.
let sData12:string =  sData11.replace('e','E');
console.log("String Before Replacing " + sData11);
console.log("String After Replacing 'e' With 'E' : " + sData12);

// 🔟 Substring Extraction
let sData13:string = "GOD IS A DESIGNER";
// substring(start): Extracts string from index.
console.log("Substring from index 2 : " + sData13.substring(2));

// substring(start, end): Extracts characters between specified indexes.
console.log("Substring from index 2 to 6 : " + sData13.substring(2,6));
