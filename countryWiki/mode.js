// For the dark mode
const head = document.querySelector("head");
const cta = document.querySelector(".cta");

cta.addEventListener("click", () => {
  localStorage.setItem("theme", cta.classList.contains("clicked"));
  cta.classList.toggle("clicked");
  if (cta.classList.contains("clicked")) {
    loadCSSFile("assets/style/light.css");
  } else {
    loadCSSFile("assets/style/dark.css");
  }
});

function loadCSSFile(filename) {
  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = filename;
  head.appendChild(link);
}
