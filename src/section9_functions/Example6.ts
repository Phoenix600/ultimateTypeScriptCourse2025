// Getting Started With Arrow Functions

// Create The Arrow Function
let arrowSayHello = ()=>{
  console.log("Hello Im A Arrow Function In TS");
}

arrowSayHello();


// Another Example Of Arrow Function
let arrowAddTwoNumbers = (a:number, b:number):number => {
  console.log("Addition Function Called...");
  return a + b;
};
console.log(arrowAddTwoNumbers(12,13));