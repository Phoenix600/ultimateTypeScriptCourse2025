//@ts-ignore
class PersonTest
{
	// Data Part
	private _firstName:string;
	private _lastName:string;


	constructor(firstName: string, lastName: string) {
		this._firstName = firstName;
		this._lastName = lastName;
	}

	get getFirstName(): string {
		return this._firstName;
	}

	set setFirstName(value: string) {
		this._firstName = value;
	}

	get getLastName(): string {
		return this._lastName;
	}

	set setLastName(value: string) {
		this._lastName = value;
	}
}

// Driver Code
// @ts-ignore
let personTest:PersonTest = new PersonTest("Pranay","Ramteke");
console.log(personTest);
console.log("First Name : " + personTest.getFirstName);
console.log("Last Name  : " + personTest.getLastName);
