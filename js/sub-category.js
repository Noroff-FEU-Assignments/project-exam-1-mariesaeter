// import { categoriesUrl } from "./sitewide/urls.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const blogContainer = document.querySelector(".blog-container");
const categoryTitle = document.querySelector(".category-title");

const url = `https://feulur.com/tronderpatur/wp-json/wp/v2/posts?_embed&categories=${id}`;
const urlCategory = `https://feulur.com/tronderpatur/wp-json/wp/v2/categories/${id}`;

const morePostsBtn = document.querySelector("#more-posts-btn");
const postCount = document.querySelector("#post-count");
const postTotal = document.querySelector("#post-total");

async function getAllBlogPosts() {
  try {
    const response = await fetch(url);
    const posts = await response.json();

    console.log(posts);
    postTotal.innerHTML = posts.length;
    blogContainer.innerHTML = "";
    createBlogHtml(posts);
  } catch (error) {
    console.log(error);
  }
}

getAllBlogPosts();

function createBlogHtml(posts) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  posts.forEach(function (post) {
    let date = new Intl.DateTimeFormat("en-US", options).format(
      new Date(post.date)
    );

    let html = `<div class="nobullets blog-post-card hidden-post">
      <img class="post-img" src="${post._embedded["wp:featuredmedia"]["0"].source_url}">
      <div class="post-card box-shadow">
      <div class="post-card-info">
      <span class="date">${date}</span>
      <h3>${post.title.rendered}</h3>
      <span class="orange-line"></span>
      <div class="post-excerpt">${post.excerpt.rendered}</div>
      </div>
      <a href="blog-post.html?id=${post.id}"class="cta btn-blog-post btn-main">Read more</a>
      </div>
  </div>`;

    blogContainer.innerHTML += html;
  });

  hideAndShow(posts);
}

// Show 10 posts in the beginning, add more when clicked
// inspiration: https://stackoverflow.com/questions/67827732/how-to-add-load-more-functionality-to-items-on-a-page-with-vanilla-js
function hideAndShow(posts) {
  const hidden = document.querySelectorAll(".hidden-post");
  console.log(hidden);
  const hiddenArr = Array.prototype.slice.call(hidden);
  console.log(hiddenArr);

  hiddenArr
    .splice(0, 10)
    .forEach((elem) => elem.classList.remove("hidden-post"));
  postCount.innerHTML = posts.length - hiddenArr.length;
  morePostsBtn.addEventListener("click", function (event) {
    event.preventDefault();

    hiddenArr
      .splice(0, 10)
      .forEach((elem) => elem.classList.remove("hidden-post"));
    // make button inactive
    if (hiddenArr.length === 0) {
      morePostsBtn.disabled = true;
      morePostsBtn.classList.add("inactive");
    }
    postCount.innerHTML = posts.length - hiddenArr.length;
  });
}

// add title to the page
async function getAllCategories() {
  try {
    const response = await fetch(urlCategory);
    const category = await response.json();

    console.log(category);

    categoryTitle.innerHTML += `${category.name}`;
    document.title = `${category.name} - Trønder på Tur`;
  } catch (error) {
    console.log(error);
  }
}
getAllCategories();
