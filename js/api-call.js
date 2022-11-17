const url = "https://feulur.com/tronderpatur/wp-json/wp/v2/posts?_embed";

const urlCategories =
  "https://feulur.com/tronderpatur/wp-json/wp/v2/categories";

const navBlog = document.querySelector(".nav-blog");

const latestPostsCarousel = document.querySelector(".latest-carousel");
// // const subnavParent = document.querySelector(".subnav-parent");

// // async function getCategories() {
// //   try {
// //     const response = await fetch(urlCategories);
// //     const categories = await response.json();

// //     createHtml(categories);
// //     console.log(categories);
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }

// // getCategories();

// // function createHtml(categories) {
// //   categories.forEach(function (category) {
// //     if (category.parent === 0) {
// //       navBlog.innerHTML += `<ul class="subnav-parent"><a href=${category.link}>${category.name}</a></ul>`;
// //     }
// //     if (category.parent === 3) {
// //     }
// //   });
// // }

const latestCarousel = document.querySelector(".latest-carousel");
const leftButton = document.querySelector(".left-arrow");
const rightButton = document.querySelector(".right-arrow");

async function getBlogPosts() {
  try {
    const response = await fetch(url);
    const blogPosts = await response.json();

    latestCarousel.innerHTML = "";
    createHtml(blogPosts);
  } catch (error) {
    console.log(error);
  }
}

getBlogPosts();

//https: dalenguyen.medium.com/how-to-get-featured-image-from-wordpress-rest-api-5e023b9896c6
function createHtml(blogPosts) {
  blogPosts.forEach(function (post) {
    latestCarousel.innerHTML += `<li class="small-post nobullets"><a class="small-post-link" href=blog-post.html?id=${post.id}>
                                        <div class="small-post-img-square"><img class="small-post-img" src="${post._embedded["wp:featuredmedia"]["0"].source_url}"> </div>
                                        <h3>${post.title.rendered}</h3></a>
                                        
                                        
                                    </li>`;
  });
}
// creationg latest posts slider
// with help from this source https://www.youtube.com/watch?v=9fJZOmJjTOk
const latestSlider = document.getElementById("latest-carousel");
const latestSliderItem = document.getElementsByClassName("small-post");
// const progressCircle1 = document.getElementById("progress-circle-1");
// const progressCircle2 = document.getElementById("progress-circle-2");

console.log(latestSliderItem);

// progressCircle1.addEventListener("click", () => {changeSlide(currentSlide - 1)});
// progressCircle2.addEventListener("click", () => {changeSlide(currentSlide + 1)});
leftButton.addEventListener("click", prev);
rightButton.addEventListener("click", next);

// let currentSlide = 0;

function next() {
  latestSlider.append(
    latestSliderItem[0],
    latestSliderItem[1],
    latestSliderItem[2],
    latestSliderItem[3],
    latestSliderItem[4]
  );
}
function prev() {
  latestSlider.prepend(
    latestSliderItem[latestSliderItem.length - 5],
    latestSliderItem[latestSliderItem.length - 4],
    latestSliderItem[latestSliderItem.length - 3],
    latestSliderItem[latestSliderItem.length - 2],
    latestSliderItem[latestSliderItem.length - 1]
  );
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

// const urlPostsPage1 =
//   "https://feulur.com/tronderpatur/wp-json/wp/v2/posts?_embed";
// const urlPostsPage2 =
//   "https://feulur.com/tronderpatur/wp-json/wp/v2/posts?_embed&page=2";
const featuredCarousel = document.querySelector(".featured-carousel");

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
//     featuredCarousel.innerHTML = "";
//     createFeatured(allPosts);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getAllBlogPosts();

const urlTyttebaera =
  "https://feulur.com/tronderpatur/wp-json/wp/v2/posts?_embed&categories=10";
// next and prev button function
const featuredNext = document.querySelector(".featured-next");
const featuredPrev = document.querySelector(".featured-prev");

async function getFeaturedPosts() {
  try {
    const response = await fetch(urlTyttebaera);
    const featuredTyttebaera = await response.json();

    // const allPosts = merge(postsPage1, postsPage2);

    featuredTyttebaera.splice(1, 1);
    // console.log(featuredTyttebaeraFirstSplice);
    // const featuredTyttebaera = featuredTyttebaeraFirstSplice.splice(2, 4);

    featuredTyttebaera.splice(2, 4);
    console.log(featuredTyttebaera);

    featuredCarousel.innerHTML = "";
    createFeatured(featuredTyttebaera);
  } catch (error) {
    console.log(error);
  }
}

getFeaturedPosts();

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
    featuredCarousel.innerHTML += `<div class="nobullets featured-post">
      <img class="featured-post-img" src="${post._embedded["wp:featuredmedia"]["0"].source_url}"> 
      <div class="featured-post-card">
      <h3>${post.title.rendered}</h3>
      <p>${post.excerpt.rendered}</p>
      <a href="blog-post.html?id=${post.id}" class="btn-featured"><button class="cta">Read more</button></a>
      </div>
  </div>`;
  });

  featuredCarousel.firstChild.classList.add("active");
}
// slideshow functioning!!! https://codepen.io/zachMartinez/pen/MEONMX

let current = 0;
// let allChildren = featuredCarousel.childNodes;
// console.log(allChildren);
featuredNext.addEventListener("click", function () {
  featuredCarousel.childNodes[current].classList.remove("active");
  current++;
  console.log(current);
  if (current === featuredCarousel.childNodes.length) {
    current = 0;
  }
  featuredCarousel.childNodes[current].classList.add("active");
});

featuredPrev.addEventListener("click", function () {
  featuredCarousel.childNodes[current].classList.remove("active");
  current--;
  if (current < 0) {
    current = featuredCarousel.childNodes.length - 1;
  }
  featuredCarousel.childNodes[current].classList.add("active");
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
