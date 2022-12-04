const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const blogPostContainer = document.querySelector(".blog-post-container");
const blogPostTitle = document.querySelector(".blog-post-title");
const headerImg = document.querySelector(".blog-post-header-img");

const url = `https://feulur.com/tronderpatur/wp-json/wp/v2/posts/${id}?_embed`;

// api call for retrieving the specific blog post by id in the query string
async function getBlogPost() {
  try {
    const response = await fetch(url);
    const blogPost = await response.json();

    blogPostContainer.innerHTML = "";
    createPostHtml(blogPost);
  } catch (error) {
    console.log(error);
  }
}

getBlogPost();

// creating the html for each specific blogpost
function createPostHtml(blogPost) {
  // formating the date
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  // display the date of the post correctly
  let date = new Intl.DateTimeFormat("en-US", options).format(
    new Date(blogPost.date)
  );

  let headerHtml = `<div><h1>${blogPost.title.rendered}</h1>
    <span class="date centered-content">${date}</span>`;

  blogPostTitle.innerHTML = headerHtml;
  // add the blogpost title as the title of the html document
  document.title = `${blogPost.title.rendered} | Trønder på Tur`;

  headerImg.style.background = `linear-gradient(rgba(18, 20, 22, 0.4), rgba(18, 20, 22, 0.4)), url(${blogPost._embedded["wp:featuredmedia"]["0"].source_url}) center center / cover no-repeat`;

  let html = `<div class="blog-post-content">${blogPost.content.rendered}</div>
  `;
  blogPostContainer.innerHTML += html;
  adjustImages();
  toggleImages();
}

// function for adjusting the images to different sizes (adding different classes depending on how many images are in the post)
function adjustImages() {
  const postImages = document.querySelectorAll(
    ".blog-post-container .wp-block-image"
  );
  if (postImages.length === 3) {
    postImages[0].classList.add("square-blog-img");
    postImages[0].classList.add("medium-size-left");
    postImages[1].classList.add("square-blog-img");
    postImages[1].classList.add("medium-size-right");
    postImages[2].classList.add("large-blog-img");
  }
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

  if (postImages.length === 9) {
    postImages[0].classList.add("square-blog-img");
    postImages[0].classList.add("medium-size-left");
    postImages[1].classList.add("square-blog-img");
    postImages[1].classList.add("medium-size-right");
    postImages[2].classList.add("large-blog-img");
    postImages[3].classList.add("square-blog-img");
    postImages[4].classList.add("square-blog-img");
    postImages[5].classList.add("square-blog-img");
    postImages[6].classList.add("square-blog-img");
    postImages[7].classList.add("square-blog-img");
    postImages[7].classList.add("medium-size-left");
    postImages[8].classList.add("square-blog-img");
    postImages[8].classList.add("medium-size-right");
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

// function for opening an image modal when clicked
function toggleImages() {
  const postImages = document.querySelectorAll(
    ".blog-post-container .wp-block-image"
  );

  postImages.forEach((postImage) => {
    postImage.addEventListener("click", openImage);
    function openImage() {
      postImage.classList.toggle("active");
    }
  });
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
