const url = "https://feulur.com/tronderpatur/wp-json/wp/v2/posts?_embed";

const urlCategories =
  "https://feulur.com/tronderpatur/wp-json/wp/v2/categories";

const navBlog = document.querySelector(".nav-blog");

const latestPostsCarousel = document.querySelector(".latest-carousel");

const btnFeaturedTyttebaera = document.querySelector(
  ".btn-featured-tyttebaera"
);

const btnFeaturedAbroad = document.querySelector(".btn-featured-abroad");

async function getCategories() {
  try {
    const response = await fetch(urlCategories);
    const categories = await response.json();
    console.log(categories);
    createFeaturedBtn(categories);
  } catch (error) {
    console.log(error);
  }
}

getCategories();

function createFeaturedBtn(categories) {
  categories.forEach(function (category) {
    if (category.id === 10) {
      btnFeaturedTyttebaera.innerHTML = `<a href="sub-category.html?id=${category.id}" class="cta cta-sub">Read more posts from the Chronicles of Tyttebæra</a>`;
    }

    if (category.id === 4) {
      btnFeaturedAbroad.innerHTML = `<a href="sub-category.html?id=${category.id}" class="cta cta-sub">Read more posts from travels abroad</a>`;
    }
  });
}

const latestCarousel = document.querySelector(".latest-carousel");
const leftButton = document.querySelector(".left-arrow");
const rightButton = document.querySelector(".right-arrow");

const latestSlide1 = document.querySelector(".latest-slide-1");
const latestSlide2 = document.querySelector(".latest-slide-2");

async function getBlogPosts() {
  try {
    const response = await fetch(url);
    const blogPosts = await response.json();

    latestSlide1.innerHTML = "";
    latestSlide2.innerHTML = "";

    const blogPostsSlide1 = blogPosts.slice(0, 4);
    const blogPostsSlide2 = blogPosts.slice(4, 8);
    console.log(blogPostsSlide1);
    console.log(blogPostsSlide2);
    createHtml(blogPostsSlide1, blogPostsSlide2);
  } catch (error) {
    console.log(error);
  }
}

getBlogPosts();

// https: dalenguyen.medium.com/how-to-get-featured-image-from-wordpress-rest-api-5e023b9896c6
function createHtml(blogPostsSlide1, blogPostsSlide2) {
  blogPostsSlide1.forEach(function (post) {
    latestSlide1.innerHTML += `<li class="small-post nobullets"><a class="small-post-link" href="blog-post.html?id=${post.id}">
                                        <div class="small-post-img-square"><img class="small-post-img" src="${post._embedded["wp:featuredmedia"]["0"].source_url}" alt="${post.title.rendered}"> </div>
                                        <h3>${post.title.rendered}</h3></a>


                                    </li>`;
  });
  blogPostsSlide2.forEach(function (post) {
    latestSlide2.innerHTML += `<li class="small-post nobullets"><a class="small-post-link" href="blog-post.html?id=${post.id}">
                                        <div class="small-post-img-square"><img class="small-post-img" src="${post._embedded["wp:featuredmedia"]["0"].source_url}"alt="${post.title.rendered}"> </div>
                                        <h3>${post.title.rendered}</h3></a>


                                    </li>`;
  });
}
// creationg latest posts slider
// with help from this source https://www.youtube.com/watch?v=9fJZOmJjTOk
const latestSlider = document.getElementById("latest-carousel");
const latestSliderItem = document.getElementsByClassName("small-post");

const progressCircle1 = document.getElementById("progress-1");
const progressCircle2 = document.getElementById("progress-2");

console.log(latestSliderItem);

leftButton.addEventListener("click", prev);
rightButton.addEventListener("click", next);
progressCircle1.addEventListener("click", prev);
progressCircle2.addEventListener("click", next);

// go to next slide
function next() {
  latestSlide1.classList.remove("active");

  latestSlide2.classList.add("active");
  progressCircle2.classList.add("active");
  progressCircle1.classList.remove("active");
}

// go to previous slide
function prev() {
  latestSlide2.classList.remove("active");

  latestSlide1.classList.add("active");
  progressCircle1.classList.add("active");
  progressCircle2.classList.remove("active");
}

//
const featuredCarouselTyttebaera = document.querySelector(
  "#featured-carousel-tyttebaera"
);
const featuredCarouselAbroad = document.querySelector(
  "#featured-carousel-abroad"
);
const featuredCarousel = document.querySelectorAll(".featured-carousel");

const urlTyttebaera =
  "https://feulur.com/tronderpatur/wp-json/wp/v2/posts?_embed&categories=10";
// next and prev button function
const featuredNext = document.querySelector(".featured-next");
const featuredPrev = document.querySelector(".featured-prev");

