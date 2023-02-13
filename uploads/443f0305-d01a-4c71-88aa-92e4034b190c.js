"use strict";

// const beginning = document.querySelector(".start-line");
// const checkBtn = document.querySelector(".form-check-input");
const prev = document.querySelector(".previous");
const content = document.querySelector(".content");

const next = document.querySelector(".next");
const end = document.querySelector(".finish-line");
const agreedBtn = document.querySelector(".form-check-input");
// if the beginning is visible then disable next button

// if the page is scrolled to end then enable next button
// const scrollFunc =

// content.addEventListener("scroll", function () {
//   console.log("scrolled");
// });

const termsObserverCallBack = (lastP, termsObserver) => {
  if (lastP[0].isIntersecting) {
    termsObserver.unobserve(end);
    next.classList.add("enabled");
    console.log(lastP[0].isIntersecting);
  }
};

const termsObserverOptions = {
  threshold: 1,
};

const termsObserver = new IntersectionObserver(
  termsObserverCallBack,
  termsObserverOptions
);

termsObserver.observe(end);

next.addEventListener("click", function (e) {
  if (!e.target.classList.contains("enabled")) {
    // console.log("read first");
    alert("يرجى قراءة شروط وأحكام الخدمة اولآ !!");
  } else {
    alert("مرحبآ بكم !!");
  }
});
