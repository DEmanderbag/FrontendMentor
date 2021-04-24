// Timer options
const timerOptions = document.querySelectorAll(".app__options input");
let timerName;

// Timer time
let timer = document.querySelector(".app__timer h1");
let timerState = document.querySelector(".app__timer p");
const timerScreen = document.querySelector(".app__container");

// Timer names and time in minutes
let pomodoro, shortBreak, longBreak;
let time;
let inverval = 0;
let isRunning = false;

let pomodoroTimer = localStorage.getItem("pomodoroTimer");
let shortTimer = localStorage.getItem("shortTimer");
let longTimer = localStorage.getItem("longTimer");

if (pomodoroTimer == null) {
  localStorage.setItem("pomodoroTimer", 25);
  pomodoro = 25 * 60;
  updateTimer();
}

if (shortTimer == null) {
  localStorage.setItem("shortTimer", 5);
  shortBreak = 5 * 60;
  updateTimer();
}

if (longTimer == null) {
  localStorage.setItem("longTimer", 15);
  longBreak = 15 * 60;
  updateTimer();
}

timerOptions.forEach((element) => {
  element.addEventListener("click", (e) => {
    pauseTimer();
    timerName = e.path[1].innerText;
    if (timerName == "pomodoro") {
      pomodoro = pomodoroTimer * 60;
      console.log(pomodoro);
      updateTimer(pomodoro);
    } else if (timerName == "short break") {
      shortBreak = shortTimer * 60;
      updateTimer(shortBreak);
    } else {
      longBreak = longTimer * 60;
      updateTimer(longBreak);
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

// !Fix this function
function updateTimer(value) {
  let minutes = Math.floor(value / 60);
  let seconds = value % 60;
  minutes = pad(minutes);
  seconds = pad(seconds);

  timer.innerHTML = `${minutes}:${seconds}`;
  value--;
  if (value < 0) {
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
