// retrieving the sub-categories on the main-category.html page //
const mainCategoryContainer = document.querySelector(
  ".main-category-container"
);
const categoryTitle = document.querySelector(".category-title");
const mediaUrl = "https://feulur.com/tronderpatur/wp-json/wp/v2/media/";
import { categoriesUrl } from "./sitewide/urls.js";

async function getSubCategoriesCategoryPage() {
  try {
    const response = await fetch(categoriesUrl);
    const categories = await response.json();

    mainCategoryContainer.innerHTML = "";
    console.log(categories);
    createCategoryCards(categories);
  } catch (error) {
    console.log(error);
  }
}

getSubCategoriesCategoryPage();

function createCategoryCards(categories) {
  categories.forEach(function (category) {
    // find out which main category you are on (/id=3/) and the sub-categories inside the main category (Norway - parent category 3, Abroad - parent category 4)
    if (/id=3/.test(window.location.href) && category.parent === 3) {
      createCategoryCardsHtml();
    }

    if (/id=4/.test(window.location.href) && category.parent === 4) {
      createCategoryCardsHtml();
    }
    // function for creating the html
    function createCategoryCardsHtml() {
      mainCategoryContainer.innerHTML += `<li class="category-card nobullets box-shadow"><a href="sub-category.html?id=${category.id}"><div class="category-img"></div><div class="category-name">${category.name}</div></a></li>`;
    }
  });
  // run function to add images to the category cards, also depending on which page you are on
  if (/id=3/.test(window.location.href)) {
    categoryTitle.innerHTML = "Norway";
    addCategoryImageNorway(categories);
  }
  if (/id=4/.test(window.location.href)) {
    categoryTitle.innerHTML = "Abroad";
    addCategoryImageAbroad(categories);
  }
}

function addCategoryImageNorway(categories) {
  let categoryImage = document.querySelectorAll(".category-img");
  categories.forEach(function (category) {
    // category image -- Chronicles of Tyttebæra
    if (category.id === 10) {
      categoryImage[0].style.backgroundImage =
        "url('https://feulur.com/tronderpatur/wp-content/uploads/2022/11/hero-image.jpg')";
    }
    // category image -- Eastern Norway
    if (category.id === 8) {
      categoryImage[1].style.backgroundImage =
        "url('https://feulur.com/tronderpatur/wp-content/uploads/2022/11/post_featured_norway_hesteslipp.jpg')";
    }
    // category image -- Northern Norway
    if (category.id === 5) {
      categoryImage[2].style.backgroundImage =
        "url('https://feulur.com/tronderpatur/wp-content/uploads/2022/11/hero.jpg')";
    }
    // category image -- Trøndelag
    if (category.id === 6) {
      categoryImage[4].style.backgroundImage =
        "url('https://feulur.com/tronderpatur/wp-content/uploads/2022/11/hero.jpg')";
    }
  });
}

function addCategoryImageAbroad(categories) {
  let categoryImage = document.querySelectorAll(".category-img");
  categories.forEach(function (category) {
    // category image -- Denmark
    if (category.id === 13) {
      categoryImage[0].style.backgroundImage =
        "url('https://feulur.com/tronderpatur/wp-content/uploads/2022/11/post-copenhagen-1.jpg')";
    }
    // category image -- England
    if (category.id === 12) {
      categoryImage[1].style.backgroundImage =
        "url('https://feulur.com/tronderpatur/wp-content/uploads/2022/11/post_featured_london.jpg')";
    }
    // category image -- Australia
    if (category.id === 11) {
      categoryImage[2].style.backgroundImage =
        "url('https://feulur.com/tronderpatur/wp-content/uploads/2022/11/post_featured_australia_oriellyes.jpg')";
    }
  });
}
