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

// Reusable class
function removeClass(settings, className) {
  settings.forEach((item) => {
    item.classList.remove(className);
  });
}

const ctaBtn = document.querySelector(".cta");

ctaBtn.addEventListener("click", () => {
  app.setAttribute("data-font", currentFont);
  app.setAttribute("data-color", currentColor);
  setTheme(currentColor);
  setFont(currentFont);
  updateDuration();
  refreshAll();
  settings.classList.remove("is-open");
});

// Add to local storage
function refreshAll() {
  shortTimer = localStorage.getItem("shortTimer");
  shortBreak = shortTimer * 60;

  longTimer = localStorage.getItem("longTimer");
  longBreak = longTimer * 60;

  pomodoroTimer = localStorage.getItem("pomodoroTimer");
  pomodoro = pomodoroTimer * 60;
}

refreshAll();
