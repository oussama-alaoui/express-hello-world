const filterBtn = document.querySelector(".filter-btn");

const filterModal = document.querySelector(".modal-filter");

const closeBtn = document.querySelector(".close-modal");

const deactivate = () => {
  filterModal.classList.add("hidden");
};

filterBtn.addEventListener("click", function () {
  filterModal.classList.toggle("hidden");
});
