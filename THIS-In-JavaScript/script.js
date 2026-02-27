//! THIS keyword in JavaScript
/*
    The this keyword in JavaScript refers to the object that is currently executing the current function. It is used to access and modify properties and methods of the current object. 

    The value of this in JavaScript depends on how the function is called and where it is defined. 
*/

const person = {
  name: "Anwesha",
  age: 26,
  isEmployed: true,
  company: "Desun Technology",
  city: {
    name: "Kolkata",
    country: "India",
  },
  greet: function () {
    console.log(
      `Hello, my name is ${this.name}. I am ${this.age} years old.Yes I work in ${this.company}. I live in ${this.city.name}, ${this.city.country}.`
    );
  },
};

//person.greet();

class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}

const personOne = new Person("Anwesha", 25, "Kolkata");
const personTwo = new Person("Diya", 20, "Kolkata Dum Dum");

// console.log(personOne);
// console.log(personTwo);


//THIS keyword  Examples for different scenarios

//Arrow Function
const sayName = () => {
  console.log(this);
};
sayName();

//Constructor Function
function PersonCall(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
}

const personfour = new PersonCall("Shreya", 20, "Kolkata");
const personfive = new PersonCall("Prasenjit", 38, "Kolkata Dum Dum");

console.log(personfour);
console.log(personfive);

/*
Adding Methods to Constructor Function
To add methods to a constructor function, we use the prototype property:
*/

PersonCall.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}. I am ${this.age} years old.`);
};

console.log(personfour.greet());



