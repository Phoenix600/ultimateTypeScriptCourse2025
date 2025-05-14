// Passing JSON Object to the Function

function printStudentDetails(studentData:any)
{
  console.log('FirstName : ' + studentData.firstName);
  console.log('LastName : ' + studentData.lastName);
  console.log('Email : ' + studentData.email);
  console.log('Marks  : ' + studentData.marks);
}

let student = {
  firstName: "John",
  lastName: "Doe",
  email: "john@doe.com",
  marks: [90,60,80]
}

console.log(student);
printStudentDetails(student);