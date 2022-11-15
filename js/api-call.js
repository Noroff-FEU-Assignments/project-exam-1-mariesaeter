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

console.log(urlTyttebaera);

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

//Merge arrays
//https://blog.greenroots.info/5-ways-to-merge-arrays-in-javascript-and-their-differences

const merge = (first, second) => {
  for (let i = 0; i < second.length; i++) {
    first.push(second[i]);
  }

  return first;
};

function createFeatured(featuredTyttebaera) {
  featuredTyttebaera.forEach(function (post) {
    featuredCarousel.innerHTML += `<li class="small-post nobullets"><a class="small-post-link" href=blog-post.html?id=${post.id}>
      <div class="small-post-img-square"><img class="small-post-img" src="${post._embedded["wp:featuredmedia"]["0"].source_url}"> </div>
      <h3>${post.title.rendered}</h3></a>
  </li>`;
  });
}
