// Dark mode toggle
let themeMode = localStorage.getItem("theme");
const themeSwtich = document.querySelector(".cta");

const darkMode = () => {
  document.documentElement.setAttribute("data-theme", "dark");
  // themeSwtich.textContent = "Light Mode";
  localStorage.setItem("theme", "dark");
};

const lighMode = () => {
  document.documentElement.setAttribute("data-theme", "light");
  // themeSwtich.textContent = "Dark Mode";
  localStorage.setItem("theme", "light");
};

if (themeMode === "dark") {
  darkMode();
}

themeSwtich.addEventListener("click", () => {
  if (document.documentElement.dataset.theme === "light") {
    darkMode();
  } else {
    lighMode();
  }
});
