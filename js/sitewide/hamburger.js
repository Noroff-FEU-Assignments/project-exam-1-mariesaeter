const menu = document.querySelector(".menu");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerIcon = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");
const menuItems = document.querySelectorAll(".menu-item");

let mql = window.matchMedia("(min-width:767px)");

console.log(mql);

mql.addEventListener("change", (event) => {
  if (event.matches) {
    toggleMenu();
  } else {
    menu.style.display = "block";
    menu.style.backgroundImage = "none";
  }
});

// mql.addEventListener(handleMediaChange, "change");
// handleMediaChange(mql);
// let handleMediaChange = function (mediaQueryList) {
//   if (mediaQueryList.matches) {
//     toggleMenu();
//   } else {
//     menu.classList.remove("openMenu");
//     menu.style.display = "flex";
//   }
// };

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

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});
