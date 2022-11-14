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

const latestCarousel = document.querySelector("latest-carousel");
const leftButton = document.querySelector(".left-arrow");
const rightButton = document.querySelector(".right-arrow");

async function getBlogPosts() {
  try {
    const response = await fetch(url);
    const blogPosts = await response.json();

    latestPostsCarousel.innerHTML = "";
    createHtml(blogPosts);
  } catch (error) {
    console.log(error);
  }
}

getBlogPosts();

//https: dalenguyen.medium.com/how-to-get-featured-image-from-wordpress-rest-api-5e023b9896c6
function createHtml(blogPosts) {
  blogPosts.forEach(function (post) {
    latestPostsCarousel.innerHTML += `<li class="latest-card small-post"<a href=blog-post.html?id=${post.id}>
                                        <div class="small-post-img-square"><img class="small-post-img" src="${post._embedded["wp:featuredmedia"]["0"].source_url}"> </div>
                                        <h3 class>${post.title.rendered}</h3>

                                    </li>`;
  });
}
