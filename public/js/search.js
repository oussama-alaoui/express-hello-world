const material = document.querySelector(".sec--1");

const result = document.querySelector(".result");

const titlepress = document.querySelectorAll(".title");

const divisionBtn = document.getElementById("sec--1");
const nameBtn = document.getElementById("sec--2");
const conditionBtn = document.getElementById("sec--3");
const priceBtn = document.getElementById("sec--4");
const locationBtn = document.getElementById("sec--6");

const division = document.querySelector(".sec--1");
const electronicsDiv = document.querySelector(".sec--2");
const wasteDiv = document.querySelector(".sec--3");
const materialDiv = document.querySelector(".sec--4");
const conditionDiv = document.querySelector(".sec--5");
const priceDiv = document.querySelector(".sec--6");
const locationDiv = document.querySelector(".sec--7");

const materialBtn = document.querySelector(".material");
const electronicsBtn = document.querySelector(".electronics");
const wasteBtn = document.querySelector(".waste");
// const condition = document.querySelector(".sec--3");
// const price = document.querySelector(".sec--4");
// const location = document.querySelector(".sec--6");
//  ask what مضافة means
// const addedBtn = document.getElementById("sec--5");

divisionBtn.addEventListener("click", () => {
  //divisionBtn
  division.classList.remove("hidden");
  electronicsDiv.classList.add("hidden");
  materialDiv.classList.add("hidden");
  wasteDiv.classList.add("hidden");
  conditionDiv.classList.add("hidden");
  locationDiv.classList.add("hidden");
  priceDiv.classList.add("hidden");
  console.log("القسم الرئيسي شغال");
});

const mainPress = document.querySelectorAll(".division");

mainPress.forEach(function (el) {
  el.addEventListener("click", () => {
    if (divisionBtn.checked) {
      divisionBtn.addEventListener("click", () => {
        division.classList.remove("hidden");
        electronicsDiv.classList.add("hidden");
        materialDiv.classList.add("hidden");
        wasteDiv.classList.add("hidden");
        conditionDiv.classList.add("hidden");
      });
    } else if (materialBtn.checked) {
      // console.log("this function works perfectly");
      nameBtn.addEventListener("click", () => {
        materialDiv.classList.remove("hidden");
        division.classList.add("hidden");
        electronicsDiv.classList.add("hidden");
        wasteDiv.classList.add("hidden");
      });
      // conditionBtn.addEventListener("click", () => {
      //   S5();
      // });
    } else if (electronicsBtn.checked) {
      // console.log("this function works perfectly");
      nameBtn.addEventListener("click", () => {
        electronicsDiv.classList.remove("hidden");
        materialDiv.classList.add("hidden");
        division.classList.add("hidden");
        wasteDiv.classList.add("hidden");
      });
      // conditionBtn.addEventListener("click", () => {
      //   S5();
      // });
    } else if (wasteBtn.checked) {
      nameBtn.addEventListener("click", () => {
        wasteDiv.classList.remove("hidden");
        electronicsDiv.classList.add("hidden");
        materialDiv.classList.add("hidden");
        division.classList.add("hidden");
      });
      // conditionBtn.addEventListener("click", () => {
      //   S5();
      // });
    }
  });
});

const materialPress = document.querySelectorAll(".materialr");

const wastePress = document.querySelectorAll(".wastepress");
const electronicsPress = document.querySelectorAll(".electronicspress");
materialPress.forEach(function (el) {
  el.addEventListener("click", () => {
    if (divisionBtn.checked) {
      divisionBtn.addEventListener("click", () => {
        division.classList.remove("hidden");
        electronicsDiv.classList.add("hidden");
        materialDiv.classList.add("hidden");
        wasteDiv.classList.add("hidden");
        conditionDiv.classList.add("hidden");
      });
    } else if (el.checked) {
      conditionBtn.addEventListener("click", () => {
        conditionDiv.classList.remove("hidden");
        electronicsDiv.classList.add("hidden");
        materialDiv.classList.add("hidden");
        division.classList.add("hidden");
        wasteDiv.classList.add("hidden");
      });
    }
  });
});

priceBtn.addEventListener("click", () => {
  priceDiv.classList.remove("hidden");
  conditionDiv.classList.add("hidden");
  electronicsDiv.classList.add("hidden");
  materialDiv.classList.add("hidden");
  division.classList.add("hidden");
  wasteDiv.classList.add("hidden");
});

locationBtn.addEventListener("click", () => {
  locationDiv.classList.remove("hidden");
  priceDiv.classList.add("hidden");
  conditionDiv.classList.add("hidden");
  electronicsDiv.classList.add("hidden");
  materialDiv.classList.add("hidden");
  division.classList.add("hidden");
  wasteDiv.classList.add("hidden");
});
