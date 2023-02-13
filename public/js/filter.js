"use strict";

const openModal = document.querySelector(".filter-btn");
const closeBtn = document.querySelectorAll(".close-modal");

const modal = document.querySelector(".modal-filter-p");
const general = document.querySelector(".general-page");
const statusWindow = document.querySelector(".status-filter");
const categoryShow = document.querySelector(".display-category");
const conditionWindow = document.querySelector(".condition-filter");

const statusBtn = document.querySelector(".product-status");
const materialBtn = document.querySelector(".sec--1");
const electronicsBtn = document.querySelector(".sec--2");
const wasteBtn = document.querySelector(".sec--3");

const buildWasteBtn = document.querySelector(".sec--4");
const organicWasteBtn = document.querySelector(".sec--5");
const greenWasteBtn = document.querySelector(".sec--6");

const typeOfPlasticBtn = document.querySelector(".type-menu-1");
const typeOfMetalBtn = document.querySelector(".type-menu-2");
const typeOfPaperBtn = document.querySelector(".type-menu-3");
const typeOfRubberBtn = document.querySelector(".type-menu-4");
const typeOfWoodBtn = document.querySelector(".type-menu-5");
const typeOfOilBtn = document.querySelector(".type-menu-6");
const typeOfClothesBtn = document.querySelector(".type-menu-7");

const productConditionBtn = document.querySelector(".product-cleanness");

const material = document.getElementById("sec--1");
const electronics = document.getElementById("sec--2");
const waste = document.getElementById("sec--3");

const buildWaste = document.getElementById("sec--4");
const organicWaste = document.getElementById("sec--5");
const greenWaste = document.getElementById("sec--6");

const typeOfPlastic = document.getElementById("sec--7");
const typeOfMetal = document.getElementById("sec--8");
const typeOfPaper = document.getElementById("sec--9");
const typeOfRubber = document.getElementById("sec--10");
// const typeOfWood = document.getElementById("sec--11");
const typeOfOil = document.getElementById("sec--12");
const typeOfClothes = document.getElementById("sec--13");

const productCondition = document.getElementById("sec--14");

const modalTitle = document.querySelector(".filter-title");

const generalTitle = ["قسم التصنيف"];

const materialTitle = ["المواد"];
const electronicsTitle = ["الأجهزة"];
const wasteTitle = ["المخلفات"];

const plasticTitle = ["البلاستيك"];
const metalTitle = ["المعادن"];
const paperTitle = ["الورق"];
const rubberTitle = ["المطاط"];
const woodTitle = ["الاخشاب"];
const oilTitle = ["الزيوت"];
const clothesTitle = ["الملابس"];

const buildWasteTitle = ["المخلفات هدم والبناء"];
const organicWasteTitle = ["المخلفات العضوية"];
const greenWasteTitle = ["المخلفات الخضراء"];
const productConditionTitle = ["نضافة المنتج"];

const headTitles = {
  generalTitle: "قسم التصنيف",
  materialTitle: "المواد",
  electronicsTitle: "الأجهزة",
  wasteTitle: "المخلفات",
  buildWasteTitle: "المخلفات هدم والبناء",
  organicWasteTitle: "المخلفات العضوية",
  greenWasteTitle: "المخلفات الخضراء",
};

statusBtn.addEventListener("click", () => {
  statusWindow.classList.remove("hidden");
  modal.classList.add("hidden");
  console.log("hi");
});

close = () => {
  modal.classList.add("hidden");
  statusWindow.classList.add("hidden");
  conditionWindow.classList.add("hidden");
};

closeBtn.forEach(function (e) {
  e.addEventListener("click", function () {
    statusWindow.classList.add("hidden");
    modal.classList.add("hidden");
  });
});

let typeOfPlasticProduct = document.querySelectorAll(".type-result");

let findSelectedType = () => {
  let typeOfProduct = document.querySelector(".type-result:checked").value;
  let finalResultType = (document.querySelector(
    ".type-of-product"
  ).textContent = typeOfProduct);
};

let choice = document.querySelectorAll(".result");

let findSelected = () => {
  let selected = document.querySelector(".result:checked").value;

  let finalResult = (document.querySelector(".filter-btn").textContent =
    selected);
};

let statusChoice = document.querySelectorAll(".s-result");

let findSelectedStatus = () => {
  let statusSelected = document.querySelector(".s-result:checked").value;

  let finalResultStatus = (document.querySelector(
    ".product-status"
  ).textContent = statusSelected);
};

let conditionChoice = document.querySelectorAll(".c-result");

let findSelectedCondition = () => {
  let conditionSelected = document.querySelector(".c-result:checked").value;

  let finalResultStatus = (document.querySelector(
    ".product-cleanness"
  ).textContent = conditionSelected);
};

typeOfPlasticProduct.forEach(function (el) {
  el.addEventListener("click", findSelectedType);
  el.addEventListener("click", close);
});

