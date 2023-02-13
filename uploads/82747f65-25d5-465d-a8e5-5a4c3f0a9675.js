const editForm = document.querySelectorAll(".activation-btn");
const modal = document.querySelector(".modal-support");
const submitBtn = document.querySelector(".submit");

const closeBtn = document.querySelector(".close");
const namec = document.querySelector(".name");
const idNumberc = document.querySelector(".id-number");
const phoneNumberc = document.querySelector(".phone-number");
const birthDatec = document.querySelector(".birthdate");
const errorMessagec = document.querySelector(".error-message");
const emailc = document.querySelector(".email");

const closeModal = function () {
  modal.classList.add("hidden");
};
closeBtn.addEventListener("click", closeModal);

const displayMessage = function (message) {
  document.querySelector(".error-message").textContent = message;
  errorMessagec.style.color = "red";
};

editForm.forEach(function (el) {
  el.addEventListener("click", () => {
    // console.log("fuck you ");
    modal.classList.remove("hidden");
  });
});

submitBtn.addEventListener("click", (sub) => {
  const name = document.getElementById("name").value;
  const idNumber = document.getElementById("id-number").value;
  const phoneNumber = document.getElementById("phone-number").value;
  const birthDate = document.getElementById("birthdate").value;
  const email = document.getElementById("email").value;

  const showResult = () => {
    let display = (document.querySelector(".user-name").textContent = name);
    let displayId = (document.querySelector(".user-id").textContent = idNumber);
    let displayPhone = (document.querySelector(".user-phone").textContent =
      phoneNumber);
    let displayEmail = (document.querySelector(".user-email").textContent =
      email);
    let displayBirth = (document.querySelector(".user-birthdate").textContent =
      birthDate);
  };

  //   information = [name, idNumber, phoneNumber, birthDate];
  if (name === "") {
    // alert("الرجاء إدخال الاسم");
    displayMessage("الرجاء إدخال الاسم");
    namec.style.border = "2px solid red";
    clicked(namec);
    return false;
  } else if (idNumber === "") {
    displayMessage("الرجاء إدخال رقم الهوية");
    idNumberc.style.border = "2px solid red";
    clicked(idNumberc);
    return false;
  } else if (phoneNumber === "") {
    displayMessage("الرجاء إدخال رقم الهاتف");
    phoneNumberc.style.border = "2px solid red";
    clicked(phoneNumberc);
    return false;
  } else if (email === "") {
    displayMessage("الرجاء إدخال البريد الإلكتروني");
    emailc.style.border = "2px solid red";
    clicked(emailc);

    return false;
  } else if (birthDate === "") {
    displayMessage("الرجاء إدخال تاريخ الميلاد");
    birthDatec.style.border = "2px solid red";
    clicked(birthDatec);
    return false;
  } else {
    alert("تم تسجيل البيانات بنجاح");
    showResult();
    closeModal();
  }
});

const clicked = function (e) {
  // e.preventDefault();
  // console.log("clicked");
  e.addEventListener("click", function () {
    e.style.border = "0.5px solid black";
  });
};
