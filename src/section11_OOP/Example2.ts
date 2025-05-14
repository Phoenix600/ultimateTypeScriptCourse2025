// The Rectangle class demonstrates abstraction and encapsulation in TypeScript
// It hides the internal state (_length and _breadth) and exposes controlled access via getters and setters
class Rectangle {

  // Private fields to store the dimensions of the rectangle
  // These cannot be accessed directly from outside the class
  private _length: number;
  private _breadth: number;

  // Constructor method is called when a new Rectangle object is created
  // It initializes the length and breadth using the values passed to it
  constructor(length: number, breadth: number) {
    this._length = length;
    this._breadth = breadth;
  }

  getLength():number {
    return this._length;
  }

  setLength(breadth:number) {
    this._breadth = breadth;
  }

  getBreadth():number {
    return this._breadth;
  }

  setBreadth(breadth:number) {
    this._breadth = breadth;
  }

  area():number {
    return this._length * this._breadth;
  }

  perimeter():number {
    return  2* ( this._length + this._breadth );
  }

}

// Example usage (not part of class):

const rect = new Rectangle(10, 5);   // Creates a new Rectangle object
console.log(rect.getLength());           // Accesses the length using getter
console.log(rect.getBreadth());          // Accesses the breadth using getter
console.log(rect.area());

rect.setLength(20);                   // Updates the length using setter
rect.setBreadth(15);                  // Updates the breadth using setter

console.log(rect.getLength());           // Outputs updated length
console.log(rect.getBreadth());          // Outputs updated breadth

console.log(rect.area());