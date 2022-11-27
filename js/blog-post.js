const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const blogPostContainer = document.querySelector(".blog-post-container");
const blogPostHeader = document.querySelector(".blog-post-header");
const blogPostTitle = document.querySelector(".blog-post-title");
const headerImg = document.querySelector(".blog-post-header-img");

const url = `https://feulur.com/tronderpatur/wp-json/wp/v2/posts/${id}?_embed`;

async function getBlogPost() {
  try {
    const response = await fetch(url);
    const blogPost = await response.json();

    console.log(blogPost);
    blogPostContainer.innerHTML = "";
    createPostHtml(blogPost);
  } catch (error) {
    console.log(error);
  }
}

getBlogPost();

function createPostHtml(blogPost) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let date = new Intl.DateTimeFormat("en-US", options).format(
    new Date(blogPost.date)
  );

  let headerHtml = `<div><h1>${blogPost.title.rendered}</h1>
    <span class="date">${date}</span>`;

  blogPostTitle.innerHTML = headerHtml;

  headerImg.style.background = `linear-gradient(rgba(18, 20, 22, 0.4), rgba(18, 20, 22, 0.4)), url(${blogPost._embedded["wp:featuredmedia"]["0"].source_url}) center center / cover no-repeat`;
  //   <div class="blog-post-header-img" >
  //     <img src="${blogPost._embedded["wp:featuredmedia"]["0"].source_url}">
  // </div></div>`;

  let html = `<div class="blog-post-header">
      
      <div class="blog-post-tags">

      </div>
      <p class="blog-post-content">${blogPost.content.rendered}</p>
  </div>`;
  // blogPostHeader.innerHTML += headerHtml;
  blogPostContainer.innerHTML += html;
}

// function addBackgroundImage(blogPost) {
//   const backgroundImg = document.querySelector("header-img");
//   backgroundImg.style.backgroundImage = `url(${blogPost._embedded["wp:featuredmedia"]["0"].source_url})`;
// }

{
  /* <img class="blog-post-header-img" src="${blogPost._embedded["wp:featuredmedia"]["0"].source_url}">
      <div class="blog-post-title">
      <h1>${blogPost.title.rendered}</h1>
      <span class="orange-line"></span>
      <span class="date">${date}</span>
      </div></div> */
}
