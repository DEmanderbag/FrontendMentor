const screen = document.querySelector(".overlay");
const moreSection = document.querySelector(".more");
const quoteSection = document.querySelector(".quote");
const time = document.querySelector(".time__current");

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
  screen.classList.toggle("open");
  quoteSection.classList.toggle("hidden");
  moreSection.classList.toggle("is-open");
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
