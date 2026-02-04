import { fetchApiData } from "./utils/fetchApiData.js";

const rootElem = document.getElementById("root");

const URL = "https://dummyjson.com/products";

async function fetchData(url) {
  return await fetchApiData(url);
}
fetchData(URL)
  .then((data) => {
    rootElem.innerText = JSON.stringify(data.title);
    console.log(data);
  })
  .catch((err) => console.error("Failed to fetch the API", err));
