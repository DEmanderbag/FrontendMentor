let pomodoroTimer = localStorage.getItem("pomodoroTimer");
let shortTimer = localStorage.getItem("shortTimer");
let longTimer = localStorage.getItem("longTimer");

// Change break times
let timeInput = document.querySelectorAll(".input__group input");

if (pomodoroTimer == null) {
  updateDuration("pomodoro");
} else {
  updateDuration(pomodoroTimer);
}

if (shortTimer == null) {
  updateDuration("shortTimer");
} else {
  updateDuration(shortTimer);
}

if (longTimer == null) {
  updateDuration("longTimer");
} else {
  updateDuration(longTimer);
}

function updateDuration() {
  timeInput.forEach((element) => {
    if (element.dataset.timer == "pomodoro") {
      pomodoro = element.value;
      localStorage.setItem("pomodoroTimer", pomodoro);
    } else if (element.dataset.timer == "short") {
      shortBreak = element.value;
      localStorage.setItem("shortTimer", shortBreak);
    } else if (element.dataset.timer == "long") {
      longBreak = element.value;
      localStorage.setItem("longTimer", longBreak);
    }
  });
  console.log(pomodoro);
  console.log(shortBreak);
  console.log(longBreak);
}
