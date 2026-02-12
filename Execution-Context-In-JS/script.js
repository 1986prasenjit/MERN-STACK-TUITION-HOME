/*Execution context 

 What is Execution Context in JavaScript?
 Execution context is the environment in which a piece of JavaScript code is executed. It determines the scope and accessibility of variables and functions, and controls the execution of the code.

 How does Execution Context work?
 Execution context is created when a JavaScript code is executed. It determines the scope and accessibility of variables and functions, and controls the execution of the code.

 Types of Execution Context in JS
 1. Global Execution Context
 2. Function Execution Context

*/

var a = 10;
function myFunction() {
  var b = 20;
  console.log(a);
  console.log(b);
}
myFunction();

console.log(a);
//console.log(b);

// Code for Execution Context

var x = 10;

function outer() {
  var y = 20;

  function inner() {
    var z = 30;
    console.log(x + y + z);
  }

  inner();
}

outer();
