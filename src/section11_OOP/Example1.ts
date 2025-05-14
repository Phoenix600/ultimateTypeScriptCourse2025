class Person
{
  public sFirstName: string;
  public sMiddle: string;
  public sLastName: string;

  // @ts-ignore
  public constructor(sFirstName: string, sMiddle: string, sLastName: string)
  {
    this.sFirstName = sFirstName;
    this.sMiddle = sMiddle;
    this.sLastName = sLastName;
  }

  public toString():string
  {
    return this.sFirstName + " " + this.sMiddle + " " + this.sLastName;
  }

}

let personInstance: Person = new Person("Jessi","Rohan","Satan");
console.log(personInstance.sFirstName);
console.log(personInstance.sLastName);
console.log(personInstance.toString());

let personInstance1: Person = new Person("Darshana","Neerja","Rajendran")
console.log(personInstance1.toString());