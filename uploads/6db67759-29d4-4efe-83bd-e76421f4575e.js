const sellerBtn = document.querySelector(".seller");

const closeBtn = document.querySelector(".close");
const sellerAccount = document.querySelector(".seller-account");
sellerBtn.addEventListener("click", () => {
  sellerAccount.classList.toggle("hidden");
});
closeBtn.addEventListener("click", () => {
  sellerAccount.classList.add("hidden");
});
