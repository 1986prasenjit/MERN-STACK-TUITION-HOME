//!Stirngs Methods in JavaScript

let str = "Hello, World!";

//Length of a string
console.log(str.length); // Length of the string.

//Convert to Uppercase
console.log(str.toUpperCase()); // "HELLO, WORLD!"

//Convert to Lowercase
console.log(str.toLowerCase()); // "hello, world!"

//Find a substring
console.log(str.indexOf("World")); // 7; If the particular substring is not found, it returns -1

//Extract a substring
console.log(str.slice(0, 5)); // "Hello"

//Replace a substring
console.log(str.replace("World", "JavaScript")); // "Hello, JavaScript!"

//Trim whitespace from both ends of a string.
let strWithSpaces = "   Hello, World!   ";
console.log(strWithSpaces.trim()); // "Hello, World!"

//Split a string into an array of substrings
console.log(str.split(", ")); // ["Hello", "World!"]

//Check if a string includes a certain substring
console.log(str.includes("Hello")); // true

//Repeat a string multiple times
console.log(str.repeat(3)); // "Hello, World!Hello, World!Hello, World!"

//Get a character at a specific index
console.log(str.charAt(1)); // "e"

//Concatenate two strings
let str2 = " How are you?";
console.log(str.concat(str2)); // "Hello, World! How are you?"

//Check if a string starts with a certain substring
console.log(str.startsWith("Hello")); // true


//Check if a string ends with a certain substring
console.log(str.endsWith("!")); // true

//Get a substring using substring method
console.log(str.substring(0, 5)); // "Hello"

//Get a substring using substr method
console.log(str.substr(7, 5)); // "World"

//Pad the start of a string with another string
console.log(str.padStart(20, "*")); // "*******Hello, World!"

//Pad the end of a string with another string
console.log(str.padEnd(20, "*")); // "Hello, World!*******"


