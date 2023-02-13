const submitDate = document.querySelector(".submit-date");
const calenderModal = document.querySelector(".calender-modal");
const closeBtnr = document.querySelector(".closer");

const calenderBtn = document.querySelector(".period");

close = () => {
  console.log("hi");
};

calenderBtn.addEventListener("click", () => {
  calenderModal.classList.remove("hidden");
  // console.log("hi");
});

submitDate.addEventListener("click", () => {
  calenderModal.classList.add("hidden");
});

closeBtnr.addEventListener("click", () => {
  calenderModal.classList.add("hidden");
});
