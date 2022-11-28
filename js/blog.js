import { urlPosts } from "./sitewide/urls.js";

const blogContainer = document.querySelector(".blog-container");
const morePostsBtn = document.querySelector("#more-posts-btn");
const postCount = document.querySelector("#post-count");
const postTotal = document.querySelector("#post-total");

// const merge = (first, second) => {
//   for (let i = 0; i < second.length; i++) {
//     first.push(second[i]);
//   }

//   return first;
// };

// retrieve all posts
async function getAllBlogPosts() {
  try {
    const response = await fetch(urlPosts);
    const allPosts = await response.json();

    postTotal.innerHTML = allPosts.length;

    console.log(allPosts);
    blogContainer.innerHTML = "";
    createBlogHtml(allPosts);
  } catch (error) {
    console.log(error);
  }
}

getAllBlogPosts();

function createBlogHtml(allPosts) {
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
    <img class="post-img" src="${post._embedded["wp:featuredmedia"]["0"].source_url}">
    <div class="post-card box-shadow">
    <span class="date">${date}</span>
    <h3>${post.title.rendered}</h3>
    <span class="orange-line"></span>
    <p class="post-excerpt">${post.excerpt.rendered}</p>
    <a href="blog-post.html?id=${post.id}"class="cta btn-featured btn-main">Read more</a>
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
    // make button inactive
    if (hiddenArr.length === 0) {
      morePostsBtn.disabled = true;
      morePostsBtn.classList.add("inactive");
    }
    postCount.innerHTML = allPosts.length - hiddenArr.length;
  });
}
