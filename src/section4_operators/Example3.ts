// A monolithic program to demonstrate logical operators with integers

const a: number = 4;
const b: number = -3;

console.log("Number A:", a);
console.log("Number B:", b);

// Logical AND (&&)
if (a > 0 && b > 0) {
    console.log("Both A and B are positive.");
} else {
    console.log("Both A and B are NOT positive.");
}

// Logical OR (||)
if (a > 0 || b > 0) {
    console.log("At least one number is positive.");
} else {
    console.log("Neither number is positive.");
}

// Logical NOT (!)
if (!(a > 0)) {
    console.log("A is NOT positive.");
} else {
    console.log("A is positive.");
}

if (!(b > 0)) {
    console.log("B is NOT positive.");
} else {
    console.log("B is positive.");
}

// Combined logical expression
if ((a % 2 === 0 || b % 2 === 0) && (a !== 0 && b !== 0)) {
    console.log("At least one number is even and both are non-zero.");
} else {
    console.log("Condition failed: either both are zero or none is even.");
}

// Edge case
if (a === 0 || b === 0) {
    console.log("At least one number is zero.");
} else {
    console.log("Neither number is zero.");
}
