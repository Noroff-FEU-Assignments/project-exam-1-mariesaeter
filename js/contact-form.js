import { checkLength } from "./sitewide/functions.js";
import { checkEmail } from "./sitewide/functions.js";

const form = document.querySelector("#contact-form");

// contact form inputs
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");

// contact form errors
const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const subjectError = document.querySelector("#subject-error");
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

function validateSubject(event) {
  event.preventDefault();

  if (checkLength(subject.value, 15) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
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
    checkLength(subject.value, 15) &&
    checkLength(message.value, 25)
  ) {
    messageSuccess.innerHTML = `<div class="success-color message-flex">
    <i class="fa-regular fa-circle-check"></i>You're message is sent!
  </div>`;
  }

  form.reset();
}

name.addEventListener("keyup", validateName);
form.addEventListener("submit", validateName);
email.addEventListener("keyup", validateEmail);
form.addEventListener("submit", validateEmail);
subject.addEventListener("keyup", validateSubject);
form.addEventListener("submit", validateSubject);
message.addEventListener("keyup", validateMessage);
form.addEventListener("submit", validateMessage);

form.addEventListener("submit", submitForm);
