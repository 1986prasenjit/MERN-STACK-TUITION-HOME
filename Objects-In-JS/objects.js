//!What is an Object in JavaScript?
//* An object in JavaScript is a collection of key-value pairs, where each key (also known as a property) is a string (or symbol) and the value can be any data type, including other objects, functions, or primitive values. Objects are used to store and organize data in a structured way.

//!Creating an Object
//! Using Object Literal Syntax
const person = {
  name: "Anwesha",
  age: 26,
  isEmployed: true,
  city: {
    name: "Kolkata",
    country: "India",
  },
  greet: function () {
    return "Hello, my name is " + this.name;
  },
};

//console.log(person["name"]); //! Accessing property using bracket notation
//console.log("This Output is coming from line number-19", person.greet());

//! Using the Object Constructor
const car = new Object();
//console.log(car)
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;
car.getDetails = function () {
  return this.year + " " + this.make + " " + this.model;
};
//console.log("This Output is coming from line number-30", car.getDetails());

//!Modifying Object Properties
person.age = 27; // Updating existing property

//!Please tell me what is reason behind when we declare an Object with CONST after that also we can modify its properties?

//* When you declare an object with const, you fix the reference[address] to that object, not its contents. A simple definition: In JavaScript const means the variable always points to the same object. You can change the object’s properties because the object itself isn’t locked, only the reference to it is.

//!OBJECTS METHODS

//! 1. Object.keys()
const keys = Object.keys(person);
//console.log(keys); // Output: [ 'name', 'age', 'isEmployed', 'city', 'greet' ]

//! 2. Object.values()
const values = Object.values(person);
//console.log(values); // Output: [ 'Anwesha', 27, true, { name: 'Kolkata', country: 'India' }, [Function: greet] ]

//! 3. Object.entries()
const entries = Object.entries(person);
//console.log(entries);

//! 4. Object.assign()
const objOne = { a: 1, b: 2 };
const objTwo = { c: 3, d: 4 };
const mergedObj = Object.assign({}, objOne, objTwo);
//console.log(mergedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }

//! 5. Object.freeze()
const frozenObj = Object.freeze({ x: 10, y: 20 });
frozenObj.x = 15; // This will not change the value
//console.log(frozenObj.x); // Output: 10

//! 6. Object.seal()
const sealedObj = Object.seal({ p: 5, q: 10 });
sealedObj.p = 15; // This will change the value
sealedObj.r = 20; // This will not add a new property
//console.log(sealedObj); // Output: { p: 15, q: 10 }

//! 7. Object.hasOwnProperty()
const hasName = person.hasOwnProperty("name");
const hasSalary = person.hasOwnProperty("salary"); // Output: false
console.log(hasName); // Output: true
console.log(hasSalary); // Output: false

//! 8. Object.getOwnPropertyNames()
const propertyNames = Object.getOwnPropertyNames(person);
//console.log(propertyNames); // Output: [ 'name', 'age', 'isEmployed', 'city', 'greet' ]

//what is difference between Object.keys() and Object.getOwnPropertyNames()?
//* Object.keys() returns an array of a given object's own enumerable property names, while Object.getOwnPropertyNames() returns an array of all own property names (enumerable or not) of an object.
