const divContainerElem = document.getElementById("container");

const buttonElem = document.querySelector("#btn");

// buttonElem.addEventListener("click", function () {
//   divContainerElem.style.backgroundColor = "yellow";
//   buttonElem.innerText = "CHANGED";
// });

divContainerElem.addEventListener("mouseover", function () {
  divContainerElem.style.backgroundColor = "yellow";
});
divContainerElem.addEventListener("mouseout", function () {
  divContainerElem.style.backgroundColor = "blueviolet";
});
