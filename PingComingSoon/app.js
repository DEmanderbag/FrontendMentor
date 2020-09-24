const form = document.querySelector("form");
const email = document.getElementById("email");
const infoMessage = document.querySelector(".error");
const buttonSubmit = document.querySelector("button");

function validateEmail() {
  const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const emailValue = email.value;

  if (emailValue == "") {
    infoMessage.innerHTML = "Whoops! It looks like you forgot to add your email";
    email.classList.add("error--border");
  } else if (!emailValue.match(pattern)) {
    infoMessage.innerHTML = "Please provide a valid email address";
    email.classList.add("error--border");
  } else {
    email.classList.remove("error--border");
    infoMessage.remove();
  }
}

buttonSubmit.addEventListener("click", validateEmail);
