const nav = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
// const menu = document.querySelector(".menu");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerIcon = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");
const menuItems = document.querySelectorAll(".menu-item");

// creating functional hamburger menu
// inspiration: https://dev.to/devggaurav/let-s-build-a-responsive-navbar-and-hamburger-menu-using-html-css-and-javascript-4gci
// remember to go over this
hamburgerMenu.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburgerMenu.classList.toggle("active");
  nav.classList.toggle("active");
}

navLink.forEach((link) => link.addEventListener("click", closeMenu));

function closeMenu() {
  hamburgerMenu.classList.remove("active");
  nav.classList.remove("active");
}
// function myFunction() {
//   let x = document.getElementById("nav");
//   if (x.className === "nav") {
//     x.className += " menu";
//   } else {
//     x.className = "nav";
//   }
// }

// hamburgerIcon.addEventListener("click", myFunction);

// // function toggleMenu() {
// //   if (menu.classList.contains("openMenu")) {
// //     menu.classList.remove("openMenu");
// //     menu.style.display = "none";
// //     closeIcon.style.display = "none";
// //     hamburgerIcon.style.display = "block";
// //   } else {
// //     menu.classList.add("openMenu");
// //     menu.style.display = "block";
// //     closeIcon.style.display = "block";
// //     hamburgerIcon.style.display = "none";
// //     menu.style.backgroundImage = "url('../../images/nav-background.jpg')";
// //   }
// // }

// // hamburgerMenu.addEventListener("click", toggleMenu);

// // // Change event to make the hamburger manu function only on smaller sizes
// // // inspiration: https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/matches
// // let mql = window.matchMedia("(max-width:767px)");
// // console.log(mql);

// // mql.addEventListener("change", (event) => {
// //   if (event.matches) {
// //     navText.style.display = "none";

// //     hamburgerMenu.addEventListener("click", toggleMenu);
// //   } else {
// //     navText.style.display = "flex";
// //     menu.style.display = "none";
// //   }
// // });

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
