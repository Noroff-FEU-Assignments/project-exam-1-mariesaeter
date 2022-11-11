const url = "https://feulur.com/tronderpatur/wp-json/wp/v2/posts?_embed";

const urlCategories =
  "https://feulur.com/tronderpatur/wp-json/wp/v2/categories";

const blogPostContainer = document.querySelector(".blogPostContainer");

async function getCategories() {
  try {
    const response = await fetch(url);
    const categories = await response.json();

    // blogPostContainer.innerHTML = "";
    createHtml(categories);
  } catch (error) {
    console.log(error);
  }
}

getCategories();

// async function getBlogPosts() {
//   try {
//     const response = await fetch(url);
//     const blogPosts = await response.json();

//     // blogPostContainer.innerHTML = "";
//     // createHtml(blogPosts);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getBlogPosts();

// https://dalenguyen.medium.com/how-to-get-featured-image-from-wordpress-rest-api-5e023b9896c6
// function createHtml(blogPosts) {
//   blogPosts.forEach(function (post) {
//     blogPostContainer.innerHTML += `<a href=blog-post.html?id=${post.id}
//                                         <div><img src="${post._embedded["wp:featuredmedia"]["0"].source_url}"> </div>
//                                         <h3>${post.title.rendered}</h3>

//                                     </a>`;
//   });
// }
