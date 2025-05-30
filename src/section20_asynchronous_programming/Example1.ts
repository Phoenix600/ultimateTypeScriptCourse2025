// ⏲️ The setTimeout() method executes a block of code after a specified delay.
// 🚨 Note: It executes the code only ONCE after the delay.

/**
 * 💡 Syntax:
 * setTimeout(function, milliseconds);
 *
 * 🔸 function: The block of code to run later
 * 🔸 milliseconds: Delay time before running the function (1000 ms = 1 sec)
 * 🔸 Returns: A positive integer (timeout ID) that can be used to cancel the timeout
 */

// 🧾 Function with sequential console statements
function function1() {
	console.log("Statement-1");
	console.log("Statement-2");
	console.log("Statement-3");
}

// 🧾 Another function to be run later with setTimeout
function function2() {
	console.log("Statement-A");
	console.log("Statement-B");
	console.log("Statement-C");
}

// 🚀 Program starts here
console.log("🚀 Start Of TypeScript Program");

// 🔁 Calling function1 synchronously
function1();

// ⏳ Calling function2 after a delay of 4000ms (4 seconds)
setTimeout(function2, 4000); // Asynchronous, non-blocking

// ✅ This gets printed immediately after function1, without waiting
console.log("🏁 End Of TypeScript Program");