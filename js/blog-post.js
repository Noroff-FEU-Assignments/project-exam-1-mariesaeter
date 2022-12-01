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
    <span class="date centered-content">${date}</span>`;

  blogPostTitle.innerHTML = headerHtml;

  headerImg.style.background = `linear-gradient(rgba(18, 20, 22, 0.4), rgba(18, 20, 22, 0.4)), url(${blogPost._embedded["wp:featuredmedia"]["0"].source_url}) center center / cover no-repeat`;
  //   <div class="blog-post-header-img" >
  //     <img src="${blogPost._embedded["wp:featuredmedia"]["0"].source_url}">
  // </div></div>`;

  let html = `
      
      <div class="blog-post-tags">

      </div>
      <div class="blog-post-content">${blogPost.content.rendered}</div>
  `;
  // blogPostHeader.innerHTML += headerHtml;
  blogPostContainer.innerHTML += html;
  adjustImages();
  toggleImages();
}

function adjustImages() {
  const postImages = document.querySelectorAll(
    ".blog-post-container .wp-block-image"
  );
  if (postImages.length === 4) {
    postImages[0].classList.add("large-blog-img");
    postImages[1].classList.add("square-blog-img");
    postImages[2].classList.add("square-blog-img");
    postImages[3].classList.add("square-blog-img");
  }
  if (postImages.length === 5) {
    postImages[0].classList.add("large-blog-img");
    postImages[1].classList.add("square-blog-img");
    postImages[2].classList.add("square-blog-img");
    postImages[3].classList.add("square-blog-img");
    postImages[4].classList.add("square-blog-img");
  }
  if (postImages.length === 6) {
    postImages[0].classList.add("large-blog-img");
    postImages[1].classList.add("square-blog-img");
    postImages[2].classList.add("square-blog-img");
    postImages[3].classList.add("square-blog-img");
    postImages[4].classList.add("square-blog-img");
    postImages[5].classList.add("large-blog-img");
  }
  if (postImages.length === 7) {
    postImages[0].classList.add("large-blog-img");
    postImages[1].classList.add("large-blog-img");
    postImages[2].classList.add("square-blog-img");
    postImages[3].classList.add("square-blog-img");
    postImages[4].classList.add("square-blog-img");
    postImages[5].classList.add("square-blog-img");
    postImages[6].classList.add("large-blog-img");
  }
  if (postImages.length === 8) {
    postImages[0].classList.add("large-blog-img");
    postImages[1].classList.add("square-blog-img");
    postImages[2].classList.add("square-blog-img");
    postImages[3].classList.add("square-blog-img");
    postImages[4].classList.add("square-blog-img");
    postImages[5].classList.add("large-blog-img");
    postImages[6].classList.add("square-blog-img");
    postImages[6].classList.add("medium-size-left");
    postImages[7].classList.add("square-blog-img");
    postImages[7].classList.add("medium-size-right");
  }

  if (postImages.length === 10) {
    postImages[0].classList.add("large-blog-img");
    postImages[1].classList.add("large-blog-img");
    postImages[2].classList.add("square-blog-img");
    postImages[2].classList.add("medium-size-left");
    postImages[3].classList.add("square-blog-img");
    postImages[3].classList.add("medium-size-right");
    postImages[4].classList.add("square-blog-img");
    postImages[5].classList.add("square-blog-img");
    postImages[6].classList.add("square-blog-img");
    postImages[7].classList.add("square-blog-img");
    postImages[8].classList.add("square-blog-img");
    postImages[8].classList.add("medium-size-left");
    postImages[9].classList.add("square-blog-img");
    postImages[9].classList.add("medium-size-right");
  }
}

// function for opening an image when clicked
function toggleImages() {
  const postImages = document.querySelectorAll(
    ".blog-post-container .wp-block-image"
  );
  const postImageImg = document.querySelectorAll(
    ".blog-post-container .wp-block-image img"
  );
  postImages.forEach((postImage) => {
    postImage.addEventListener("click", openImage);
    function openImage() {
      postImage.classList.toggle("active");
      // postImageImg.classList.toggle("active");
    }
  });
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

// COMMENT SECTION //
import { checkLength } from "./sitewide/functions.js";
import { checkEmail } from "./sitewide/functions.js";

const form = document.querySelector("#comment-form");

// contact form inputs
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

// contact form errors
const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");

// container for recieved message
const messageSuccess = document.querySelector(".message-recieved");

// prevent parameters in url
form.onSubmit = function (event) {
  event.preventDefault();
};

function validateName(event) {
  event.preventDefault();

  if (checkLength(name.value, 5) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
}

function validateEmail(event) {
  event.preventDefault();

  if (checkEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
}

function validateMessage(event) {
  event.preventDefault();

  if (checkLength(message.value, 25) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
}

function submitForm(event) {
  event.preventDefault();

  if (
    checkLength(name.value, 5) &&
    checkEmail(email.value) &&
    checkLength(message.value, 25)
  ) {
    messageSuccess.innerHTML = `<div class="success-color message-flex">
    <i class="fa-regular fa-circle-check"></i>Thank you for the comment!
  </div>`;
  }

  form.reset();
}

name.addEventListener("keyup", validateName);
form.addEventListener("submit", validateName);
email.addEventListener("keyup", validateEmail);
form.addEventListener("submit", validateEmail);
message.addEventListener("keyup", validateMessage);
form.addEventListener("submit", validateMessage);

form.addEventListener("submit", submitForm);
