// retrieving the sub-categories on the main-category.html page //
const mainCategoryContainer = document.querySelector(
  ".main-category-container"
);
const categoryTitle = document.querySelector(".category-title");
import { categoriesUrl } from "./sitewide/urls.js";

// api call for retrieving all categories
async function getSubCategoriesCategoryPage() {
  try {
    const response = await fetch(categoriesUrl);
    const categories = await response.json();

    mainCategoryContainer.innerHTML = "";
    createCategoryCards(categories);
  } catch (error) {
    console.log(error);
  }
}

getSubCategoriesCategoryPage();

// function for creating the category cards
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
      mainCategoryContainer.innerHTML += `<li class="category-card nobullets box-shadow"><a href="sub-category.html?id=${category.id}"><div class="category-img"></div><div class="category-name">${category.name}</div><div class="overlay category-overlay"></div></a></li>`;
    }
  });
  // run function to add images to the category cards, also depending on which page you are on
  if (/id=3/.test(window.location.href)) {
    // add page heading and document title
    categoryTitle.innerHTML = "Norway";
    document.title = `Norway | Trønder på Tur`;
    addCategoryImageNorway(categories);
  }
  if (/id=4/.test(window.location.href)) {
    // add page heading and document title
    categoryTitle.innerHTML = "Abroad";
    document.title = `Abroad | Trønder på Tur`;

    addCategoryImageAbroad(categories);
  }
}

// function for adding the images to correct category (Norway)
function addCategoryImageNorway(categories) {
  let categoryImage = document.querySelectorAll(".category-img");
  categories.forEach(function (category) {
    // category image -- Chronicles of Tyttebæra
    if (category.id === 10) {
      categoryImage[0].style.backgroundImage =
        "url('https://feulur.com/tronderpatur/wp-content/uploads/2022/11/hero-image.jpg')";
    }

    // category image -- Northern Norway
    if (category.id === 5) {
      categoryImage[1].style.backgroundImage =
        "url('https://feulur.com/tronderpatur/wp-content/uploads/2022/11/hero.jpg')";
    }
    // category image -- Trøndelag
    if (category.id === 6) {
      categoryImage[2].style.backgroundImage =
        "url('https://feulur.com/tronderpatur/wp-content/uploads/2022/11/post_featured_norway_hesteslipp.jpg')";
    }
    // category image -- Western Norway
    if (category.id === 7) {
      categoryImage[3].style.backgroundImage =
        "url('https://feulur.com/tronderpatur/wp-content/uploads/2020/06/2020_vestlandet_week-1_2.jpg')";
    }
  });
}

// function for adding the images to correct category (Norway)
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
