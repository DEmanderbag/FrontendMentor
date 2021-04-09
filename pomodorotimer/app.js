// Settings menu and controls
const app = document.querySelector(".app");
const settings = document.querySelector(".settings");
const appSettings = document.querySelector(".app__settings");
const closeSettings = document.querySelector(".menu__group img");

appSettings.addEventListener("click", () => {
  settings.classList.add("is-open");
});

closeSettings.addEventListener("click", () => {
  settings.classList.remove("is-open");
});

// Timer options
const timerOptions = document.querySelectorAll(".app__options input");
let timerName;

// Timer names and time in minutes
let pomodoro = 25;
let shortBreak = 5;
let longBreak = 15;
let inverval = 0;
let time;
let isRunning = false;

// Timer time
let timer = document.querySelector(".app__timer h1");
let timerState = document.querySelector(".app__timer p");
const timerScreen = document.querySelector(".app__container");

// Set pomodoro timer in the beginning
time = pomodoro * 60;
updateTimer();

timerOptions.forEach((element) => {
  element.addEventListener("click", (e) => {
    pauseTimer();
    timerName = e.path[1].innerText;
    if (timerName == "pomodoro") {
      time = pomodoro * 60;
      updateTimer();
    } else if (timerName == "short break") {
      time = shortBreak * 60;
      updateTimer();
    } else {
      time = longBreak * 60;
      updateTimer();
    }
  });
});

timerScreen.addEventListener("click", () => {
  if (isRunning == true) {
    pauseTimer();
  } else {
    startTimer();
  }
});

function updateTimer() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  minutes = pad(minutes);
  seconds = pad(seconds);

  timer.innerHTML = `${minutes}:${seconds}`;
  time--;
  if (time < 0) {
    clearInterval(inverval);
    timerState.innerHTML = "start";
  }
}

function pad(number) {
  return number < 10 ? "0" + number : number;
}

// Start / Stop timer
function startTimer() {
  timerState.innerHTML = "pause";
  inverval = setInterval(updateTimer, 1000);
  isRunning = true;
}

function pauseTimer() {
  clearInterval(inverval);
  isRunning = false;
  timerState.innerHTML = "start";
  inverval = 0;
}

// Settings section
let themeLink = document.querySelector(".test");
console.log(themeLink);
// Font
let fontSettings = document.querySelectorAll(".menu__font .btn");
let currentFont;

fontSettings.forEach((e) => {
  e.addEventListener("click", () => {
    removeClass(fontSettings, "btn--active");
    e.classList.add("btn--active");
    currentFont = e.dataset.font;
  });
});

// Color
let colorSettings = document.querySelectorAll(".menu__color .btn");
let currentColor;

colorSettings.forEach((e) => {
  e.addEventListener("click", () => {
    removeClass(colorSettings, "color--active");
    e.classList.add("color--active");
    currentColor = e.dataset.color;
  });
});

function removeClass(settings, className) {
  settings.forEach((item) => {
    item.classList.remove(className);
  });
}

const ctaBtn = document.querySelector(".cta");

ctaBtn.addEventListener("click", () => {
  app.setAttribute("data-font", currentFont);
  app.setAttribute("data-color", currentColor);
  console.log(currentColor);
  setTheme(currentColor);
  setFont(currentFont);
  settings.classList.remove("is-open");
});

// Set color
let style = localStorage.getItem("style");

if (style == null) {
  setTheme("#f87070");
} else {
  setTheme(style);
}

function setTheme(theme) {
  if (theme == "#f87070") {
    themeLink.href = "assets/css/theme/themeOne.css";
  } else if (theme == "#70f3f8") {
    themeLink.href = "assets/css/theme/themeTwo.css";
  } else if (theme == "#d881f8") {
    themeLink.href = "assets/css/theme/themeThree.css";
  }
  localStorage.setItem("style", theme);
}

let font = localStorage.getItem("font");

if (font == null) {
  setFont("Kumbh");
} else {
  setFont(font);
}

function setFont(font) {
  if (font == "Kumbh") {
    app.style.fontFamily = "'Kumbh Sans', sans-serif";
    console.log(themeLink);
  } else if (font == "Roboto") {
    app.style.fontFamily = "'Roboto Slab', serif";
  } else if (font == "Space") {
    app.style.fontFamily = "'Space Mono', monospace";
  }
  localStorage.setItem("font", font);
}
