const app = document.querySelector(".app");

// Create local storage
let font = localStorage.getItem("font");

// if empty set default
if (font == null || font == "undefined") {
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
let currentActiveFont;

fontSettings.forEach((e) => {
  e.addEventListener("click", (element) => {
    currentActiveFont = element.target.classList[1];
    console.log(currentActiveFont);
    removeClass(fontSettings, "btn--active");
    localStorage.setItem("currentFontValue", currentActiveFont)
    e.classList.add("btn--active");
    currentFont = e.dataset.font;
  });
});

let currentFontValue = localStorage.getItem("currentFontValue");
if(currentFontValue == null) {
  localStorage.setItem("currentFontValue", "font-one");
}

function lookForFont() {
  fontSettings.forEach(element => {
    if(element.classList.contains(currentFontValue)){
      element.classList.add("btn--active");
    } else {
      element.classList.remove("btn--active");
    }
  });
}

lookForFont();