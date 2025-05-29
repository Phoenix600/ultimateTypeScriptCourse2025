// Type Script Getters And Setters
/**
 * TypeScript getters and setters are special methods that provide controlled access to object properties:
 *
 * Getters allow us to read private properties like regular fields.
 * Setters let us add custom logic when assigning values to fields.
 *
 *
 * Types of Object Properties
 * In TypeScript, object properties can be accessed in two ways:
 *
 * Data Properties: They hold values directly.
 * Accessor Properties: They are the get() and set() methods we use to access or modify values.
 *
 * Data Property
 * A TypeScript data property is a key-value pair within an object that holds a value directly. It can store any type of data, such as strings, numbers, objects, or functions.
 *
 * For example,
 *
 * class Student {
 *
 *   // Data property
 *   private _firstName: string = "Monica";
 * }
 *
 */


class Student
{
	// Data Part
	private _firstName:string = "Monica";

	// Getter Method
	get getName():string
	{
		return this._firstName;
	}

	// Setter Method
	set setName(firstName:string){
		this._firstName = firstName;
	}

}

// Driver Code
let studentMonica:Student = new Student();
console.log(studentMonica.getName);

studentMonica.setName = "Monika";
console.log(studentMonica.getName);