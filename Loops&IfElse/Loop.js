//!Loop In JavaScript

/*
 *Loops are used to repeat a block of code multiple times until a certain condition is met. JavaScript supports several types of loops, including for, while, and do...while loops.
 */

//* FOR Loop Syntax of FOR Loop
// for(initialalization; condition; increment/decrement) {
//     Code to be executed
// }
//*In FOR Loop initialization is done once at the beginning, condition is checked before each iteration, and increment/decrement is done after each iteration.

// Example of FOR Loop
for (let i = 1; i <= 5; i++) {
  //console.log("FOR Loop iteration: " + i);
}

//Write a FOR Loop to print even numbers from 2 to 20 --> 2,4,6,8,10,12,14,16,18,20
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    //console.log(`The Number is Even: ${i}`);
  } else {
    //console.log(`The Number is Odd: ${i}`);
  }
}

//* WHILE Loop Syntax of WHILE Loop
//initialization
// while(condition) {
//     Code to be executed
//     increment/decrement
// }

//*In WHILE Loop initialization is done before the loop, condition is checked before each iteration, and increment/decrement is done inside the loop.

// Example of WHILE Loop
let j = 1;
while (j <= 5) {
  //console.log("WHILE Loop iteration: " + j);
  j++;
}

//!WHILE Loop VS FOR Loop
//! Use FOR Loop when the number of iterations is known.
//! Use WHILE Loop when the number of iterations is not known and that the number of iterations is depends upon the condition.

function printNumbers(limit) {
  let num = 1;
  while (num <= limit) {
    console.log(num);
    num++;
  }
}
//printNumbers(10); // Prints numbers from 1 to 10

//* DO...WHILE Loop Syntax of DO...WHILE Loop
//initialization
// do {
//     Code to be executed
//     increment/decrement
// } while(condition);

//*In DO...WHILE Loop initialization is done before the loop, code inside the loop is executed at least once before checking the condition, and increment/decrement is done inside the loop.

// Example of DO...WHILE Loop
let k = 6;
do {
  //console.log("DO...WHILE Loop iteration: " + k);
  k++;
} while (k <= 5);

//console.log("Loop Break");

//! Loop Control Statements
/*
 * Loop control statements are used to alter the flow of execution within loops. JavaScript provides three main loop control statements: break, continue, and return.
 */

//* BREAK Statement
// The break statement is used to exit a loop prematurely when a certain condition is met.

for (let m = 1; m <= 10; m++) {
  if (m === 6) {
    //console.log("Breaking the loop at m = " + m);
    break; // Exit the loop when m is 6
  }
  //console.log("Current value of m: " + m);
}

//* CONTINUE Statement
// The continue statement is used to skip the current iteration of a loop and move to the next iteration.
for (let n = 1; n <= 10; n++) {
  if (n % 2 === 0) {
    continue; // Skip even numbers
  }
  //console.log("Odd number: " + n);
}

//!Write a Program defining Continue Statement in context of a Video Game
function lifeRemaining(live) {
  for (let attempt = 1; attempt <= 6; attempt++) {
    if (attempt === live) {
      console.log("No lives remaining. Game Over!");
      break;
    } else {
      console.log(
        `Attempt ${attempt}: You have ${live - attempt} lives remaining.`
      );
    }
  }
}
//lifeRemaining(6);

//* RETURN Statement

// The return statement is used to exit a function and optionally return a value. When used inside a loop within a function, it will exit both the loop and the function.

function findFirstEvenNumber(arr) {
  for (let p = 0; p < arr.length; p++) {
    if (arr[p] % 2 === 0) {
      return arr[p]; // Return the first even number found
    }
  }
  return null; // Return null if no even number is found
}
const numbersArray = [2, 3, 5, 7, 8, 9];
const firstEven = findFirstEvenNumber(numbersArray);
console.log("First even number found: " + firstEven);
