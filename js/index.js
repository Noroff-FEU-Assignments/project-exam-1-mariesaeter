const url = "https://feulur.com/tronderpatur/wp-json/wp/v2/posts?_embed";

const urlCategories =
  "https://feulur.com/tronderpatur/wp-json/wp/v2/categories";

const navBlog = document.querySelector(".nav-blog");

const latestPostsCarousel = document.querySelector(".latest-carousel");

const btnFeaturedTyttebaera = document.querySelector(
  ".btn-featured-tyttebaera"
);

const btnFeaturedAbroad = document.querySelector(".btn-featured-abroad");
// const subnav = document.querySelector(".subnav");

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

//https: dalenguyen.medium.com/how-to-get-featured-image-from-wordpress-rest-api-5e023b9896c6
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

// progressCircle1.addEventListener("click", () => {changeSlide(currentSlide - 1)});
// progressCircle2.addEventListener("click", () => {changeSlide(currentSlide + 1)});
leftButton.addEventListener("click", prev);
rightButton.addEventListener("click", next);
progressCircle1.addEventListener("click", prev);
progressCircle2.addEventListener("click", next);

// let currentSlide = 0;

function next() {
  latestSlide1.classList.remove("active");

  latestSlide2.classList.add("active");
  progressCircle2.classList.add("active");
  progressCircle1.classList.remove("active");

  // latestSlider.append(
  //   latestSliderItem[0],
  //   latestSliderItem[1],
  //   latestSliderItem[2],
  //   latestSliderItem[3],
  //   latestSliderItem[4]
  // );
}
function prev() {
  latestSlide2.classList.remove("active");

  latestSlide1.classList.add("active");
  progressCircle1.classList.add("active");
  progressCircle2.classList.remove("active");
  // latestSlider.prepend(
  //   latestSliderItem[latestSliderItem.length - 5],
  //   latestSliderItem[latestSliderItem.length - 4],
  //   latestSliderItem[latestSliderItem.length - 3],
  //   latestSliderItem[latestSliderItem.length - 2],
  //   latestSliderItem[latestSliderItem.length - 1]
  // );
}

// // function next() {
// //   latestSlider.append(
// //     latestSliderItem[0],
// //     latestSliderItem[1],
// //     latestSliderItem[2],
// //     latestSliderItem[3],
// //     latestSliderItem[4]
// //   );
// // }
// // function prev() {
// //   latestSlider.prepend(
// //     latestSliderItem[latestSliderItem.length - 5],
// //     latestSliderItem[latestSliderItem.length - 4],
// //     latestSliderItem[latestSliderItem.length - 3],
// //     latestSliderItem[latestSliderItem.length - 2],
// //     latestSliderItem[latestSliderItem.length - 1]
// //   );
// // }

// get all blog posts to the post page
// const urlPostsPage1 =
//   "https://feulur.com/tronderpatur/wp-json/wp/v2/posts?_embed";
// const urlPostsPage2 =
//   "https://feulur.com/tronderpatur/wp-json/wp/v2/posts?_embed&page=2";

// const blogContainer = document.querySelector(".blog-container");

// async function getAllBlogPosts() {
//   try {
//     const response = await Promise.all([
//       fetch(urlPostsPage1),
//       fetch(urlPostsPage2),
//     ]);
//     const postsPage1 = await response[0].json();
//     const postsPage2 = await response[1].json();

//     const allPosts = merge(postsPage1, postsPage2);

//     console.log(allPosts);
//     blogContainer.innerHTML = "";
//     createBlogHtml(allPosts);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getAllBlogPosts();

// function createBlogHtml(allPosts) {
//   allPosts.forEach(function (post) {
//     blogContainer.innerHTML += `<li class="small-post nobullets"><a class="small-post-link" href="blog-post.html?id=${post.id}">
//                                         <div class="small-post-img-square"><img class="small-post-img" src="${post._embedded["wp:featuredmedia"]["0"].source_url}"> </div>
//                                         <h3>${post.title.rendered}</h3></a>

//                                     </li>`;
//   });
// }

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

    // const allPosts = merge(postsPage1, postsPage2);
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

    // const allPosts = merge(postsPage1, postsPage2);
    // retreive the specific featured posts I want
    featuredAbroad.splice(2, 1);
    // console.log(featuredTyttebaeraFirstSplice);
    // const featuredTyttebaera = featuredTyttebaeraFirstSplice.splice(2, 4);

    featuredAbroad.splice(3, 1);
    console.log(featuredAbroad);

    featuredCarouselAbroad.innerHTML = "";
    createFeaturedAbroad(featuredAbroad);
  } catch (error) {
    console.log(error);
  }
}

getFeaturedPostsAbroad();
//Merge arrays to retrieve all blog posts
//https://blog.greenroots.info/5-ways-to-merge-arrays-in-javascript-and-their-differences

const merge = (first, second) => {
  for (let i = 0; i < second.length; i++) {
    first.push(second[i]);
  }

  return first;
};

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
// let allChildren = featuredCarousel.childNodes;
// console.log(allChildren);

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
// const featuredPosts = document.getElementsByClassName("featured-post");
// console.log(featuredPosts);

// featuredPosts[0].className = "active";
// try 1 featured //
// let featuredIndex = 1;
// showFeatured(featuredIndex);

// //Next/prev function
// function nextSlide(n) {
//   showFeatured((featuredIndex += n));
// }

// // show this slide
// function currentFeatured(n) {
//   showFeatured((featuredIndex = n));
// }

// function showFeatured(n) {
//   let i;
//   let featuredPost = document.getElementsByClassName("featured-post");

//   // let featuredPost = Array.from(featuredPostNode);

//   console.log(featuredPost);
//   let breadcrumbs = document.getElementsByClassName("featured-progress-circle");
//   if (n > featuredPost.length) {
//     featuredIndex = 1;
//   }
//   if (n < 1) {
//     featuredIndex = featuredPost.length;
//   }
//   for (i = 0; i < featuredPost.length; i++) {
//     featuredPost[i].style.display = "none";
//   }
//   for (i = 0; i < breadcrumbs.length; i++) {
//     breadcrumbs[i].className = breadcrumbs[i].className.replace(" active", "");
//   }
//   featuredPost[featuredIndex - 1].style.display = "block";
//   breadcrumbs[featuredIndex - 1].className += " active";
// }

// next and prev button function
// const featuredNext = document.querySelector(".featured-next");
// const featuredPrev = document.querySelector(".featured-prev");

// featuredNext.addEventListener("click", nextSlide(1));
// featuredPrev.addEventListener("click", nextSlide(-1));

// const featuredBreadcrumb1 = document.getElementById("featured-1");
// const featuredBreadcrumb2 = document.getElementById("featured-2");
// const featuredBreadcrumb3 = document.getElementById("featured-3");

// featuredBreadcrumb1.addEventListener("click", currentFeatured(1));
// featuredBreadcrumb2.addEventListener("click", currentFeatured(2));
// featuredBreadcrumb3.addEventListener("click", currentFeatured(3));