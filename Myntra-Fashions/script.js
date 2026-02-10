const mobileMenuIcon = document.querySelector("#mobileMenuIcon");
const mobileMenu = document.querySelector("#mobileMenu");
const menuIcon = document.querySelector("#menuIcon");

mobileMenuIcon.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");

  if (mobileMenu.classList.contains("active")) {
    menuIcon.textContent = "close";
  } else {
    menuIcon.textContent = "menu";
  }
});