choice.forEach(function (el) {
  el.addEventListener("click", findSelected);
  // el.addEventListener("click", close);
});

statusChoice.forEach(function (el) {
  el.addEventListener("click", findSelectedStatus);
  el.addEventListener("click", close);
});

conditionChoice.forEach(function (el) {
  el.addEventListener("click", findSelectedCondition);
  el.addEventListener("click", close);
});
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

openModal.addEventListener("click", () => {
  modal.classList.remove("hidden");
  general.classList.remove("hidden");

  material.classList.add("hidden");
  electronics.classList.add("hidden");
  waste.classList.add("hidden");
  buildWaste.classList.add("hidden");
  organicWaste.classList.add("hidden");
  greenWaste.classList.add("hidden");
  typeOfPlastic.classList.add("hidden");
  typeOfMetal.classList.add("hidden");
  typeOfPaper.classList.add("hidden");
  typeOfRubber.classList.add("hidden");
  // typeOfWood.classList.add("hidden");
  typeOfOil.classList.add("hidden");
  typeOfClothes.classList.add("hidden");
  productCondition.classList.add("hidden");
  modalTitle.textContent = generalTitle;
});

materialBtn.addEventListener("click", () => {
  console.log("hello");
  general.classList.add("hidden");
  material.classList.remove("hidden");
  modalTitle.textContent = materialTitle;
  // openModal.textContent = `${materialTitle + `-` + findSelected}`;
  categoryShow.textContent = materialTitle;
});

electronicsBtn.addEventListener("click", () => {
  general.classList.add("hidden");
  electronics.classList.remove("hidden");
  categoryShow.textContent = electronicsTitle;
});

wasteBtn.addEventListener("click", () => {
  general.classList.add("hidden");
  waste.classList.remove("hidden");
  categoryShow.textContent = wasteTitle;
});

typeOfPlasticBtn.addEventListener("click", () => {
  general.classList.add("hidden");
  material.classList.add("hidden");
  typeOfPlastic.classList.remove("hidden");
  // categoryShow.textContent = plasticTitle;
  modalTitle.textContent = plasticTitle;
});

typeOfMetalBtn.addEventListener("click", () => {
  general.classList.add("hidden");
  material.classList.add("hidden");
  typeOfMetal.classList.remove("hidden");
  // categoryShow.textContent = metalTitle;
  modalTitle.textContent = metalTitle;
});

typeOfPaperBtn.addEventListener("click", () => {
  general.classList.add("hidden");
  material.classList.add("hidden");
  typeOfPaper.classList.remove("hidden");
  // categoryShow.textContent = paperTitle;
  modalTitle.textContent = paperTitle;
});

typeOfRubberBtn.addEventListener("click", () => {
  general.classList.add("hidden");
  material.classList.add("hidden");
  typeOfRubber.classList.remove("hidden");
  // categoryShow.textContent = rubberTitle;
  modalTitle.textContent = rubberTitle;
});

typeOfOilBtn.addEventListener("click", () => {
  general.classList.add("hidden");
  material.classList.add("hidden");
  typeOfOil.classList.remove("hidden");
  // categoryShow.textContent = oilTitle;
  modalTitle.textContent = oilTitle;
});

typeOfClothesBtn.addEventListener("click", () => {
  general.classList.add("hidden");
  material.classList.add("hidden");
  typeOfClothes.classList.remove("hidden");
  // categoryShow.textContent = clothesTitle;
  modalTitle.textContent = clothesTitle;
});

typeOfWoodBtn.addEventListener("click", () => {
  // general.classList.add("hidden");
  // material.classList.add("hidden");
  // typeOfWood.classList.remove("hidden");
  close();
  categoryShow.textContent = woodTitle;
  // modalTitle.textContent = woodTitle;
});

buildWasteBtn.addEventListener("click", () => {
  waste.classList.add("hidden");
  buildWaste.classList.remove("hidden");
  categoryShow.textContent = buildWasteTitle;
  modalTitle.textContent = buildWasteTitle;
});

organicWasteBtn.addEventListener("click", () => {
  waste.classList.add("hidden");
  organicWaste.classList.remove("hidden");
  categoryShow.textContent = organicWasteTitle;
  modalTitle.textContent = organicWasteTitle;
});

greenWasteBtn.addEventListener("click", () => {
  waste.classList.add("hidden");
  greenWaste.classList.remove("hidden");
  categoryShow.textContent = greenWasteTitle;
  modalTitle.textContent = greenWasteTitle;
});

productConditionBtn.addEventListener("click", () => {
  // console.log("hi");
  general.classList.add("hidden");
  productCondition.classList.remove("hidden");
  conditionWindow.classList.remove("hidden");
  categoryShow.textContent = productConditionTitle;
  modalTitle.textContent = productConditionTitle;
});
