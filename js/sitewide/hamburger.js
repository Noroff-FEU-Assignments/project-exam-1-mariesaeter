const nav = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navBlog = document.querySelector(".nav-blog");
const navLinkBlog = document.querySelector(".nav-link-blog-mobile");

// creating functional hamburger menu
// inspiration: https://dev.to/devggaurav/let-s-build-a-responsive-navbar-and-hamburger-menu-using-html-css-and-javascript-4gci
hamburgerMenu.addEventListener("click", mobileMenu);

// function for toggle active class that opens the hamburger menu
function mobileMenu() {
  hamburgerMenu.classList.toggle("active");
  nav.classList.toggle("active");
}

// closing the menu when clicking on a link
navLink.forEach((link) => link.addEventListener("click", closeMenu));

// function that removes the active class when a lin is clicked so that the hamburger menu closes.
function closeMenu() {
  hamburgerMenu.classList.remove("active");
  nav.classList.remove("active");
}

// Open the subnavigation inside the blog menu
navLinkBlog.addEventListener("click", openSubnav);

// open subnavigation by adding active classes
function openSubnav() {
  navLinkBlog.classList.toggle("active");
  subnavContainer.classList.toggle("active");
  navBlog.classList.toggle("active");
  // keep the box-shadow at the bottom
  subnavContainer.classList.toggle("box-shadow");
}

// close subnavigation and remove classes when link is clicked
function closeSubnav() {
  navLinkBlog.classList.remove("active");
  subnavContainer.classList.remove("active");
}

// create the content of the subnavigation inside blog
import { categoriesUrl } from "./urls.js";
const subnav = document.querySelector(".subnav");
const subnavContainer = document.querySelector(".subnav-container");

// api call that retrieves all categories from the Rest Api
async function getSubCategories() {
  try {
    const response = await fetch(categoriesUrl);
    const categories = await response.json();
    subnav.innerHTML = "";
    createHtmlList(categories);
  } catch (error) {
    console.log(error);
  }
}

getSubCategories();

// create html for the the main categories (Norway and Abroad)
function createHtmlList(categories) {
  categories.forEach(function (category) {
    // cetagory 1 is the undefined category in Word Press, and is chosen to not be displayed.
    if (category.parent === 0 && !(category.id === 1)) {
      subnav.innerHTML += `<ul class="subnav-parent>"><a href="main-category.html?id=${category.id}" class="nav-link">${category.name}</a></ul>`;
    }
  });

  createSubList(categories);
}

// create sublist under the main category in the navigation
function createSubList(categories) {
  categories.forEach(function (category) {
    // list if categories that has parent 4 which is Abroad
    if (category.parent === 4 && category.parent !== 3) {
      subnav.firstChild.innerHTML += `<li class="subnav-child nobullets"><a href="sub-category.html?id=${category.id}" class="nav-link">${category.name}</a></li>`;
    }
    // list if categories that has parent 3 which is Norway
    if (category.parent === 3 && category.parent !== 4) {
      subnav.firstChild.nextSibling.innerHTML += `<li class="subnav-child nobullets"><a href="sub-category.html?id=${category.id}" class="nav-link">${category.name}</a></li>`;

      console.log(category);
    }
  });
}
