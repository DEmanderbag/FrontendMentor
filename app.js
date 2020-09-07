// get All elements that you need
let getForm = document.querySelector("form");
let getFirstName = document.getElementById("first-name");
let getLastName = document.getElementById("last-name");
let getEmail = document.getElementById("email");
let getPassword = document.getElementById("password");
let getButton = getForm.querySelector("button");

// Create P element;
let paragraph = document.createElement("p");

// Get image
let getImage = document.querySelector(".error-img");
getImage.style.display = "none";

getTestSection = document.querySelector(".last-name");
paragraph = document.createElement("p");
paragraph.textContent = "Last name cannot be empty";
paragraph.classList.add("errormsg");
getTestSection.appendChild(paragraph);

getTestSection = document.querySelector(".email");
paragraph = document.createElement("p");
paragraph.textContent = "Looks like this is not an email";
paragraph.classList.add("errormsg");
getTestSection.appendChild(paragraph);

getTestSection = document.querySelector(".password");
paragraph = document.createElement("p");
paragraph.textContent = "Password cannot be empty";
paragraph.classList.add("errormsg");
getTestSection.appendChild(paragraph);

function getValue() {
  const saveName = getFirstName.value;
  const saveLast = getLastName.value;
  const saveEmail = getEmail.value;
  const savePassword = getPassword.value;

  // console.log(getImage);
  if (saveName == "") {
    getTestSection = document.querySelector(".first-name");
    getFirstName.classList.add("errorborder");
    getImage.style.display = "inline";
    paragraph.textContent = "First Name cannot be empty";
    paragraph.classList.add("errormsg");
    getTestSection.appendChild(paragraph);
  } else console.log(saveName);
}
getButton.addEventListener("click", getValue);
