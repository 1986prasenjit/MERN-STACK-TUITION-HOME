/* 
  !What is Promise?
  Promise is a JavaScript object for asynchronous operation.In simple words, it is a container for the result of an asynchronous operation.The result can be a value or an error. It is used to handle the result of an asynchronous operation in a more readable way. 
 */

// !Promise Syntax

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 1000);
});

promiseOne
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finallly The Promise is done");
  });

//!Write a program to fetch the data from an API using Promise

function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

fetchData("https://dummyjson.com/quotes")
  .then((result) => {
    let resultData = result.json();
    return resultData;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error("Fail to fetch the API", err);
  })
  .finally(() => {
    console.log("Bye");
  });

// const promiseTwo = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     fetch("https://dummyjson.com/products")
//       .then((response) => {
//         resolve(response);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   }, 1000);
// })
//   .then((result) => {
//     let resultData = result.json();
//     return resultData;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error("Fail to fetch the API", err);
//   })
//   .finally(() => {
//     console.log("Bye");
//   });
