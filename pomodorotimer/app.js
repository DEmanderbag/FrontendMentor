// Settings menu and controls
const settings = document.querySelector(".settings");
const appSettings = document.querySelector(".app__settings");
const closeSettings = document.querySelector(".menu__group img");

appSettings.addEventListener("click", () => {
  settings.classList.add("is-open");
});

closeSettings.addEventListener("click", () => {
  settings.classList.remove("is-open");
});
