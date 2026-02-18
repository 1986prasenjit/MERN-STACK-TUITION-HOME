/* Print a pattern of stars (e.g., right triangle) using nested loops.

                    *
                   * *
                  * * *
                 * * * * 
                * * * * * 

*/

//Nest Loop 1st loop will be for row and innner loop will be for column

for (let row = 1; row <= 5; row++) {
  for (let spaces = 1; spaces <= 5 - row; spaces++) {
    process.stdout.write(" ");
  }
  for (let col = 1; col <= row; col++) {
    process.stdout.write("* ");
  }
  console.log();
}

/*
let's walk through a dry run of the star pattern code you provided!

The code uses nested for loops to print an inverted right triangle pattern of stars. The outer loop iterates through each row, and the inner loops handle the spaces and asterisks for each row.

Here's how it unfolds:

Outer Loop (row = 1):

The first for loop will start the row from 1.
spaces loop: iterates 5 - 1 = 4 times, printing 4 spaces.
col loop: iterates 1 time, printing "* ".
console.log(): Moves the cursor to the next line.
Output:
plaintext
    *
Outer Loop (row = 2):

spaces loop: iterates 5 - 2 = 3 times, printing 3 spaces.
col loop: iterates 2 times, printing "* " twice.
console.log(): Moves the cursor to the next line.
Output:
plaintext
   * *
Outer Loop (row = 3):

spaces loop: iterates 5 - 3 = 2 times, printing 2 spaces.
col loop: iterates 3 times, printing "* " three times.
console.log(): Moves the cursor to the next line.
Output:
plaintext
  * * *
Outer Loop (row = 4):

spaces loop: iterates 5 - 4 = 1 time, printing 1 space.
col loop: iterates 4 times, printing "* " four times.
console.log(): Moves the cursor to the next line.
Output:
plaintext
 * * * *
Outer Loop (row = 5):

spaces loop: iterates 5 - 5 = 0 times, printing no spaces.
col loop: iterates 5 times, printing "* " five times.
console.log(): Moves the cursor to the next line.
Output:
plaintext
* * * * *
Therefore, the complete output of the code will be:

plaintext
    *
   * *
  * * *
 * * * *
* * * * *

*/
