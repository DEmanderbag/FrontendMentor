const toggle = document.querySelector("input");
const switchBtn = document.querySelector(".switch");

toggle.addEventListener("click", () => {
  if (toggle.checked === true) {
    switchBtn.style.background = "linear-gradient(to right, var(--toggle001), var(--toggle001))";
    loadCSSFile("/styles/light.css");
  } else {
    switchBtn.style.background = "linear-gradient(to right, var(--toggle001), var(--toggle002))";
    loadCSSFile("/styles/dark.css");
  }
});

function loadCSSFile(filename) {
  const head = document.querySelector("head");
  let link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = filename;
  head.appendChild(link);
}
