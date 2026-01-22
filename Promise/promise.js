const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  }, 1000);
})
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
