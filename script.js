const heading = document.querySelector(".webinar__heading");
const slide1 = document.querySelector(".slide-left1");
const slide2 = document.querySelector(".slide-left2");
const formSlideIn = document.querySelector(".webinar__form");
const formSubmit = document.getElementById("form-webinar");
const register = document.querySelector(".webinar__register");
const form = document.querySelector(".webinar__form");
const popupVisible = document.querySelector(".popup");
const webinarBox1 = document.querySelector(".webinar__box-1");
const fullname = document.getElementById("fullname");
const enteredName = document.getElementById("entered-name");
formSubmit.reset();

register.addEventListener("click", function (event) {
  event.preventDefault();

  heading.classList.toggle("slide");
  slide1.classList.toggle("slide");
  slide2.classList.toggle("slide");
  formSlideIn.classList.toggle("slide");
  register.classList.toggle("webinar__btn-slide");
});

formSubmit.addEventListener("submit", function (event) {
  event.preventDefault();
  enteredName.innerHTML = fullname.value;
  webinarBox1.classList.toggle("popup__blur");
  popupVisible.classList.toggle("popup__visible");

  setTimeout(() => {
    webinarBox1.classList.toggle("popup__blur");
    popupVisible.classList.toggle("popup__visible");
    heading.classList.toggle("slide");
    slide1.classList.toggle("slide");
    slide2.classList.toggle("slide");
    formSlideIn.classList.toggle("slide");
    formSubmit.reset();
    register.classList.toggle("webinar__btn-slide");
  }, 4500);
});
