const navText = document.querySelector(".nav-text");
const menu = document.querySelector(".menu");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerIcon = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");
const menuItems = document.querySelectorAll(".menu-item");

function toggleMenu() {
  if (menu.classList.contains("openMenu")) {
    menu.classList.remove("openMenu");
    menu.style.display = "none";
    closeIcon.style.display = "none";
    hamburgerIcon.style.display = "block";
  } else {
    menu.classList.add("openMenu");
    menu.style.display = "block";
    closeIcon.style.display = "block";
    hamburgerIcon.style.display = "none";
    menu.style.backgroundImage = "url('../../images/nav-background.jpg')";
  }
}

hamburgerMenu.addEventListener("click", toggleMenu);

// Change event to make the hamburger manu function only on smaller sizes
// inspiration: https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/matches
let mql = window.matchMedia("(max-width:767px)");
console.log(mql);

mql.addEventListener("change", (event) => {
  if (event.matches) {
    navText.style.display = "none";

    hamburgerMenu.addEventListener("click", toggleMenu);
  } else {
    navText.style.display = "flex";
    menu.style.display = "none";
  }
});

// menuItems.forEach(function (menuItem) {
//   menuItem.addEventListener("click", toggleMenu);
// });

// // tried to do it with only 1 navigation but failed

// const nav = document.querySelector(".navigation");

// function toggleMenu() {
//   if (nav.classList.contains("openMenu")) {
//     nav.classList.remove("openMenu");
//     nav.style.display = "none";
//     closeIcon.style.display = "none";
//     hamburgerIcon.style.display = "block";
//   } else {
//     nav.classList.add("openMenu");
//     nav.classList.add("menu");
//     nav.classList.remove("nav-text");
//     nav.style.display = "block";
//     closeIcon.style.display = "block";
//     hamburgerIcon.style.display = "none";
//     nav.style.backgroundImage = "url('../../images/nav-background.jpg')";
//   }
// }

// hamburgerMenu.addEventListener("click", toggleMenu);

// // Change event to make the hamburger manu function only on smaller sizes
// // inspiration: https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/matches
// let mql = window.matchMedia("(max-width:767px)");
// console.log(mql);
// mql.addEventListener("change", (event) => {
//   if (event.matches) {
//     nav.classList.add("menu");
//     nav.classList.remove("nav-text");
//     navText.style.display = "none";

//     hamburgerMenu.addEventListener("click", toggleMenu);
//   } else {
//     navText.style.display = "flex";
//     menu.style.display = "none";
//     nav.classList.remove("menu");
//   }
// });
