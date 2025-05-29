class MyPair<K,V>
{
	sFirst:K;
	sSecond:V;
	
	constructor(sFirst:K, sSecond:V)
	{
		this.sFirst = sFirst;
		this.sSecond = sSecond;
	}
	
}

class StudentTest
{
	firstName:string | undefined;
	lastName:string  | undefined;
}

let instance5:MyPair<string,string> = new MyPair<string, string>("Java","TypeScript");
console.log(instance5);
console.log(instance5.sFirst);
console.log(instance5.sSecond);

let instance6:MyPair<string,number> = new MyPair<string, number>("Pranay",17);
console.log(instance6);
console.log(instance6.sFirst);
console.log(instance6.sSecond);

let studentInstance:StudentTest = new StudentTest();
studentInstance.firstName = "John";
studentInstance.lastName = "Cena";

let instance7:MyPair<number, StudentTest> = new MyPair<number, StudentTest>(401,studentInstance);
console.log(instance7);
console.log(instance7.sFirst);
console.log(instance7.sSecond);