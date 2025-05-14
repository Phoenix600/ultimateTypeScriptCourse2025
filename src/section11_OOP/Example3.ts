
class ParentClass
{
  private _x:number;

  constructor(x:number){
    console.log("Parent class Constructor Called");
    this._x = x;
  }

  getX():number{
    return this._x;
  }

  setX(x:number){
    this._x = x;
  }

  displayParent()
  {
    console.log("Parent class Display() function");
  }

}

class ChildClass extends ParentClass
{
  private _y:number;

  constructor(x:number,y:number){
    super(x);
    console.log("Child class Constructor Called");
    this._y = y;
  }

  getY():number{
    return this._y;
  }

  setY(y:number){
    this._y = y;
  }

  displayChild()
  {
    console.log("Child class Display() function");
  }

}

let instance3:ChildClass = new ChildClass(17,12);

console.log(instance3.getX());
console.log(instance3.getY());

instance3.displayParent();
instance3.displayChild();