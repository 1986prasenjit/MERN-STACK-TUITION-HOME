//!What is Hoisting in JavaScript?
//* Hoisting is a JavaScript mechanism where variables and functions are moved to the top of their scope before code execution. It allows variables and functions to be accessed and used even before they are declared.

//! Does let and Const are Hoisted?
//* Yes, let and const are also hoisted in JavaScript. They are moved to the top of their scope before code execution. But the difference is that let and const are block-scoped, while var is function-scoped.But from the time of declaration upto the time of initialalization let and const are in Temporal Dead Zone. In that time phrase they cannot be accessed.



console.log("Hello");

var a = 10;
var b = 20;

function add(a, b){
    return a + b;
}

console.log(add(5, 6));

console.log("Bye");