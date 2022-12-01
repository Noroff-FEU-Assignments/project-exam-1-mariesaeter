const nav = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navBlog = document.querySelector(".nav-blog");
const navLinkBlog = document.querySelector(".nav-link-blog-mobile");

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

navLinkBlog.addEventListener("click", openSubnav);

function openSubnav() {
  navLinkBlog.classList.toggle("active");
  subnavContainer.classList.toggle("active");
  navBlog.classList.toggle("active");
  subnavContainer.classList.toggle("box-shadow");
}

// navLinkBlog.addEventListener("click", closeSubnav);

function closeSubnav() {
  navLinkBlog.classList.remove("active");
  subnavContainer.classList.remove("active");
}

const categoriesUrl =
  "https://feulur.com/tronderpatur/wp-json/wp/v2/categories";
const subnav = document.querySelector(".subnav");
const subnavContainer = document.querySelector(".subnav-container");

// const navBlog = document.querySelector(".nav-blog");

async function getSubCategories() {
  try {
    const response = await fetch(categoriesUrl);
    const categories = await response.json();
    subnav.innerHTML = "";
    console.log(categories);
    createHtmlList(categories);
  } catch (error) {
    console.log(error);
  }
}

getSubCategories();

function createHtmlList(categories) {
  // subnavContainer.innerHTML += `<li class="nobullets subnav-child"><a href="blog.html">All blog posts</a></li>`;
  categories.forEach(function (category) {
    if (category.parent === 0 && !(category.id === 1)) {
      subnav.innerHTML += `<ul class="subnav-parent>"><a href="main-category.html?id=${category.id}" class="nav-link">${category.name}</a></ul>`;
    }
  });

  createSubList(categories);
}

// create sublist in the navigation
function createSubList(categories) {
  categories.forEach(function (category) {
    if (category.parent === 4 && category.parent !== 3) {
      subnav.firstChild.innerHTML += `<li class="subnav-child nobullets"><a href="sub-category.html?id=${category.id}" class="nav-link">${category.name}</a></li>`;
    }
    if (category.parent === 3 && category.parent !== 4) {
      subnav.firstChild.nextSibling.innerHTML += `<li class="subnav-child nobullets"><a href="sub-category.html?id=${category.id}" class="nav-link">${category.name}</a></li>`;

      console.log(category);
    }
  });
}

// // function createHtml(categories) {
// //   categories.forEach(function (category) {
// //     if (category.parent === 0) {
// //       navBlog.innerHTML += `<ul class="subnav-parent"><a href=${category.link}>${category.name}</a></ul>`;
// //     }
// //     if (category.parent === 3) {
// //     }
// //   });
// // }
