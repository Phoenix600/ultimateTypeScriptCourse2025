function process1()
{
	console.log("Process 1");
}

function process2()
{
	console.log("Process 2");
}

let process1Id:number = setTimeout(process1,10000);
console.log("Process-1 Id : " + process1Id);

let process2Id:number = setTimeout(process2,3000);
console.log("Process-2 Id : " + process2Id);

clearInterval(process1Id);
