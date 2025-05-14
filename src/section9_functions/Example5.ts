// Function can multiple values as well

function getSomeValue(data:any):string | number
{
    if(data == "Feel My Code")
    {
      return "Aarya";
    }


  return 1212;
}


let someResult: string | number = getSomeValue("Feel My Code");
console.log(someResult);