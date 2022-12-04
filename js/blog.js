import { urlPosts } from "./sitewide/urls.js";

const blogContainer = document.querySelector(".blog-container");
const morePostsBtn = document.querySelector("#more-posts-btn");
const postCount = document.querySelector("#post-count");
const postTotal = document.querySelector("#post-total");

// retrieve all posts
async function getAllBlogPosts() {
  try {
    const response = await fetch(urlPosts);
    const allPosts = await response.json();

    // show how many posts there are in total
    postTotal.innerHTML = allPosts.length;

    blogContainer.innerHTML = "";
    createBlogHtml(allPosts);
  } catch (error) {
    console.log(error);
  }
}

getAllBlogPosts();

// create html for wach blogpost
function createBlogHtml(allPosts) {
  // format the date correctly
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  allPosts.forEach(function (post) {
    let date = new Intl.DateTimeFormat("en-US", options).format(
      new Date(post.date)
    );

    let html = `<div class="nobullets blog-post-card hidden-post">
    <img class="post-img" src="${post._embedded["wp:featuredmedia"]["0"].source_url}" alt="${post.title.rendered}">
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
  hideAndShow(allPosts);
}

// Show 10 posts in the beginning, add more when clicked
// inspiration: https://stackoverflow.com/questions/67827732/how-to-add-load-more-functionality-to-items-on-a-page-with-vanilla-js
function hideAndShow(allPosts) {
  const hidden = document.querySelectorAll(".hidden-post");
  console.log(hidden);
  const hiddenArr = Array.prototype.slice.call(hidden);
  console.log(hiddenArr);

  hiddenArr
    .splice(0, 10)
    .forEach((elem) => elem.classList.remove("hidden-post"));
  postCount.innerHTML = allPosts.length - hiddenArr.length;
  morePostsBtn.addEventListener("click", function (event) {
    event.preventDefault();

    hiddenArr
      .splice(0, 10)
      .forEach((elem) => elem.classList.remove("hidden-post"));
    // make button inactive when the array is 0
    if (hiddenArr.length === 0) {
      morePostsBtn.disabled = true;
      morePostsBtn.classList.add("inactive");
    }
    // display the count
    postCount.innerHTML = allPosts.length - hiddenArr.length;
  });
}
