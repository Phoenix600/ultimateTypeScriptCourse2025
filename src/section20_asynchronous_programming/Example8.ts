// ✅ A function is a reusable block of code that performs a task when invoked
function greet(firstName: string): void {
	console.log("👋 Hello " + firstName);
}

// 🧪 Calling the greet function with a string literal
greet("Peter");

// @ts-ignore 👈 Ignores TypeScript warning if needed
let username = "Pranay";
greet(username);

/**
 * 🔁 In JavaScript/TypeScript, you can also pass a function as an argument to another function.
 * 💡 This passed function is called a **callback function**.
 */

function greet2(firstName: string, callback: Function): void {
	console.log("👋 Hello " + firstName);

	// 🧠 Execute the callback function after greeting
	callback();
}

// 🔄 This is a callback function to be passed
function callMe() {
	console.log("📞 I am the callback function");
}

// 🚀 Calling greet2 with a name and a callback function
greet2("Peter", callMe);

/**
 * ✅ Explanation:
 * - greet2() is called with two arguments: a name (string) and a function.
 * - callMe() is passed as a **callback** and gets executed inside greet2().
 * - Useful for async operations like fetching data, event handling, etc.
 */