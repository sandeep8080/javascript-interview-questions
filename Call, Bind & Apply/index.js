// Call

const person = {
  name: "Sandeep Garg",
  job: "Developer",
};

const showPerson = {
  show() {
    console.log(`${this.name} job is ${this.job}`);
  },
};

console.log(showPerson.show()); // undefined job is undefined

console.log(showPerson.show.call(person)); // showPerson.show is a invoking functions
