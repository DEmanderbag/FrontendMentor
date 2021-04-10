// Change break times
let timeInput = document.querySelectorAll(".input__group input");

function updateDuration() {
  timeInput.forEach((e) => {
    if (e.dataset.timer == "pomodoro") {
      pomodoro = e.value;
      if (pomodoro != "") {
        localStorage.setItem("pomodoroTimer", pomodoro);
      }
    } else if (e.dataset.timer == "short") {
      shortBreak = e.value;
      if (shortBreak != "") {
        localStorage.setItem("shortTimer", shortBreak);
      }
    } else if (e.dataset.timer == "long") {
      longBreak = e.value;
      if (longBreak != "") {
        localStorage.setItem("longTimer", longBreak);
      }
    }
  });
}
