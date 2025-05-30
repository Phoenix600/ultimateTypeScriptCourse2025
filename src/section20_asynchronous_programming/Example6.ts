let count = 0;

function increaseCount()
{
	count++;
	console.log("Count : " + count);
}

let processId:number = setInterval(increaseCount,500);
setTimeout(()=>{clearInterval(processId);},4000)
console.log("SetTimeout is Stopped : ");