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

const generateSection = document.querySelector(".generate");
const form = document.querySelector("form");
const formInput = document.querySelector("form input");
const formBtn = document.querySelector("form button");

formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let currentValue = formInput.value;
  getLink(currentValue, currentValue);
});

function generateLink(currentValue, APIlink) {
  let shortLink = `<div class="link__section">
      <p class="link__original"><a href="${currentValue}">${currentValue}</a></p>
      <p class="link__short"><a href="https://${APIlink}">${APIlink}</a></p>
      <button class="btn short__btn">Copy</button>
    </div>`;
  generateSection.insertAdjacentHTML("beforeend", shortLink);
}

async function getLink(data, longLink) {
  const request = await fetch(`https://api.shrtco.de/v2/shorten?url=${data}`);
  const shortLink = await request.json();
  console.log(shortLink);
  const shortLinkData = shortLink.result.short_link2;
  generateLink(longLink, shortLinkData);
}
