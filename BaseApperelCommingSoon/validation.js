const form = document.querySelector(".form-section");
const email = document.querySelector(".email");
const image = document.querySelector(".submit");
const message = document.querySelector(".message");

const errorImage = document.querySelector(".error-img");
errorImage.style.display = "none";

function validateEmail() {
  const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const emailValue = email.value;

  if (emailValue.match(pattern)) {
    message.innerHTML = "Email is submitted";
    form.classList.remove("form--invalid");
    message.classList.remove("message--invalid");
    errorImage.style.display = "none";
    form.classList.add("form--valid");
    message.classList.add("message--valid");
  } else {
    message.innerHTML = "This is not a correct email";
    form.classList.remove("form--valid");
    message.classList.remove("message--valid");
    message.classList.add("message--invalid");
    form.classList.add("form--invalid");
    errorImage.style.display = "inline";
  }
}

image.addEventListener("click", validateEmail);
