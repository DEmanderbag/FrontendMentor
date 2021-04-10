const app = document.querySelector(".app");

// Create local storage
let font = localStorage.getItem("font");

// if empty set default
if (font == null) {
  setFont("Kumbh");
} else {
  setFont(font);
}

function setFont(font) {
  if (font == "Kumbh") {
    app.style.fontFamily = "'Kumbh Sans', sans-serif";
  } else if (font == "Roboto") {
    app.style.fontFamily = "'Roboto Slab', serif";
  } else if (font == "Space") {
    app.style.fontFamily = "'Space Mono', monospace";
  }
  localStorage.setItem("font", font);
}

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
