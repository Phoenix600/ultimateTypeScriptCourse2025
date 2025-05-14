// Passing Function As A Argument To Another Function

function sayGoodMorning():void
{
  console.log("Good Morning");
}


function sayGoodNight():void
{
  console.log("Good Night");
}

function sayHmmm():void
{
  console.log("Hmmm");
}


function ourTextsTheseDays(function1:any, function2:any, function3:any):void
{
  function1();
  function2();
  function3();
}


ourTextsTheseDays(sayGoodMorning,sayHmmm, sayGoodNight);