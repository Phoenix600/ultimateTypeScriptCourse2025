// The setTimeout() method returns the interval id.
// program to display a text using setTimeout method
function greet() {
	console.log('Hello world');
}

let intervalId = setTimeout(greet, 3000);
console.log('Id: ' + intervalId);