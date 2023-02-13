const measureBtn = document.querySelector(".measure-unit");
const measureModal = document.querySelector(".measure-class");

const tonBtn = document.querySelector(".ton-btn");
const kgBtn = document.querySelector(".kg-btn");

measureBtn.addEventListener("click", function () {
  measureModal.classList.toggle("hidden");
  console.log("hello");
});

tonBtn.addEventListener("click", function () {
  tonBtn.style.background = "#9DD8E6";
  kgBtn.style.backgroundColor = "#d9d9d9";
});
kgBtn.addEventListener("click", function () {
  kgBtn.style.backgroundColor = "#9DD8E6";
  tonBtn.style.background = "#d9d9d9";
});
