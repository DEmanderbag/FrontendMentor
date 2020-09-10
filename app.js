// get All elements that you need
let getForm = document.querySelector("form");
let getFirstName = document.getElementById("first-name");
let getLastName = document.getElementById("last-name");
let getEmail = document.getElementById("email");
let getPassword = document.getElementById("password");
let getButton = getForm.querySelector("button");

// Create P element;
let paragraph1 = document.createElement("p");
let paragraph2 = document.createElement("p");
let paragraph3 = document.createElement("p");
let paragraph4 = document.createElement("p");

// Get image
let getImage = document.querySelector(".img1");
getImage.style.display = "none";

// Get Second image
let getImage2 = document.querySelector(".img2");
getImage2.style.display = "none";

// Get Third image
let getImage3 = document.querySelector(".img3");
getImage3.style.display = "none";

// Get Forth image
let getImage4 = document.querySelector(".img4");
getImage4.style.display = "none";

function getNameValue() {
  const saveName = getFirstName.value;

  if (saveName == "") {
    getTestSection = document.querySelector(".first-name");
    getFirstName.classList.add("errorborder");
    getImage.style.display = "inline";
    paragraph1.textContent = "First Name cannot be empty";
    paragraph1.classList.add("errormsg");
    getTestSection.appendChild(paragraph1);
  }
}

function getLastNameValue() {
  const saveLast = getLastName.value;

  if (saveLast == "") {
    getTestSection = document.querySelector(".last-name");
    getLastName.classList.add("errorborder");
    getImage2.style.display = "inline";
    paragraph2.textContent = "Last name cannot be empty";
    paragraph2.classList.add("errormsg");
    getTestSection.appendChild(paragraph2);
  }
}

function getEmailValue() {
  const saveEmail = getEmail.value;
  let validateEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (saveEmail == "" || !saveEmail.match(validateEmail)) {
    getTestSection = document.querySelector(".email");
    getEmail.classList.add("errorborder");
    getImage3.style.display = "inline";
    paragraph3.textContent = "Looks like this is not an email";
    paragraph3.classList.add("errormsg");
    getTestSection.appendChild(paragraph3);
  }
}

function getPasswordValue() {
  const savePassword = getPassword.value;

  if (savePassword == "") {
    getTestSection = document.querySelector(".password");
    getPassword.classList.add("errorborder");
    getImage4.style.display = "inline";
    paragraph4.textContent = "Password cannot be empty";
    paragraph4.classList.add("errormsg");
    getTestSection.appendChild(paragraph4);
  }
}

getButton.addEventListener("click", getNameValue);
getButton.addEventListener("click", getLastNameValue);
getButton.addEventListener("click", getEmailValue);
getButton.addEventListener("click", getPasswordValue);
