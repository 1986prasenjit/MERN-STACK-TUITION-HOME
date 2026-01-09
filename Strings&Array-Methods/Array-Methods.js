//Array Methods in JavaScript

// 1. push() - Adds one or more elements to the end of an array and returns the new length of the array.
let fruits = ['apple', 'banana'];
fruits.push('orange'); // ['apple', 'banana', 'orange']

// 2. pop() - Removes the last element from an array and returns that element.
let lastFruit = fruits.pop(); // 'orange', fruits is now ['apple', 'banana']

// 3. shift() - Removes the first element from an array and returns that element.
let firstFruit = fruits.shift(); // 'apple', fruits is now ['banana']

// 4. unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.
fruits.unshift('kiwi'); // ['kiwi', 'banana']

// 5. splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
fruits.splice(1, 0, 'mango'); // ['kiwi', 'banana', 'mango', 'banana']


// 6. slice() - Returns a shallow copy of a portion of an array into a new array object.
let citrus = fruits.slice(0, 2); // 


// 7. indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
let index = fruits.indexOf('banana'); // 1

// 8. join() - Joins all elements of an array into a string and returns this string.
let fruitString = fruits.join(', '); // 'kiwi, banana, mango, banana'