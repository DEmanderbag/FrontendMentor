if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then((registration) => console.log("Service worker registered"))
    .catch((error) => console.log("Service worker not registered", error));
}

const moreSection = document.querySelector(".more");
const quoteSection = document.querySelector(".quote");

// Button
const more = document.querySelector(".cta");
const moreText = document.querySelector(".cta p");
const moreIcon = document.querySelector(".cta img");
const refresh = document.querySelector(".quote__refresh");

more.addEventListener("click", openSection);

more.addEventListener("keypress", (e) => {
  if (e.key === "Enter") return openSection();
});
// Get new random quote
refresh.addEventListener("click", getQuote);

// Call the when the website loads
getQuote();
setInterval(timeCurrent, 1000);
moreData();
customGreeting();
customMode();

function openSection() {
  moreText.innerText = "More";
  moreIcon.classList.remove("rotate");
  screen.classList.toggle("open");
  quoteSection.classList.toggle("hidden");
  moreSection.classList.toggle("is-open");

  if (moreSection.classList.contains("is-open")) {
    moreText.innerText = "Less";
    moreIcon.classList.add("rotate");
  }
}
// This API is unstable all of this date already available in moreData.js and time.js
// It's in use just to correct time Zone info in case is not correct
fetch("https://worldtimeapi.org/api/ip", { method: "get" })
  .then((res) => res.json())
  .then((data) => {
    const { day_of_week, day_of_year, week_number, timezone } = data;

    // Data for more Section
    timeZone.textContent = timezone;
    dayYear.textContent = day_of_year;
    dayWeek.textContent = day_of_week;
    weekYear.textContent = week_number;
  })
  .catch((error) => {
    console.error(error);
  });
