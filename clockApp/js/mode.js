let timeIcon = document.querySelector(".time__message img");
const timeMessage = document.querySelector(".time__message p");
const screen = document.querySelector(".overlay");

// Night mode
const darkMode = () => {
  document.documentElement.setAttribute("data-theme", "dark");
};

const lighMode = () => {
  document.documentElement.setAttribute("data-theme", "light");
};

// Custom message
function customGreeting() {
  let currentTime = new Date();
  let hours = currentTime.getHours();

  if (hours >= 5 && hours < 12) {
    timeMessage.textContent = "Good Morning";
  } else if (hours >= 12 && hours < 18) {
    timeMessage.textContent = "Good Afternoon";
  } else {
    timeMessage.textContent = "Good Evening";
  }
}

// Custom day / night image
function customMode() {
  const screen = document.querySelector(".screen");
  let currentTime = new Date();
  let hours = currentTime.getHours();

  if (hours >= 5 && hours < 18) {
    lighMode();
    timeIcon.src = `assets/desktop/icon-sun.svg`;
    screen.classList.remove("screen-bg-1n");
    screen.classList.add("screen-bg-1d");
  } else {
    darkMode();
    timeIcon.src = `assets/desktop/icon-moon.svg`;
    screen.classList.remove("screen-bg-1d");
    screen.classList.add("screen-bg-1n");
  }
}
