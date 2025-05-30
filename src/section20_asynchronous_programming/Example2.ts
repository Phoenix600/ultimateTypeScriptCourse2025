function showTime() {
	// 🕒 Create a new Date object to get the current date and time
	let dateTime = new Date();

	// 🏠 Get the local time as a human-readable string (e.g., "12:34:56 PM")
	let time = dateTime.toLocaleTimeString();

	// 🖨️ Print the current time to the console
	console.log("⏰ Current Time:", time);

	// 🔁 Call showTime again after 3 seconds (3000 milliseconds)
	// This creates a repeating effect like a digital clock!
	setTimeout(showTime, 3000);
}

// 🚀 Start the time display
showTime();