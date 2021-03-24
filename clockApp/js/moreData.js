// More data elements
const timeZone = document.querySelector(".time-zone");
const dayYear = document.querySelector(".day-year");
const dayWeek = document.querySelector(".day-week");
const weekYear = document.querySelector(".week-year");

function moreData() {
  let today = new Date();
  // First week of year
  var week1 = new Date(today.getFullYear(), 0, 1);

  let dayOfYear = Math.ceil((today - new Date(today.getFullYear(), 0, 1)) / 86400000);
  let dayOfWeek = today.getDay();
  let weekOfYear = Math.round(
    ((today.getTime() - week1.getTime()) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7
  );
  let timeZoneData = Intl.DateTimeFormat().resolvedOptions().timeZone;

  timeZone.textContent = timeZoneData;
  dayYear.textContent = dayOfYear;
  dayWeek.textContent = dayOfWeek;
  weekYear.textContent = weekOfYear;
}
