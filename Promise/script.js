const rootElem = document.getElementById("root");

const buttonElem = document.getElementById("btn");

buttonElem.addEventListener("click", function () {
  async function fetchData(url) {
    return fetch(url).then((response) => response.json());
  }

  fetchData("https://dummyjson.com/")
    .then((data) => {
      const ul = document.createElement("ul");

      data.quotes.splice(0, 5).forEach((item) => {
        const li = document.createElement("li");

        li.innerHTML = `
          <div class="quote">"${item.quote}"</div>
          <div class="author">- ${item.author}</div>
        `;

        ul.appendChild(li);
      });

      rootElem.appendChild(ul);
    })
    .catch((err) => {
      console.error("Failed to fetch the API", err);
      rootElem.innerText = "Something went wrong while loading data.";
      rootElem.style.color = "red";
      rootElem.style.fontWeight = "800";
      rootElem.style.fontSize = "25px";
    })
    .finally(() => {
      console.log("Bye");
    });
});
