// get all blog posts to the post page
const urlPostsPage1 =
  "https://feulur.com/tronderpatur/wp-json/wp/v2/posts?_embed";
const urlPostsPage2 =
  "https://feulur.com/tronderpatur/wp-json/wp/v2/posts?_embed&page=2";

const blogContainer = document.querySelector(".blog-container");
const morePostsBtn = document.querySelector("#more-posts-btn");
const postCount = document.querySelector("#post-count");
const postTotal = document.querySelector("#post-total");

const merge = (first, second) => {
  for (let i = 0; i < second.length; i++) {
    first.push(second[i]);
  }

  return first;
};
async function getAllBlogPosts() {
  try {
    const response = await Promise.all([
      fetch(urlPostsPage1),
      fetch(urlPostsPage2),
    ]);
    const postsPage1 = await response[0].json();
    const postsPage2 = await response[1].json();

    const allPosts = merge(postsPage1, postsPage2);

    postTotal.innerHTML = allPosts.length;

    // console.log(postTotal);

    console.log(allPosts);
    blogContainer.innerHTML = "";
    createBlogHtml(allPosts);
  } catch (error) {
    console.log(error);
  }
}

getAllBlogPosts();

// maxPosts = 10;
// loadPosts = 10;
// hiddenPosts = Array.from(document.querySelectorAll(".hidden-post"));
// let count = 0;
function createBlogHtml(allPosts) {
  //   const arrLength = allPosts.length;
  //   postTotal.innerHTML = arrLength;

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  allPosts.forEach(function (post) {
    let date = new Intl.DateTimeFormat("en-US", options).format(
      new Date(post.date)
    );

    // let count = allPosts.length;
    // count++;
    // if (count > 10) {
    //   break;
    // }

    let html = `<div class="nobullets blog-post-card hidden-post">
    <img class="post-img" src="${post._embedded["wp:featuredmedia"]["0"].source_url}">
    <div class="post-card box-shadow">
    <span class="date">${date}</span>
    <h3>${post.title.rendered}</h3>
    <span class="orange-line"></span>
    <p class="post-excerpt">${post.excerpt.rendered}</p>
    <a href="blog-post.html?id=${post.id}"class="cta btn-featured">Read more</a>
    </div>
</div>`;

    blogContainer.innerHTML += html;

    // morePostsBtn.addEventListener("click", function () {
    //   if (count < allPosts.length) {
    //     blogContainer.append(html[count]);
    //     count++;
    //   }
    // });

    // allPosts.slice(0, 10);
    // morePostsBtn.addEventListener("click", function(event) {
    //     event.preventDefault();

    // })
    // blogContainer.innerHTML += `<div class="nobullets blog-post-card">
    //         <img class="post-img" src="${post._embedded["wp:featuredmedia"]["0"].source_url}">
    //         <div class="post-card box-shadow">
    //         <span class="date">${date}</span>
    //         <h3>${post.title.rendered}</h3>
    //         <span class="orange-line"></span>
    //         <p class="post-excerpt">${post.excerpt.rendered}</p>
    //         <a href="blog-post.html?id=${post.id}"class="cta btn-featured">Read more</a>
    //         </div>
    //     </div>`;
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
//     allPosts.forEach(function (post) {
//       const options = {
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//       };

//       let date = new Intl.DateTimeFormat("en-US", options).format(
//         new Date(post.date)
//       );
//       blogContainer.innerHTML += `<div class="nobullets blog-post-card">
//       <img class="post-img" src="${post._embedded["wp:featuredmedia"]["0"].source_url}">
//       <div class="post-card box-shadow">
//       <span class="date">${date}</span>
//       <h3>${post.title.rendered}</h3>
//       <span class="orange-line"></span>
//       <p class="post-excerpt">${post.excerpt.rendered}</p>
//       <a href="blog-post.html?id=${post.id}"class="cta btn-featured">Read more</a>
//       </div>
//   </div>`;
//     });

{
  /* <li class="small-post nobullets"><a class="small-post-link" href="blog-post.html?id=${post.id}">
                                        <div class="small-post-img-square"><img class="small-post-img" src="${post._embedded["wp:featuredmedia"]["0"].source_url}"> </div>
                                        <h3>${post.title.rendered}</h3></a>
                                        
                                        
                                    </li> */
}
