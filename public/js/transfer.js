"use strict";

const tranferBtn = document.querySelector(".btn");
// const accounName = document.querySelector(".name");
const firstPart = document.querySelector(".first-part");
const account1 = {
  name: "Ahmed",
  id: 6345,
};

const account2 = {
  name: "Rashid",
  id: 9745,
};

const account3 = {
  name: "invare company",
  id: 8245,
};

const accounts = [account1, account2, account3];

const display = () => {
  const accontNumber = Number(document.getElementById("acc-number").value);

  let currentAccount = accounts.find((acc) => acc.id === accontNumber);

  if (currentAccount) {
    document.querySelector(".name").textContent = currentAccount.name;
  } else {
    alert("account not found");
  }
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    display();
  }
});

let amount = document.querySelectorAll(".result");

function selecter() {
  let selected = document.querySelector(".choice-style");
  selected.classList.add("active");
}

const displayAmount = () => {
  const amount = document.querySelector(".result:checked").value;
  document.getElementById("y").value = amount;

  console.log(amount);
};

amount.forEach(function (el) {
  el.addEventListener("click", () => {
    displayAmount();
  });
});

tranferBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const accountNumber = Number(document.getElementById("acc-number").value);
  let currentAccount = accounts.find((acc) => acc.id === accountNumber);

  const displayAmount = document.getElementById("y").value;

  if (!accountNumber) {
    alert("ارجوا اختيار رقم الحساب المراد تحويل اليه");
  } else if (!displayAmount) {
    alert("ارجوا اختيار المبلغ المراد تحويله");
  } else {
    alert("تم التحويل بنجاح");
    location.replace("confirmtransfer.html");
  }
});
