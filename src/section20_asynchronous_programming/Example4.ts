function greet2()
{
	console.log("Hello world");
}

// If you need to execute a function multiple times, it's better to use the setInterval() method.
let id:number =  setInterval(greet2,2000);
console.log("Id : " + id);