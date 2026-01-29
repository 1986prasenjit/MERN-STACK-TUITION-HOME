const headerElem = document.createElement("header");
headerElem.classList.add("headerContainer");

const h1Elem = document.createElement("h1");
h1Elem.classList.add("headerTitle");
h1Elem.innerText = "My Shop";

const navElem = document.createElement("nav");
navElem.classList.add("headerNav");

const ulElem = document.createElement("ul");
ulElem.classList.add("headerList");

const navLinksItems = ["Home", "About", "Contact"];

for (let i = 0; i < navLinksItems.length; i++) {
  const liElem = document.createElement("li");
  liElem.classList.add("headerItem");

  const aElem = document.createElement("a");
  aElem.classList.add("headerLink");
  aElem.innerText = navLinksItems[i];
  aElem.href = "#";

  liElem.appendChild(aElem);
  ulElem.appendChild(liElem);
}

navElem.appendChild(ulElem);
headerElem.appendChild(h1Elem);
headerElem.appendChild(navElem);
document.body.appendChild(headerElem);
