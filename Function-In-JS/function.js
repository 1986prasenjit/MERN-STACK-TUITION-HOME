//! What is Function in JavaScript?
/* 
  A function in JavaScript is a block of code designed to perform a particular task.
  It is executed when "called" or "invoked". Functions can take inputs, called parameters, and can return an output.

  *function functionName(parameters) {
    *code to be executed
  *} 
  *functionName(arguments); // Calling the function
  *Functions help in organizing code, reusing code, and improving readability.
*/

//! Example of a simple function
function greet(name) {
  return `Hello, ${name}!`;
}
//console.log(greet("Anwesha")); // Output: Hello, Anwesha!

//! Function Expressions
const add = function (a, b) {
  return a + b;
};
const result = add(5, 3);
//console.log(result); // Output: 8

//! Function Declaration OR Statement
function multiply(x, y) {
  return x * y;
}

//!Annonymous Function
const divide = function (a, b) {
  return a / b;
};
//console.log(divide(10, 2)); // Output: 5

//! IIFE (Immediately Invoked Function Expression)
(function () {
  //console.log("This function runs immediately upon definition!");
})();
(function () {
  //console.log("This function runs immediately upon definition Second Function!");
})();


//! Arrow Functions (ES6)
const subtract = (a, b) => a - b;
//console.log(subtract(10, 4)); // Output: 6

//! Function with Default Parameters
function greetTheGuest(name = "Guest") {
  return `Hey, Good Morning ${name}`;
}
console.log(greetTheGuest("Anwesha")); // Output: Hey, Good Morning Anwesha


//! Function with Rest Parameters
function sumAll(a, b, ...rest) {
  console.log(a, b, rest);
} 
console.log(sumAll(1, 2, 3)); // Output: 1 2 [3]


//! Callback Function
function fetchData(callback) {
  const data = "Sample Data";
  callback(data);
}
fetchData(function (data) {
  //console.log("Received:", data);
}
); // Output: Received: Sample Data


//! What is a Callback Function?
/* 
  A callback function is a function that is passed into another function as an argument and is executed after some operation has been completed.Callbacks are commonly used for asynchronous operations, such as fetching data from a server or handling events.
*/
