let themeLink = document.querySelector(".theme");

// Create local storage
let style = localStorage.getItem("style");

// if empty set default
if (style == null || style == "undefined") {
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

// Color
let colorSettings = document.querySelectorAll(".menu__color .btn");
let currentButtonValue;
let currentColor;

colorSettings.forEach((e) => {
  e.addEventListener("click", (element) => {
    currentButtonValue = element.target.classList[1];
    removeClass(colorSettings, "color--active");
    localStorage.setItem("currentButton", currentButtonValue)
    e.classList.add("color--active");
    currentColor = e.dataset.color;
  });
});


let currentButton = localStorage.getItem("currentButton");
if(currentButton == null) {
  localStorage.setItem("currentButton", "color--one");
}

function lookForButton() {
  colorSettings.forEach(element => {
    if(element.classList.contains(currentButton)){
      element.classList.add("color--active");
    } else {
      element.classList.remove("color--active");
    }
  });
}

lookForButton();