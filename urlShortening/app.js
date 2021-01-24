// Mobile menu
const body = document.querySelector("body");
const menu = document.querySelector(".menu");
const menuLine = document.querySelector(".menu div");
const menuList = document.querySelector(".list");
const menuItems = document.querySelectorAll(".list li");

menu.addEventListener("click", () => {
  body.classList.toggle("open");
  menuLine.classList.toggle("menu__line--open");
  menuList.classList.toggle("is-open");
});

menuItems.forEach((e) =>
  e.addEventListener("click", () => {
    body.classList.remove("open");
    menuLine.classList.toggle("menu__line--open");
    menuList.classList.toggle("is-open");
  })
);

// Form
const generateSection = document.querySelector(".generate");
const form = document.querySelector("form");
const formGroup = document.querySelector(".group");
const formInput = document.querySelector("form input");
const formLabel = document.querySelector(".form__label");
const formBtn = document.querySelector("form button");

formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let currentValue = formInput.value;

  if (currentValue == "") {
    formGroup.classList.add("group--error");
    formInput.classList.add("error");
    formLabel.style.display = "block";
  } else {
    formGroup.classList.remove("group--error");
    formInput.classList.remove("error");
    formLabel.style.display = "none";
    formBtn.classList.add("loading");
    formBtn.textContent = "Generating ...";
    getLink(currentValue, currentValue);
  }
});

function generateLink(currentValue, APIlink) {
  let shortLink = `<div class="link__section">
      <p class="link__original"><a href="${currentValue}">${currentValue}</a></p>
      <p class="link__short"><a href="https://${APIlink}">${APIlink}</a></p>
      <button class="btn short__btn link">Copy</button>
    </div>`;
  generateSection.insertAdjacentHTML("beforeend", shortLink);
  formInput.value = "";
  formBtn.classList.remove("loading");
  formBtn.textContent = "Shorten It!";
}

async function getLink(data, longLink) {
  const request = await fetch(`https://api.shrtco.de/v2/shorten?url=${data}`);
  const shortLink = await request.json();
  const shortLinkData = shortLink.result.short_link2;
  generateLink(longLink, shortLinkData);
  getButtons(shortLinkData);
}

function getButtons(smallLink) {
  let btnID = document.querySelectorAll(".link");
  btnID.forEach((e) => {
    e.addEventListener("click", () => {
      // Copy Data to the clipboard
      window.navigator.clipboard.writeText(smallLink);
      e.classList.add("short__btn--active");
      e.textContent = "Copied!";
    });
  });
}
