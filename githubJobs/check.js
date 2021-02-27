function calculateTime(jobDate) {
  let postDate = new Date(jobDate);
  let currentDate = new Date();
  let differentTime = Math.abs(currentDate - postDate);

  const diffDays = Math.ceil(differentTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.round(Math.ceil(currentDate - postDate) / 36e5);
  if (diffHours < 1) return `1h ago`;
  if (diffHours < 23) return `${diffHours}h ago`;
  if (diffHours >= 23) return `${diffDays}d ago`;
}

function checkImage(logo) {
  if (logo === null) {
    return "assets/icons/default.svg";
  } else {
    return logo;
  }
}

// Dark mode toggle
let themeMode = localStorage.getItem("themeMode");
const swtich = document.querySelector("input[name=theme]");

const darkMode = () => {
  document.documentElement.setAttribute("data-theme", "dark");
  swtich.checked = true;
  localStorage.setItem("themeMode", "dark");
};

const lighMode = () => {
  document.documentElement.setAttribute("data-theme", "light");
  swtich.checked = false;
  localStorage.setItem("themeMode", "light");
};

if (themeMode === "dark") {
  darkMode();
}

swtich.addEventListener("change", () => {
  if (swtich.checked) {
    transition();
    darkMode();
  } else {
    transition();
    lighMode();
  }
});

let transition = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};
