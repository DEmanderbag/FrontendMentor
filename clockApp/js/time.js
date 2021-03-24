const time = document.querySelector(".time__current");

function timeCurrent() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();

  hours = pad(hours);
  minutes = pad(minutes);
  time.innerHTML = `${hours}:${minutes}<span class="time__zone"></span>`;
}

function pad(number) {
  return number < 10 ? "0" + number : number;
}
