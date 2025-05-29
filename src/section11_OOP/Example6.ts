class MyParent
{
    protected sData:string = "This MyParent String Data"
    sData1:string = "This MyParent String Data-1"

    protected myParentFoo():void
    {
      console.log("Protected Parent Foo Function");
    }
}

class MyChild extends MyParent
{
    public accessData():void
    {
      console.log("Child Class Access The Protected Members Of Parent Class : " + this.sData);
      console.log("Child Class Access The Default Members Of Parent Class : " + this.sData1);
    }

    public myChildFoo():void
    {
      console.log("MyChildFoo Function");
      console.log("Child Class Access The Member Of Parent Class : ");
      this.myParentFoo();
    }
}

// Protected Members Of Parent Class Are Not Accessible At Object Level
let instance:MyChild = new MyChild();
instance.myChildFoo()