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

// Timer options
const timerOptions = document.querySelectorAll(".app__options input");
let timerName;

// Timer names and time in minutes
let pomodoro = 25;
let shortBreak = 5;
let longBreak = 15;
let inverval;
let time;
let isRunning = false;

// Timer time
let timer = document.querySelector(".app__timer h1");
let timerState = document.querySelector(".app__timer p");
const timerScreen = document.querySelector(".app__container");

timerScreen.addEventListener("click", () => {
  if (isRunning) return;

  isRunning = true;
  timerState.innerHTML = "pause";
  inverval = setInterval(updateTimer, 1000);
});

timerOptions.forEach((element) => {
  element.addEventListener("click", (e) => {
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

function updateTimer() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  minutes = pad(minutes);
  seconds = pad(seconds);

  timer.innerHTML = `${minutes}:${seconds}`;
  time--;
  if (time < 0) {
    clearInterval(inverval);
  }
}

function pad(number) {
  return number < 10 ? "0" + number : number;
}