// get the featured articles from tyttebaera
async function getFeaturedPostsTyttebaera() {
  try {
    const response = await fetch(urlTyttebaera);
    const featuredTyttebaera = await response.json();

    // retreive the specific featured posts I want
    featuredTyttebaera.splice(1, 1);
    // console.log(featuredTyttebaeraFirstSplice);
    // const featuredTyttebaera = featuredTyttebaeraFirstSplice.splice(2, 4);

    featuredTyttebaera.splice(2, 4);
    console.log(featuredTyttebaera);

    featuredCarouselTyttebaera.innerHTML = "";
    createFeatured(featuredTyttebaera);
  } catch (error) {
    console.log(error);
  }
}

getFeaturedPostsTyttebaera();

const urlAbroad =
  "https://feulur.com/tronderpatur/wp-json/wp/v2/posts?_embed&categories=4";
async function getFeaturedPostsAbroad() {
  try {
    const response = await fetch(urlAbroad);
    const featuredAbroad = await response.json();

    // retreive the specific featured posts I want
    featuredAbroad.splice(2, 1);

    featuredAbroad.splice(3, 1);

    featuredCarouselAbroad.innerHTML = "";
    createFeaturedAbroad(featuredAbroad);
  } catch (error) {
    console.log(error);
  }
}

getFeaturedPostsAbroad();

function createFeatured(featuredTyttebaera) {
  featuredTyttebaera.forEach(function (post) {
    // to format the date correctly
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    let date = new Intl.DateTimeFormat("en-US", options).format(
      new Date(post.date)
    );

    featuredCarouselTyttebaera.innerHTML += `<div class="nobullets featured-post">
      <img class="featured-post-img" src="${post._embedded["wp:featuredmedia"]["0"].source_url}" alt="${post.title.rendered}">
      <div class="featured-post-card box-shadow">
      <div class="post-card-info">
      <span class="date">${date}</span>
      <h3>${post.title.rendered}</h3>
      <span class="orange-line"></span>
      <div class="featured-excerpt">${post.excerpt.rendered}</div></div>
      <a href="blog-post.html?id=${post.id}"class="cta btn-main btn-featured">Read more</a>
      </div>
  </div>`;
  });

  featuredCarouselTyttebaera.firstChild.classList.add("active");
}

function createFeaturedAbroad(featuredAbroad) {
  featuredAbroad.forEach(function (post) {
    // to format the date correctly
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    let date = new Intl.DateTimeFormat("en-US", options).format(
      new Date(post.date)
    );

    featuredCarouselAbroad.innerHTML += `<div class="nobullets featured-post">
      <img class="featured-post-img" src="${post._embedded["wp:featuredmedia"]["0"].source_url}" alt="${post.title.rendered}">
      <div class="featured-post-card box-shadow">
      <div class="post-card-info">
      <span class="date">${date}</span>
      <h3>${post.title.rendered}</h3>
      <span class="orange-line"></span>
      <div class="featured-excerpt">${post.excerpt.rendered}</div></div>
      <a href="blog-post.html?id=${post.id}"class="cta btn-main btn-featured">Read more</a>
      </div>
  </div>`;
  });

  featuredCarouselAbroad.firstChild.classList.add("active");
}

// slideshow functioning!!! https://codepen.io/zachMartinez/pen/MEONMX

let current = 0;

// go to next slide
featuredNext.addEventListener("click", function () {
  featuredCarouselTyttebaera.childNodes[current].classList.remove("active");
  current++;
  console.log(current);
  if (current === featuredCarouselTyttebaera.childNodes.length) {
    current = 0;
  }
  featuredCarouselTyttebaera.childNodes[current].classList.add("active");
});

// go to previous slide
featuredPrev.addEventListener("click", function () {
  featuredCarouselTyttebaera.childNodes[current].classList.remove("active");
  current--;
  if (current < 0) {
    current = featuredCarouselTyttebaera.childNodes.length - 1;
  }
  featuredCarouselTyttebaera.childNodes[current].classList.add("active");
});

const featuredAbroadNext = document.querySelector("#abroad-next");
const featuredAbroadPrev = document.querySelector("#abroad-prev");

featuredAbroadNext.addEventListener("click", function () {
  featuredCarouselAbroad.childNodes[current].classList.remove("active");
  current++;
  console.log(current);
  if (current === featuredCarouselAbroad.childNodes.length) {
    current = 0;
  }
  featuredCarouselAbroad.childNodes[current].classList.add("active");
});

// go to previous slide
featuredAbroadPrev.addEventListener("click", function () {
  featuredCarouselAbroad.childNodes[current].classList.remove("active");
  current--;
  if (current < 0) {
    current = featuredCarouselAbroad.childNodes.length - 1;
  }
  featuredCarouselAbroad.childNodes[current].classList.add("active");
});
