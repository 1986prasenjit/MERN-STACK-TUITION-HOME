console.log("Connected");

/*
!JavaScript Data Types are divided into two parts

1. Primitive Data Type.
Again Primitive Data Type are divided into 7 types:-
i) string. ii)number. iii)boolean. iv) null. v) undefined. vi) bigInt. vii)symbol

2. Non-Primitive Data Types[Reference Data Type]
Again Non-Primitive Data Types are divided into 3 types:-
i)Object. ii)Array. iii)Functions.

*/

//string
let name = "Ram";
//console.log(typeof name);

//number
let age = 26;
//console.log(typeof age);

//boolean
let isLoggedIn = true;
//console.log(typeof isLoggedIn);

//null
let userAge = null;
//console.log(typeof userAge);

//undefined
let userName = undefined;
//console.log(typeof userName);

//object
let obj = {
  name: "Anwesha",
  age: 25,
  isLoggedIn: true,
};
//console.log(typeof obj);

//array
let arr = [10, 20, 30, 40, 50]; //101, 102, 103, 104, 105.
console.log(arr.length - 1);

//function
function add() {
  console.log(5 + 6);
}
//add();
