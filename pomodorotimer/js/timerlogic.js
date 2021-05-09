// Timer options
const timerOptions = document.querySelectorAll(".app__options button");
let groupOptions = document.querySelector(".group__options").childNodes;
let timerName;

// Timer time
let timer = document.querySelector(".app__timer h1");
let timerState = document.querySelector(".app__timer p");
const timerScreen = document.querySelector(".app__container");

// Timer names and time in minutes
let pomodoro = 25;
let shortBreak = 5;
let longBreak = 15;
let inverval = 0;
let time;
let isRunning = false;

// Get or set items from local storage
let pomodoroTimer = localStorage.getItem("pomodoroTimer");
let shortTimer = localStorage.getItem("shortTimer");
let longTimer = localStorage.getItem("longTimer");

if (pomodoroTimer == null) {
  localStorage.setItem("pomodoroTimer", 25);
  pomodoro = 25 * 60;
  time = pomodoro;
  updateTimer();
} else if (pomodoroTimer !== null) {
  time = pomodoroTimer * 60;
  updateTimer();
}

if (shortTimer == null) {
  localStorage.setItem("shortTimer", 5);
  shortBreak = 5 * 60;
}

if (longTimer == null) {
  localStorage.setItem("longTimer", 15);
  longBreak = 15 * 60;
}

// updateDuration
timerOptions.forEach((element) => {
  element.addEventListener("click", (e) => {
    pauseTimer();
    timerName = e.path[0].innerText;
    element.classList.remove("btn--active")
    if (timerName == "pomodoro") {
      time = pomodoro;
      removeBtnClass (3, 5)
      element.classList.add("btn--active");
      updateTimer();
    } else if (timerName == "short break") {
      time = shortBreak;
      removeBtnClass (1, 5)
      element.classList.add("btn--active");
      updateTimer();
    } else {
      time = longBreak;
      updateTimer();
      removeBtnClass (1, 3)
      element.classList.add("btn--active");
    }
  });
});

// Start and stop timer on click
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

// Start / Stop timer functions
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

function removeBtnClass (n1, n2) {
  groupOptions[n1].classList.remove("btn--active");
  groupOptions[n2].classList.remove("btn--active");
}