const moreSection = document.querySelector(".more");
const quoteSection = document.querySelector(".quote");

// Button
const more = document.querySelector(".cta");
const refresh = document.querySelector(".quote__refresh");

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

// Get new random quote
refresh.addEventListener("click", getQuote);

// Call the when the website loads
getQuote();
setInterval(timeCurrent, 1000);
moreData();
customGreeting();
customMode();

// Fetch time from the IP
// fetch("https://worldtimeapi.org/api/ip", { method: "get" })
//   .then((res) => res.json())
//   .then((data) => {
//     const { abbreviation, datetime, day_of_week, day_of_year, week_number, timezone } = data;

//     let getTime = datetime.substring(11, 16);
//     time.innerHTML = `${getTime}<span class="time__zone">${abbreviation}</span>`;

//     // Data for more Section
//     timeZone.textContent = timezone;
//     dayYear.textContent = day_of_year;
//     dayWeek.textContent = day_of_week;
//     weekYear.textContent = week_number;
//   })
//   .catch((error) => {
//     console.error(error);
//     // In case API failes to load use the timeCurrent function to display correct time
//     setInterval(timeCurrent, 1000);
//     moreData();
//     customGreeting();
//     customMode();
//   });

function moreData() {
  let today = new Date();
  let dayOfYear = Math.ceil((today - new Date(today.getFullYear(), 0, 1)) / 86400000);
  let dayOfWeek = today.getDay();
  let timeZoneData = Intl.DateTimeFormat().resolvedOptions().timeZone;

  timeZone.textContent = timeZoneData;
  dayYear.textContent = dayOfYear;
  dayWeek.textContent = dayOfWeek;
  weekYear.textContent = `Update me`;
}

function timezone(date) {
  return /\((.*)\)/.exec(date.toString())[1];
}
console.log(timezone(new Date()));

let timeNow = new Date();
let weekOfYear = Math.ceil((timeNow - new Date(timeNow.getFullYear(), 0, 1)) / 604800);

console.log(weekOfYear);

// var now = new Date();
// var start = new Date(now.getFullYear(), 0, 0 / 604800);

// var diff = now - start + (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
// var oneDay = 1000 * 60 * 60 * 24;
// var day = Math.floor(diff / oneDay);
// console.log("Day of year: " + day);
