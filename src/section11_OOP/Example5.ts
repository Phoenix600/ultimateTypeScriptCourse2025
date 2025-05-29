// Access Modifiers
/**
 * ===================================================================================
 * Access modifiers in TypeScript control the visibility and accessibility of
 * class members (properties and methods), helping to enforce encapsulation.
 * ===================================================================================
 * Types Of Access Specifiers:
 * In TypeScript, there are 3 access modifiers:
 *  1. Public
 *  2. Private
 *  3. Protected
 */

// The public modifier allows class members to be accessible from anywhere in the
// program–inside the class, outside it, or even from another file. For example,
class MyPerson
{
    private _age:number;

    // constructor
    constructor(age:number)
    {
      this._age = age;
    }

    // Getter And Setter
    get age(){
      return this._age;
    }

    set age(value:number){
      this._age = value;
    }

    public greet()
    {
      console.log(`Hello User.. Your Age Is ${age}`);
    }
}