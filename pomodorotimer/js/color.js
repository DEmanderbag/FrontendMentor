let themeLink = document.querySelector(".theme");

// Create local storage
let style = localStorage.getItem("style");

// if empty set default
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
