async function fetchApiData(url) {
  return await fetch(url)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.error("Error fetching data", error));
}

export { fetchApiData };
