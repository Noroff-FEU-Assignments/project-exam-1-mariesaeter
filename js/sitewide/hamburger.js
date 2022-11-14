const nav = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburgerMenu = document.querySelector(".hamburger-menu");

// creating functional hamburger menu
// inspiration: https://dev.to/devggaurav/let-s-build-a-responsive-navbar-and-hamburger-menu-using-html-css-and-javascript-4gci
// remember to go over this
hamburgerMenu.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburgerMenu.classList.toggle("active");
  nav.classList.toggle("active");
}

// closing the menu when clicking on a link
navLink.forEach((link) => link.addEventListener("click", closeMenu));

function closeMenu() {
  hamburgerMenu.classList.remove("active");
  nav.classList.remove("active");
}
