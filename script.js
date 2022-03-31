const heading = document.querySelector(".webinar__heading");
const slide1 = document.querySelector(".slide-left1");
const slide2 = document.querySelector(".slide-left2");
const formSlideIn = document.querySelector(".webinar__form");

const register = document.querySelector(".webinar__register");
const form = document.querySelector(".webinar__form");

register.addEventListener("click", function (event) {
  event.preventDefault();

  heading.classList.toggle("slide");
  slide1.classList.toggle("slide");
  slide2.classList.toggle("slide");
  formSlideIn.classList.toggle("slide");
});
