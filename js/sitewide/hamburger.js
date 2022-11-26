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

const categoriesUrl =
  "https://feulur.com/tronderpatur/wp-json/wp/v2/categories";
const subnav = document.querySelector(".subnav");
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
  subnav.innerHTML += `<li class="nobullets subnav-child"><a href="blog.html">All blog posts</a></li>`;
  categories.forEach(function (category) {
    if (category.parent === 0) {
      subnav.innerHTML += `<ul class="subnav-parent>"><a href="main-category.html?id=${category.id}">${category.name}</a></ul>`;
    }
  });

  createSubList(categories);
}

// create sublist in the navigation
function createSubList(categories) {
  categories.forEach(function (category) {
    if (category.parent === 4 && category.parent !== 3) {
      subnav.firstChild.nextSibling.innerHTML += `<li class="subnav-child nobullets"><a href="sub-category.html?id=${category.id}">${category.name}</a></li>`;
    }
    if (category.parent === 3 && category.parent !== 4) {
      subnav.firstChild.nextSibling.nextSibling.innerHTML += `<li class="subnav-child nobullets"><a href="sub-category.html?id=${category.id}">${category.name}</a></li>`;

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
