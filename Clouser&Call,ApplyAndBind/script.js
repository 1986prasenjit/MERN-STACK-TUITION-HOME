//! What is a Clouser in JS?

//!A clouser is a function that has access to the parent scope, even after the parent function has closed.

function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);
  }

  return inner;
}

let myCounter = outer();

myCounter();
myCounter();
myCounter();





const person = {
    firstName: 'Sanjeev',
    lastName: 'Sharma',
    age: 22,
    getIntro: function() {
       //console.log(`${this.firstName} ${this.lastName} is ${this.age} years old.`);
    }
  }
  
  //person.getIntro(); // "Sanjeev Sharma is 22 years old."
  
  function randomFunc() {
    //console.log(this);
  }
  
  //randomFunc(); // window object


  //Call Example
  // function personIntro() {
  //   console.log(`${this.firstName} ${this.lastName}`);
  // };
  
  // const person1 = {
  //   firstName: 'Sanjeev',
  //   lastName: 'Sharma'
  // };
  
  // personIntro(); // Output 1: undefined undefined
  
  // personIntro.call(person1); // Output 2: Sanjeev Sharma
  
  // personIntro.call({ firstName : 'Harry', lastName : 'Potter' });


  //Apply Example
 
  
