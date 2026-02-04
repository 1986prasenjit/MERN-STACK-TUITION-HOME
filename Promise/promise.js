/* 
  !What is Promise?
  Promise is a JavaScript object for asynchronous operation.In simple words, it is a container for the result of an asynchronous operation.The result can be a value or an error. It is used to handle the result of an asynchronous operation in a more readable way. 
 */

// Promise er State 3 te hoy - 1. Pending 2. Fulfilled 3. Rejected
// State er value tokhon hobe - 1. undefined 2. value 3. error.

// Promise er 3 te handling method holo - 1. .then() 2. .catch() 3. finally().

console.log("Promise Start");
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Hii");
  }, 2000);
}).then((result) => {
  console.log(result);
});
console.log("Promise End");

// .then() duto argument ney first resolve result second reject  er j error hobe seta. .then() method theke amra three type er kaj korte pari 1st akta promise return korte pari 2nd value return korte pari 3rd kono rejected value return korte pari.

const promise1 = new Promise(function (resolve, reject) {
  const obj = {
    name: "ram",
    age: "12",
  };
  resolve(obj);
})
  .then((obj) => {
    console.log(obj.name);
    return new Promise(function (resolve, reject) {
      reject("Kolkata");
    });
  })
  .then((address) => {
    console.log(`My Address is ${address}`);
    throw new Error("Something is Wrong");
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Good Moring");
  });

// Promise er Static Method gulo holo - 1. Promise.all(), 2. Promise.any(), 3. Promise.allSattle(), 4. Promise.race().

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("success");
//   }, 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("fail");
//   }, 3000);
// });

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("success");
//   }, 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("fail");
//   }, 3000);
// });

//!Promise.all

// Promise.all([p1, p2])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Promise.any([p1, p2])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("success");
//   }, 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("fail");
//   }, 3000);
// });
// Promise.allSettled([p1, p2]).then((result) => {
//   console.log(result);
// });

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("success");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("fail");
  }, 3000);
});

Promise.race([p1, p2])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
