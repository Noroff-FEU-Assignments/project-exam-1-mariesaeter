# Trønder på Tur - Travelling blog

A travelling blog site for trips I have been on.

> Live demo [_here_](https://tronderpatur.netlify.app)

<img width="1440" alt="tronderpatur-frontpage-screenshot" src="https://user-images.githubusercontent.com/96269610/208297307-6719b2e3-4bd7-49ff-86e9-6a6e7b82ba10.png">


## Description

A travelling blog created by using headless CMS and REST API. Made during Noroff School of Technology and Digital Media year 1 of Front-End Development for project exam 1.

- The project's goal was to use what I had learned from year 1 in Front-End developement in action. This includes HTML, CSS and JavaScript.
- The website is built responsive without the use of any additional framework.
- All design choices and topic choice is done by me.

## Features
- A latest posts carousel slider on web view (not on mobile) can be found on the home page
- Image modal when clicking images on the individual blog post pages 
- Contact form with JavaScript validation

## Built with

- HTML
- CSS
- Vanilla JavaScript

## Getting Started

### Installing

1. Clone the repo

```bash
https://github.com/Noroff-FEU-Assignments/project-exam-1-mariesaeter.git
```

no dependencies

### Running

## Contact

[My LinkedIn Page](www.linkedin.com/in/marie-sæter-954821207)
Feel free to contact me!

## Room for improvements
- Adjust latest post cards in mobile view (at the moment some white space is added)

### To do
- Add filtering options on the blog page
- Add functional search option
- Add more to footer

## Acknowledgement

### Images and icons
+ All images are taken by me Marie Sæter
+ Images of me are taken by my sister Camilla Sæter
+ Icons are gathered from the free pack at [fontawesome.com](https://fontawesome.com)
+ Logo is created by me

### Inspiration
#### Hamburger menu
The toggle of the hamburger menu is inspired by [Gaurav at dev.to]([https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0](https://dev.to/devggaurav/let-s-build-a-responsive-navbar-and-hamburger-menu-using-html-css-and-javascript-4gci))
```
const nav = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navBlog = document.querySelector(".nav-blog");
const navLinkBlog = document.querySelector(".nav-link-blog-mobile");

// creating functional hamburger menu
hamburgerMenu.addEventListener("click", mobileMenu);

// function for toggle active class that opens the hamburger menu
function mobileMenu() {
  hamburgerMenu.classList.toggle("active");
  nav.classList.toggle("active");
}

// closing the menu when clicking on a link
navLink.forEach((link) => link.addEventListener("click", closeMenu));

// function that removes the active class when a lin is clicked so that the hamburger menu closes.
function closeMenu() {
  hamburgerMenu.classList.remove("active");
  nav.classList.remove("active");
}
```

#### API loader 
API loader animation and style is inspired by [Chris Coyier on CSS Tricks](https://css-tricks.com/almanac/properties/m/mask-image/) for the use of mask-image and by [Manuel Pinoto on Codepen](https://codepen.io/P1N2O/pen/pyBNzX) for the gradient.
```
.loader {
  height: 150px;
  width: 150px;
  background: linear-gradient(to right, #1e4a5c, #f4a152);
  mask-image: url("../images/logo.png");
  mask-size: contain;
  mask-repeat: no-repeat;
  margin: 0 auto;
  animation: colorChange 3s ease infinite;
  background-size: 200% 200%;
}

@keyframes colorChange {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

```







