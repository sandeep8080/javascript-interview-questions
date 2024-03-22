const person = {
  name: "Sandeep",
  age: "29",
  gender: "Male",
};

const employmentDetails = {
  company: "Publicis Sapient",
  doj: "21/09/2021",
};

console.log(person.company); // undefined

person.__proto__ = employmentDetails;

console.log(person.company); // Publicis Sapient
