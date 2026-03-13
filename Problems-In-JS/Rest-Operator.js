//!Write a function that takes any number of arguments and returns their sum.

function totalSum(...agrs){
     return agrs.reduce((a,b) => a + b);
}

console.log(totalSum(1,2,3,4,5));