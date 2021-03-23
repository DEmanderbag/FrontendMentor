const screen = document.querySelector(".overlay");
const moreSection = document.querySelector(".more");
const quoteSection = document.querySelector(".quote");
const time = document.querySelector(".time__current");

const timeMessage = document.querySelector(".time__message p");
// Button
const more = document.querySelector(".cta");
const refresh = document.querySelector(".quote__refresh");

// Quote section
const quoteText = document.querySelector(".quote__text");
const quoteAuthor = document.querySelector(".quote__author");

// More data elements
const timeZone = document.querySelector(".time-zone");
const dayYear = document.querySelector(".day-year");
const dayWeek = document.querySelector(".day-week");
const weekYear = document.querySelector(".week-year");

more.addEventListener("click", () => {
  more.innerHTML = `More<span><img src="assets/desktop/icon-arrow-up.svg"
              alt="arrow"></span></button>`;
  screen.classList.toggle("open");
  quoteSection.classList.toggle("hidden");
  moreSection.classList.toggle("is-open");

  if (moreSection.classList.contains("is-open")) {
    more.innerHTML = `Less<span><img src="assets/desktop/icon-arrow-up.svg"
              alt="arrow" class="rotate"></span></button>`;
  }
});

refresh.addEventListener("click", getQuote);
// Call the when the website loads
getQuote();
timeCurrent();
moreData();

// Fetch time from the IP
fetch("http://worldtimeapi.org/api/ip", { method: "get" })
  .then((res) => res.json())
  .then((data) => {
    const { abbreviation, datetime, day_of_week, day_of_year, week_number, timezone } = data;

    let getTime = datetime.substring(11, 16);
    time.innerHTML = `${getTime}<span class="time__zone">${abbreviation}</span>`;

    // Data for more Section
    timeZone.textContent = timezone;
    dayYear.textContent = day_of_year;
    dayWeek.textContent = day_of_week;
    weekYear.textContent = week_number;
  })
  .catch((error) => {
    console.error(error);
    // In case API failes to load use the timeCurrent function to display correct time
    setInterval(timeCurrent, 1000);
    moreData();
  });

function timeCurrent() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  if (minutes < 10) {
    if (hours < 10 && minutes < 10) {
      time.innerHTML = `0${hours}:0${minutes}<span class="time__zone"></span>`;
    } else {
      time.innerHTML = `${hours}:0${minutes}<span class="time__zone"></span>`;
    }
  } else if (hours < 10) {
    if (minutes < 10 && hours < 10) {
      time.innerHTML = `0${hours}:0${minutes}<span class="time__zone"></span>`;
    } else {
      time.innerHTML = `0${hours}:${minutes}<span class="time__zone"></span>`;
    }
  } else {
    time.innerHTML = `${hours}:${minutes}<span class="time__zone"></span>`;
  }
}

function moreData() {
  let today = new Date();
  let dayOfYear = Math.ceil((today - new Date(today.getFullYear(), 0, 1)) / 86400000);
  let dayOfWeek = today.getDay();

  timeZone.textContent = `Update me`;
  dayYear.textContent = dayOfYear;
  dayWeek.textContent = dayOfWeek;
  weekYear.textContent = `Update me`;
}

async function getQuote() {
  const request = await fetch("https://api.quotable.io/random");
  const { author, content } = await request.json();

  quoteAuthor.textContent = author;
  quoteText.textContent = content;
}

// Custom message
function customGreeting() {
  let currentTime = new Date();
  let hours = currentTime.getHours();

  if (hours >= 5 && hours < 12) {
    timeMessage.textContent = "Good Morning";
  } else if (hours >= 12 && hours < 6) {
    timeMessage.textContent = "Good Afternoon";
  } else {
    timeMessage.textContent = "Good Evening";
  }
}

customGreeting();

const darkMode = () => {
  document.documentElement.setAttribute("data-theme", "dark");
};

const lighMode = () => {
  document.documentElement.setAttribute("data-theme", "light");
};

function customMode() {
  const screen = document.querySelector(".screen");
  let currentTime = new Date();
  let hours = currentTime.getHours();

  if (hours >= 5 && hours < 18) {
    lighMode();
    screen.style.backgroundImage = "url('/assets/desktop/bg-image-daytime.jpg.jpg')";
  } else {
    darkMode();
    screen.style.backgroundImage = "url('/assets/desktop/bg-image-nighttime.jpg')";
  }
}

customMode();
// The sun icon and the daytime background image between 5am and 6pm
// The moon icon and the nighttime background image between 6pm and 5am
