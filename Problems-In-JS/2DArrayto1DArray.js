//! Flatten a 2D array into a 1D array using nested loops.
function flattenArray(arr) {
  let flatArray = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      flatArray.push(arr[i][j]);
    }
  }
  return flatArray;
}

let arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(flattenArray(arr));
