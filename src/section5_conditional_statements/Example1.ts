/****************************************************************************************
 * 🧠 Problem 1: Check if a Number is Positive, Negative, or Zero
 *
 * 🎯 Objective:
 *   Create a TypeScript program that takes an integer and determines whether the number
 *   is:
 *     - Positive
 *     - Negative
 *     - Zero
 *
 * 🧪 Example Input:
 *     num = -5
 *
 * ✅ Example Output:
 *     The number is negative.
 *
 * 🧵 Concepts Covered:
 *   - if statement
 *   - else if statement
 *   - else statement
 ****************************************************************************************/
const num1: number = -5;

console.log("Problem 1: Check if Number is Positive, Negative, or Zero");
if (num1 > 0) {
    console.log("The number is positive.");
} else if (num1 < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}
