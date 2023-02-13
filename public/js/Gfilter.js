"use strict";

const openModal = document.querySelector(".filter-btn");
const closeBtn = document.querySelectorAll(".close-modal");

const modal = document.querySelector(".modal-filter-p");
const general = document.querySelector(".general-page");
const statusWindow = document.querySelector(".status-filter");
const categoryShow = document.querySelector(".display-category");

const statusBtn = document.querySelector(".product-status");
const serviceBtn = document.querySelector(".sec--1");
const electronicsBtn = document.querySelector(".sec--2");
const wasteBtn = document.querySelector(".sec--3");

const buildWasteBtn = document.querySelector(".sec--4");
const organicWasteBtn = document.querySelector(".sec--5");
const greenWasteBtn = document.querySelector(".sec--6");

const buildWaste = document.getElementById("sec--4");
const organicWaste = document.getElementById("sec--5");
const greenWaste = document.getElementById("sec--6");

const service = document.getElementById("sec--1");
const electronics = document.getElementById("sec--2");
const waste = document.getElementById("sec--3");

const modalTitle = document.querySelector(".filter-title");

const generalTitle = ["قسم التصنيف"];

const serviceTitle = ["الخدمات"];

const materialTitle = ["المواد"];
const electronicsTitle = ["الأجهزة"];
const wasteTitle = ["المخلفات"];

const buildWasteTitle = ["المخلفات هدم والبناء"];
const organicWasteTitle = ["المخلفات العضوية"];
const greenWasteTitle = ["المخلفات الخضراء"];

const headTitles = {
  generalTitle: "قسم التصنيف",
  serviceTitle: "الخدمات",
  materialTitle: "المواد",
  electronicsTitle: "الأجهزة",
  wasteTitle: "المخلفات",
  buildWasteTitle: "المخلفات هدم والبناء",
  organicWasteTitle: "المخلفات العضوية",
  greenWasteTitle: "المخلفات الخضراء",
};

statusBtn.addEventListener("click", () => {
  //   statusWindow.classList.remove("hidden");
  modal.classList.add("hidden");
});

close = () => {
  modal.classList.add("hidden");
};

closeBtn.forEach(function (e) {
  e.addEventListener("click", function () {
    statusWindow.classList.add("hidden");
    modal.classList.add("hidden");
  });
});

let choice = document.querySelectorAll(".result");

let findSelected = () => {
  let selected = document.querySelector(".result:checked").value;

  let finalResult = (document.querySelector(".filter-btn").textContent =
    selected);

  // headTitles + `-` +
  // console.log(finalResult);
  // let test = `${wasteTitle + `-` + selected}`;
};
let statusChoice = document.querySelectorAll(".s-result");

let findSelectedStatus = () => {
  let statusSelected = document.querySelector(".s-result:checked").value;
  let finalResultStatus = (document.querySelector(
    ".product-status"
  ).textContent = statusSelected);
};

choice.forEach(function (el) {
  el.addEventListener("click", findSelected);
  // el.addEventListener("click", findSelectedStatus);
  el.addEventListener("click", close);
});

statusChoice.forEach(function (el) {
  // el.addEventListener("click", findSelected);
  el.addEventListener("click", findSelectedStatus);
  el.addEventListener("click", close);
});

openModal.addEventListener("click", () => {
  modal.classList.remove("hidden");

  general.classList.remove("hidden");

  service.classList.add("hidden");
  electronics.classList.add("hidden");
  //   waste.classList.add("hidden");
  //   buildWaste.classList.add("hidden");
  //   organicWaste.classList.add("hidden");
  //   greenWaste.classList.add("hidden");

  modalTitle.textContent = generalTitle;
});

serviceBtn.addEventListener("click", () => {
  console.log("hello");
  general.classList.add("hidden");
  service.classList.remove("hidden");
  modalTitle.textContent = serviceTitle;
  // openModal.textContent = `${materialTitle + `-` + findSelected}`;
  categoryShow.textContent = serviceTitle;
});

electronicsBtn.addEventListener("click", () => {
  general.classList.add("hidden");
  electronics.classList.remove("hidden");
  categoryShow.textContent = electronicsTitle;
});

// wasteBtn.addEventListener("click", () => {
//   general.classList.add("hidden");
//   waste.classList.remove("hidden");
//   categoryShow.textContent = wasteTitle;
// });

// buildWasteBtn.addEventListener("click", () => {
//   waste.classList.add("hidden");
//   buildWaste.classList.remove("hidden");
//   categoryShow.textContent = buildWasteTitle;
//   modalTitle.textContent = buildWasteTitle;
// });

// organicWasteBtn.addEventListener("click", () => {
//   waste.classList.add("hidden");
//   organicWaste.classList.remove("hidden");
//   categoryShow.textContent = organicWasteTitle;
//   modalTitle.textContent = organicWasteTitle;
// });

// greenWasteBtn.addEventListener("click", () => {
//   waste.classList.add("hidden");
//   greenWaste.classList.remove("hidden");
//   categoryShow.textContent = greenWasteTitle;
//   modalTitle.textContent = greenWasteTitle;
// });
console.log("hello");
